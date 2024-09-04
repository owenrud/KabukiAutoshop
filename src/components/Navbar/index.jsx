"use client"
import Link from "next/link";
import { Navbar,Flowbite } from "flowbite-react";

const NavbarComponent = () =>{
    const customTheme = {
        navbar: {
          "root": {
    "base": "bg-color-white px-2 py-6 sm:px-4 ",
    "rounded": {
      "on": "rounded",
      "off": ""
    },
        },
        "link": {
    "base": "block py-2 pl-3 pr-4 md:p-0 text-lg",
    "active": {
      "on": " text-color-primary font-bold",
      "off": " text-color-secondary hover:bg-color-secondary hover:text-color-white md:border-0 md:hover:bg-transparent hover:bg-opacity-5 hover:text-color-primary md:dark:hover:bg-transparent hover:font-bold"
    },
    "disabled": {
      "on": "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
      "off": ""
    }
  },
  "toggle": {
    "base": "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden",
    "icon": "h-6 w-6 shrink-0"
  }
      }
    };
    return(
        <Flowbite theme={{ theme: customTheme }}>
        <Navbar>
        <Navbar.Brand as={Link} href="/">
          <img src="./favicon.ico" className="mr-3 h-6 sm:h-9" alt=" Logo" />
          <span className="self-center whitespace-nowrap text-lg md:text-3xl font-bold">Kabuki Autoshop Samarinda</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link as={Link} href="#">
            About
          </Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      </Flowbite>
    )
}
export default NavbarComponent;