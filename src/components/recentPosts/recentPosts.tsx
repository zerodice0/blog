"use client";

import React from "react";

interface Post {
  id: string;
  title: string;
  content: string;
}

const RecentPosts = (): JSX.Element => {
  const posts: Post[] = [];
  // const posts = postSnapshot.docs
  //   .map((post: DocumentSnapshot) => {
  //     const postData = post.data();

  //     return {
  //       id: post.id,
  //       title: postData?.title ?? "",
  //       content: postData?.content ?? "",
  //     };
  //   })
  //   .slice(0, 10);

  return (
    <div>
      <div>RecentPosts</div>
      <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default RecentPosts;
