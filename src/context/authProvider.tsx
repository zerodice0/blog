"use client";

import React from "react";
import { getAuth } from "firebase/auth";
import { useState, useEffect, useMemo } from "react";
import nookies from "nookies";

import type { User } from "firebase/auth";
import type { PropsWithChildren } from "react";

// export const getServerSideProps = async (
//   context: GetServerSidePropsContext,
// ): Promise<{ props: object }> => {
//   try {
//     const cookies = nookies.get(context);
//     const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);
//     const { uid, email } = token;
//     console.log("uid, email: ", uid, email);

//     return {
//       props: { message: "Your email is ${email} and your UID is ${uid}." },
//     };
//   } catch (error) {
//     context.res.writeHead(302, { Location: "/login" });
//     context.res.end();
//     return {
//       props: {} as never,
//     };
//   }
// };

// const AuthContext = createContext<{ user: User | null }>({
//   user: null,
// });

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
