import { fetchMdx } from "../api/fetch_mdx";

import "./page.css";

const Page = async () => {
  console.log(await fetchMdx("./src/public/notices"));

  return (
    <div className="content">
      <div className="aside">

      </div>
      <div className="main">
 
      </div>
    </div>
  );
}

export default Page;
