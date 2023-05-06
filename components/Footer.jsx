import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="px-5 mx-auto py-10 overflow-x-hidden bg-[#2E2E2E]">
      <section className="text-white max-w-7xl mx-auto body-font flex flex-col items-center justify-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.7,
          }}
          className="my-5 text-lg "
        >
          This website and the information contained herein do not constitute
          the offer or sale of a franchise. Certain states require the
          registration of an FDD before the franchisor can advertise or offer
          the franchise in that state. This franchise may not be registered in
          all states and may not offer franchises to residents of registration
          states or persons wishing to open a franchise in those states until
          compliance guidelines are met. The offer and sale of a franchise can
          only be made through the delivery and receipt of a Franchise
          Disclosure Document (FDD).{" "}
        </motion.p>
        <div className=" justify-between flex gap-3 md:gap-10 lg:gap-44 flex-col sm:flex-row w-full  items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
            }}
            className=" sm:w-1/2 "
          >
            <Link href="/">
              <img className="w-36 md:w-72 mb-4" alt="hero" src="/logo.jpg" />
            </Link>
            <h5 className="font-semibold ">
              © 2023 All Rights Reserved worldwide | 2000-2023. The Our Maids
              logo, Our Maids and "A helping Hand for Busy People" are
              registered trademarks of Our Maids, Inc. 8 The Green, Suite 14095,
              Dover, DE 19901.
              <a href="/privacy-policy" className="underline"> Our Privacy Policy</a>
            </h5>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
            }}
            className="w-full sm:w-1/2 "
          >
            <h1 className="title-font text-xl md:text-3xl mb-2 md:mb-4 font-semibold text-white">
              OUR MAIDS FRANCHISE, INC.
            </h1>
            <p className="leading-normal text-[16x] md:text-[17px] mb-4">
              Our Maids Franchise, Inc. <br /> 8 The Green, Suite 14095, Dover,
              DE 19901 <br /> Call us. Llamenos. Appelle nous. (302) 389 5221
              <br />
              email us:{" "}
              <a href="mailto:customercare@ourmaids.com" className="underline">franchising@ourmaids.com</a>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
