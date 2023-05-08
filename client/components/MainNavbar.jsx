import React, { useEffect, useState } from "react";
import { HiX, HiMenuAlt4 } from "react-icons/hi";
import { motion } from "framer-motion";
import Link from "next/link";

// import { urlFor } from "@/client/client";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const links = [
  { name: "brochure", link: "/brochure" },
  // { name: "webinar", link: "/webinar" },
  { name: "franchise costs", link: "/franchiseCosts" },
  { name: "FDD", link: "/fdd" },
  { name: "Operations Manual", link: "/operationsManual" },
  { name: "Press Release", link: "/pressRelease" },
];

const MainNavbar = ({ logo }) => {
  const [toggle, setToggle] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.7,
      }}
      className={`right-0 left-0 fixed ${scroll ? "top-0" : "top-15"} ${
        scroll ? "bg-[rgb(255,255,255,0.7)]" : "bg-[#a3a3a375]"
      } z-30`}
    >
      <div
        className={`flex px-2  max-w-7xl mx-auto items-center justify-between py-[18px] h-20`}
      >
        <a href="https://web.whatsapp.com/send?phone=972-762-2881" className="text-2xl text-pink-800 lg:hidden hover:text-[#F3D8E6]" target="_blank">
          <FaPhoneAlt />
         </a>
        <motion.div
          initial={{ x: -25, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
          }}
          className="logo"
        >
          <Link href="/">
            <img
              src="/logo.jpg"
              // src={urlFor(logo[0]?.logoImg)}
              alt="Logo"
              className="w-60"
            />
          </Link>
        </motion.div>
        <motion.ul
          initial={{ x: 55, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
          }}
          className="hidden items-center justify-center gap-4 lg:gap-6 lg:flex"
        >
          {links.map((link, index) => (
            <li
              key={index}
              className="relative text-black transition-colors duration-300 ease-in-out navHover uppercase font-semibold"
            >
              <Link href={link.link} className="">
                {link.name}
              </Link>
            </li>
          ))}
        </motion.ul>
        <div className="lg:hidden relative w-10 h-10 flex items-center justify-center bg-pink-700 text-gray-200 p-2 rounded-full">
          <HiMenuAlt4
            onClick={() => {
              setToggle(true);
            }}
            className=" w-[90%] h-[90%] cursor-pointer"
          />
          {toggle && (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="fixed bg-[url(/bgWhite.png)] bg-repeat z-10 h-screen w-[100%] sm:w-[70%] flex flex-col bg-pink-50 bg-cover top-0 right-0 shadow-2xl"
            >
              <HiX
                className="text-3xl text-black m-4 cursor-pointer"
                onClick={() => {
                  setToggle(false);
                }}
              />
              <ul className="flex flex-col justify-center items-center gap-8">
                {links.map((link, index) => (
                  <motion.li
                    initial={{ y: -25, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.7,
                    }}
                    key={index}
                    className="text-center"
                  >
                    <Link
                      href={link.link}
                      onClick={() => {
                        setToggle(false);
                      }}
                      className="text-gray-800 z-10 uppercase font-semibold hover:text-pink-800"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <motion.ul
                initial={{ y: -25, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.7,
                }}
                className="md:hidden flex gap-6 mt-7 items-center justify-center "
              >
                <li>
                  <Link
                    target="_blank"
                    href="#"
                    className="text-2xl text-black hover:text-[#F3D8E6]"
                  >
                    <FaFacebookF />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="#"
                    className="text-2xl text-black hover:text-[#F3D8E6]"
                  >
                    <FaTwitter />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="#"
                    className="text-2xl text-black hover:text-[#F3D8E6]"
                  >
                    <FaInstagram />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="#"
                    className="text-2xl text-black hover:text-[#F3D8E6]"
                  >
                    <FaLinkedin />
                  </Link>
                </li>
              </motion.ul>
              <motion.div
                initial={{ y: -25, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.7,
                }}
                className="md:hidden flex flex-wrap items-center justify-center mt-7 gap-4"
              >
                <div className="flex flex-col justify-center items-center  gap-8">
                  <p
                    onClick={() => setActiveCall(!activeCall)}
                    className="text-gray-700 text-lg font-semibold text-center"
                    style={{ overflowWrap: "anywhere" }}
                  >
                    {" "}
                    Call us. Llamenos. Appelle nous:{" "}
                    <span className="text-pink-700">302-389-5221</span>
                  </p>
                  <p className="text-gray-700 text-lg text-center font-[500] text-clip">
                    FRANCHISING@OURMAIDS.COM{" "}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default MainNavbar;
