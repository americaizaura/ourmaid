import React from "react";
import { motion } from "framer-motion";
import { TiTick } from "react-icons/ti";

const Section1 = () => {
  return (
    <section className="text-gray-800 body-font bg-[#F3E5F6]">
      <div className="max-w-7xl px-5 py-24 mx-auto overflow-x-hidden">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-5xl text-4xl font-semibold title-font mb-4 text-pink-800">
            Why Choose Our Maids Franchise, Inc.?
          </h1>
          <p className="text-lg md:text-xl mb-5 font-medium">
            We are America's most affordable residential and commercial cleaning
            service, and the most reliable, and we have been for 22
            uninterrupted years now! (scroll down to meet the founder) Need help
            with anything?
          </p>
        </div>
        <div className="container mx-auto flex gap-10 md:flex-row flex-col items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
            }}
            className="flex flex-col w-full mb-12"
          >
            <ul className="">
              <li className="flex items-center gap-4 md:gap-8 mb-5">
                <TiTick className="text-pink-800 text-[60px]" />
                <p className="text-lg md:text-xl  font-medium">
                  More than 22 years of uninterrupted professional, cleaning
                  experience. We are an integral part of our communities.
                </p>
              </li>
              <li className="flex items-center gap-10 mb-5">
                <TiTick className="text-pink-800 text-[100px]" />
                <p className="text-lg md:text-xl font-medium">
                  Honesty and Integrity; It's been 22 years since our dear
                  customers left the key for us, and are still doing so.
                  Excellent reviews and many return customers, screened and
                  approved by leaders in the industry.
                </p>
              </li>
              <li className="flex items-center gap-10 mb-5">
                <TiTick className="text-pink-800 text-[70px]" />
                <p className="text-lg md:text-xl  font-medium">
                  Friendly service and the best rates in any market. Antonio
                  started Our Maids, and still runs it by himself, knowing most
                  of our good patrons personally.
                </p>
              </li>
            </ul>
          </motion.div>
        </div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
          }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-pink-800">
            PRESS RELEASE 10/22/2022:
          </h3>
          <p className="text-lg md:text-xl">
            Our Maids Inc. is Now Offering a New Franchise Opportunity!
            <br />
            <br />
            Dover, Delaware, October 2022 - Our Maids Inc. is a cleaning service
            company that is detail-oriented, affordable, and attentive to client
            service that customers won’t find anywhere else. In the year 2000,
            Our Maids Inc. began with the goal of seeking to improve what other
            residential and commercial cleaning services lacked. With over 22
            years in the industry, we’ve been able to earn the respect of our
            clients through our reliable, uninterrupted professional service
            while keeping it economical for everyone in the community. This has
            led us to success and now, we are looking to expand our services to
            other communities through our franchise opportunities!
            <br />
            <br />
            We welcome any aspiring business owners, entrepreneurs, or seasoned
            veterans to access our extremely profitable and streamlined concept
            that offers the very best residential and commercial cleaning
            services. Our commitment to cleaning any space requested with
            absolute efficiency like we would our own space is what separates us
            from competitors. Not only are we efficient, but we also work with
            the very best attitude and a smile on our faces from the moment we
            begin our service.
            <br />
            <br />
            As a franchisee, you’ll also have access to OurMaidsInc. app that
            will allow you to connect with your client so they can find, book,
            pay, find prices, cancel, reschedule, and it will also allow you to
            see your next appointment. There is even a Live Chat floating button
            to receive help. We’ll also give you the support and tools you need
            to succeed including our comprehensive training program. This
            program was developed to teach you everything you need to know
            before beginning a home-based business.
            <br />
            <br />
            Our Maids Inc. continues to grow and receive positive reviews from
            customers. We have offices from everywhere Maryland, Los Angeles,
            Dallas Ft. Worth, and Austin. Becoming a part of our brand will not
            only mean investing in a profitable career but also becoming a part
            of an industry that’s forecasted to grow in the next couple of
            years. If you are as passionate about cleaning and servicing
            communities as we are, this is the opportunity for you! Contact us
            today to learn more about beginning a career with Our Maids Inc.
            <br />
            <br /> 8 The Green, Suite 14095 <br /> Dover, DE 19901.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Section1;
