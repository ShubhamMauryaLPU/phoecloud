import { Link } from "react-router-dom";
import React from "react";
// import { FloatingDock } from "../ui/floating-dock";
import {
    IconBrandFacebook,
  IconBrandGithub,
  IconBrandX,
} from "@tabler/icons-react";
const Footer = () => {
  const links = [
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Facebook",
      icon: (
        <IconBrandFacebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (
    <footer className="bg-black text-gray-400 py-12 lg:h-[65vh] z-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div className="text-start">
          <p className="mb-4">
            <img
              src="/image/LogoText.png"
              alt="logoImg"
              className="h-15 mb-3"
            />
            <Link to={"/term"} className="hover:underline ">
              Terms ·
            </Link>
            <Link to={"/policy"} className="hover:underline">
              {" "}
              Privacy Policy
            </Link>
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Products</h2>
          <ul>
            <li>
              <Link
                to={"/home"}
                className="hover:text-white transition-colors duration-300"
              >
                Digital Transformation
              </Link>
            </li>
            <li>
              <Link
                to={"/about/exprience"}
                className="hover:text-white transition-colors duration-300"
              >
                Finance Management
              </Link>
            </li>
            <li>
              <Link
                to={"/about/skills"}
                className="hover:text-white transition-colors duration-300"
              >
                Revenue Based
              </Link>
            </li>
            <li>
              <Link
                to={"/about/project"}
                className="hover:text-white transition-colors duration-300"
              >
                Financing
              </Link>
            </li>
            <li>
              <Link
                to={"/about/education"}
                className="hover:text-white transition-colors duration-300"
              >
                Integrations
              </Link>
            </li>
            <li>
              <Link
                to={"/about/certificates"}
                className="hover:text-white transition-colors duration-300"
              >
                Command-line
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Resources</h2>
          <div className="flex flex-col space-x-4">
            <Link
              to="#"
              className="hover:text-white transition-colors duration-300"
            >
              Documentation
            </Link>
            <Link
              to="#"
              className="hover:text-white transition-colors duration-300"
            >
              Tutorials & Guides
            </Link>
            <Link
              to="#"
              className="hover:text-white transition-colors duration-300"
            >
              Blog
            </Link>
            <Link
              to="#"
              className="hover:text-white transition-colors duration-300"
            >
              Support Center
            </Link>
            <Link
              to="#"
              className="hover:text-white transition-colors duration-300"
            >
              Partners
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Company</h2>
          <div className="flex flex-col space-x-4">
            <Link
              to="#"
              className="hover:text-white transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="#"
              className="hover:text-white transition-colors duration-300"
            >
              About us
            </Link>
            <Link
              to="#"
              className="hover:text-white transition-colors duration-300"
            >
              Contact
            </Link>
            <Link
              to="#"
              className="hover:text-white transition-colors duration-300"
            >
              Pricing
            </Link>
            <Link
              to="#"
              className="hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
        <hr className="w-full" />
      </div>
      <div>
       
      </div>
      {/* <div className=" w-full">
        <p className="float-left px-3.5 mt-3">
          &copy; Cruip.com. All rights reserved.
        </p>
        <FloatingDock
          mobileClassName="float-right " 
          items={links}
        />
      </div> */}
    </footer>
  );
};

export default Footer;
