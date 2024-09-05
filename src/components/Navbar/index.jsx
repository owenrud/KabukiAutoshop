"use client"
import Link from "next/link";
import { Navbar,Flowbite } from "flowbite-react";
import { useSelectedLayoutSegment } from 'next/navigation'

const NavbarComponent = () =>{
  const segment = useSelectedLayoutSegment()
    const customTheme = {
        navbar: {
          "root": {
    "base": "bg-color-white px-2 py-6 sm:px-4 z-40",
    "rounded": {
      "on": "rounded",
      "off": ""
    },
        },
        "link": {
    "base": "block py-2 pl-3 pr-4 md:p-0 text-lg",
    "active": {
      "on": " text-color-primary font-bold",
      "off": "text-color-secondary hover:bg-color-primary md:hover:bg-transparent hover:text-color-primary md:border-0  hover:font-bold"
    },
    "disabled": {
      "on": "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
      "off": ""
    }
  },
  "collapse": {
    "base": "w-full md:block md:w-auto",
    "list": "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
    "hidden": {
      "on": "hidden",
      "off": ""
    }
  },
  "toggle": {
    "base": "inline-flex items-center rounded-lg p-2 text-sm text-color-primary hover:bg-color-white focus:outline-none focus:ring-2 focus:ring-color-primary  md:hidden",
    "icon": "h-6 w-6 shrink-0"
  }
      }
    };
    return(
        <Flowbite theme={{ theme: customTheme }}>
        <Navbar className="bg-color-white" theme={customTheme}>
        <Navbar.Brand as={Link} href="/">
          <img src="./favicon.ico" className="mr-3 h-6 sm:h-9" alt=" Logo" />
          <span className="self-center whitespace-nowrap text-lg md:text-3xl font-bold">Kabuki Autoshop Samarinda</span>
        </Navbar.Brand>
        <Navbar.Toggle  className="text-color-primary focus:bg-color-primary focus:ring-color-primary focus:text-color-white"/>
        <Navbar.Collapse theme={customTheme}>
          <Navbar.Link as ={Link} className={segment == null ? "text-color-primary font-bold bg-color-primary md:bg-transparent bg-opacity-10 hover:text-color-primary hover:bg-color-primary hover:bg-opacity-25 hover:cursor-disabled":"text-color-secondary hover:bg-color-primary md:hover:bg-transparent hover:text-color-primary md:border-0  hover:font-bold"} theme={customTheme} href="/" > 
            Home
          </Navbar.Link>
          <Navbar.Link as={Link} className="hover:text-color-primary hover:bg-color-primary hover:bg-opacity-10" href="#">
            About
          </Navbar.Link>
          <Navbar.Link as={Link} className="hover:bg-color-primary hover:bg-opacity-10" href="#">Services</Navbar.Link>
          <Navbar.Link as={Link} className="hover:bg-color-primary hover:bg-opacity-10" href="#">Pricing</Navbar.Link>
          <Navbar.Link as={Link} className="hover:bg-color-primary hover:bg-opacity-10" href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      </Flowbite>
    )
}
export default NavbarComponent;