"use client";

import { Footer, Flowbite } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

export function FooterComponent() {
  const customTheme = {
    footer: {
      root: {
        base: "w-full  bg-color-white bg-opacity-75 shadow dark:bg-gray-800 md:flex md:items-center md:justify-between",
        container: "w-full p-6",
        bgDark: "bg-gray-800",
      },
      icon: {
        base: "text-color-primary dark:hover:text-white",
        size: "h-5 w-5",
      },
      copyright: {
        base: "text-sm text-color-primary dark:text-gray-400 sm:text-center",
        href: "ml-1 hover:underline",
        span: "ml-1",
      },
    },
  };
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Footer className="overflow-hidden mt-auto">
        <div className="w-full">
          <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-2 bg-color-white">
            <div className="3xl:mx-96">
              <Footer.Title title="Company" />
              <Footer.LinkGroup col>
                <Footer.Link href="#about">About</Footer.Link>
                <Footer.Link href="#">Careers</Footer.Link>
                <Footer.Link href="#">Brand Center</Footer.Link>
                <Footer.Link href="#">Blog</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="3xl:mx-96">
              <Footer.Title title="help center" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://www.instagram.com/kabuki.autoshopsamarinda/" target="_blank">Instagram</Footer.Link>
                <Footer.Link href="https://www.facebook.com/profile.php?id=61561473760557" target="_blank">Facebook</Footer.Link>
                <Footer.Link href="https://wa.me/6282254335598" target="_blank">Contact Us</Footer.Link>
              </Footer.LinkGroup>
            </div>
            
          </div>
          <div className="w-full bg-color-white font-semibold px-4 md:py-6 flex flex-col-reverse mx-8 md:flex-row sm:items-center text-sm md:text-xl sm:justify-between md:justify-evenly">
            <Footer.Copyright
              href="#"
              by="All Right Reserved by Kabuki Autoshop Samarinda™"
              year={2024}
            />
            <div className="mt-4 mb-4 md:mb-0 flex space-x-2 items-center mx-32 md:mx-0">
              <Footer.Icon
                href="https://www.facebook.com/profile.php?id=61561473760557"
                icon={BsFacebook}
                target="_blank"
              />
              <Footer.Icon
                href="https://www.instagram.com/kabuki.autoshopsamarinda/"
                icon={BsInstagram}
                target="_blank"
              />
            </div>
          </div>
        </div>
      </Footer>
    </Flowbite>
  );
}
