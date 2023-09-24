import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { cacheFetchMdx } from "../api/fetch_mdx";
import nookies from "nookies";
import { firebaseAdmin } from "../firebase/firebaseAdmin";

import "./page.css";
import { GetServerSidePropsContext } from "next";

const Page = async (): Promise<JSX.Element> => {
  const noticeList = await cacheFetchMdx("./src/app/blog/markdown/notice");
  const notice = noticeList.shift();
  const markdown = notice?.body;

  return (
    <div className="content">
      <div className="aside"></div>
      <div className="main">{<MDXRemote source={markdown ?? ""} />} </div>
    </div>
  );
};

export const getServerSideProps = async(context: GetServerSidePropsContext): Promise<{ props: object }> => {
  try {
    const cookies = nookies.get(context);
    const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);
    const { uid, email } = token;
    console.log("uid, email: ", uid, email);

    return {
      props: { message: "Your email is ${email} and your UID is ${uid}." },
    };
  } catch (error) {
    context.res.writeHead(302, { Location: "/login" });
    context.res.end();
    return {
      props: {} as never,
    };
  }
};

export default Page;
