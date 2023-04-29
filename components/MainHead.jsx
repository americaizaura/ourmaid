import React from "react";
import Head from 'next/head'


const MainHead = ({ metaTitle, metaKeywords, metaDesc}) => {
  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="keywords" content={metaKeywords} />
      <meta name="description" content={metaDesc} />
    </Head>
  );
};

export default MainHead;
