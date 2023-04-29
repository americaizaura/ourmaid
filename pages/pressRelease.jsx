import MainHead from "@/components/MainHead";
import Hero from "@/components/Press Release/Hero";
import Section1 from "@/components/Press Release/Section1";
import React from "react";

const pressRelease = () => {
  return (
    <>
      <MainHead
        metaTitle="Residential and commercial cleaning franchise, press release."
        metaKeywords="Put Keywords here for Pressrelease page"
        metaDesc="Put description here for Pressrelease page"
      />
      <Hero />
      <Section1 />
    </>
  );
};

export default pressRelease;
