import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYelp,
  FaEnvelopeSquare,
  FaWhatsapp
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const TopNavbar = () => {
  const [activeCall, setActiveCall] = useState(false);
  return (
    <div className=" bg-[#2E2E2E] md:block p-3 hidden">
      {" "}
      <div className="md:flex items-center gap-4 justify-between max-w-7xl mx-auto ">
        <motion.ul
          initial={{ y: -25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
          }}
          className="flex gap-3"
        >
          <li>
            <a href="https://facebook.com/maids4us" className="text-2xl text-white hover:text-[#F3D8E6]" target="_blank">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/ourmaids" className="text-2xl text-white hover:text-[#F3D8E6]" target="_blank">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://instagram.com/ourmaids" className="text-2xl text-white hover:text-[#F3D8E6]" target="_blank">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/antoniovmoreno" className="text-2xl text-white hover:text-[#F3D8E6]" target="_blank">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="https://yelp.com/biz/our-maids-grand-prairie" className="text-2xl text-white hover:text-[#F3D8E6]" target="_blank">
              <FaYelp />
            </a>
          </li>
          <li>
            <a href="mailto:customercare@ourmaids.com" className="text-2xl text-white hover:text-[#F3D8E6]" target="_blank">
              <FaEnvelopeSquare />
            </a>
          </li>
          <li>
            <a href="https://web.whatsapp.com/send?phone=972-762-2881" className="text-2xl text-white hover:text-[#F3D8E6]" target="_blank">
              <FaWhatsapp />
            </a>
          </li>
        </motion.ul>
        <motion.div
          initial={{ y: -25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
          }}
          className="flex items-center gap-4"
        >
          <HiOutlineMail className="text-4xl text-white" />
          <div className="">
            <p
              onClick={() => setActiveCall(!activeCall)}
              className="text-gray-200 text-lg font-semibold cursor-pointer"
            >
              {" "}
              {activeCall
                ? "302-389-5221"
                : "Call us. Llamenos. Appelle nous."}{" "}
            </p>
            <a href="mailto:customercare@ourmaids.com" className="text-gray-300 text-1xl font-[500]">
              FRANCHISING@OURMAIDS.COM{" "}
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TopNavbar;
