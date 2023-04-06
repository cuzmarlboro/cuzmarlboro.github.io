import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./index.module.css";
import Translate from "@docusaurus/Translate";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout description="Description will go into a meta tag in <head />">
      <div
        className={styles.hero_wrap}
        style={{
          background: `url(./img/bg.svg) center center/cover no-repeat`,
        }}
      >
        <p className={styles.hero_subtitle}>{siteConfig.tagline}</p>
      </div>
    </Layout>
  );
}

export default Home;
