import React from "react";
import RecentPosts from "../components/recentPosts/recentPosts";
import { MDXRemote } from "next-mdx-remote/rsc";
import { cacheFetchMdx } from "../api/fetch_mdx";

import "./page.css";

const Page = async (): Promise<JSX.Element> => {
  const noticeList = await cacheFetchMdx("./src/app/blog/markdown/notice");
  const notice = noticeList.shift();
  const markdown = notice?.body;

  return (
    <div className="content">
      <div className="aside">
        <RecentPosts></RecentPosts>
      </div>
      <div className="main">{<MDXRemote source={markdown ?? ""} />} </div>
    </div>
  );
};

export default Page;
