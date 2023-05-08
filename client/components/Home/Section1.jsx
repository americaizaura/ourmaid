import React from "react";
import { motion } from "framer-motion";
import ContactSection from "./ContactSection";

const Section1 = () => {
  return (
    <div className="max-w-7xl px-5 mx-auto mt-48 md:mt-20 min-h-screen flex flex-col items-center justify-center py-20 overflow-x-hidden">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.7,
        }}
        className="title-font sm:text-3xl flex flex-col gap-4 text-2xl mb-12 text-center font-medium text-gray-900 w-full"
      >
        DO YOU LIKE TRAVELING? LIVING IN DIFFERENT PARTS OF THE WORLD FOR LONG
        PERIODS OF TIME: UP ON THE MOUNTAINS OR DOWN THE SEA LEVEL ON THE BEST
        BEACHES OF THE WORLD OR IN SOPHISTICATED CITIES LIKE PARIS, LOS ANGELES,
        BERLIN?
        <br />
        <span className="text-pink-800 ">
          IF THE ANSWER IS YES, THEN THIS FRANCHISE IS FOR YOU.
        </span>
      </motion.h1>
      <ContactSection />
      <section className="text-gray-600 body-font w-full flex items-center justify-center">
        <div className="container mx-auto flex  md:flex-row flex-col items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
            }}
            className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center"
          >
            <p className="leading-relaxed text-[18px] mb-4">
              Thank you for your interest in becoming a franchisee! Our Maids
              Inc. is proud to allow others to be a part of our successful brand
              that continues to receive acclaim from clients thanks to our
              dedication to providing excellent residential and commercial
              cleaning services. We pride ourselves on our ability to get the
              job done all while having the best attitude and a smile on our
              faces every single time. We are offering any aspiring business
              owner, entrepreneur, or seasoned veteran a chance to access our
              extremely profitable and streamlined concept to build upon it in
              other communities. We welcome anyone passionate about providing
              these services across the United States, Canada and Mexico! (and
              in the coming years all over the world) We will show you how in
              one week or less you will be making money.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
            }}
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
          >
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://lirp.cdn-website.com/94c95444/import/clib/ourmaids_com/dms3rep/multi/opt/21121942_lel_d600-600x400-1044w.jpg"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Section1;
