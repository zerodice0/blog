"use client";

import React from "react";
import { getAuth } from "firebase/auth";
import { useState, createContext, useEffect, useMemo } from "react";
import nookies from "nookies";

import type { User } from "firebase/auth";
import type { PropsWithChildren } from "react";

const AuthContext = createContext<{ user: User | null }>({
  user: null,
});

export const AuthProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const [userState, setUserState] = useState<User | null>(null);

  useEffect(() => {
    return getAuth().onIdTokenChanged(async (user: User | null) => {
      if (user === null) {
        setUserState(null);
        nookies.set(null, "token", "", { path: "/" });
        return;
      }

      setUserState(user);
      const token = await user.getIdToken();
      nookies.destroy(null, "token");
      nookies.set(null, "token", token, { path: "/" });
      return;
    });
  }, []);

  useEffect(() => {
    const refreshToken = setInterval(
      async () => {
        const { currentUser } = getAuth();
        if (currentUser) {
          await currentUser.getIdToken(true);
        }
      },
      10 * 60 * 1000,
    );

    return () => clearInterval(refreshToken);
  }, []);

  const user = useMemo(
    () => ({
      user: userState,
    }),
    [userState],
  );

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
