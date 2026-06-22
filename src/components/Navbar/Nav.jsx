"use client";

import React, { useRef } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Nav() {
  const navmenu = useRef();

  // console.log(navmenu)
  gsap.registerPlugin(useGSAP);

  var tl = gsap.timeline();

  useGSAP(() => {
    (tl.from("#nav, #nav #logo", {
      y: -30,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      stagger: 0.15,
    }),
      tl.from(navmenu.current.children, {
        y: -30,
        opacity: 0,
        duration: 0.8,
        delay: 0.1,
        stagger: 0.15,
      }));
  });

  return (
    <div
      id="nav"
      className="w-fit my-auto flex items-center justify-around rounded-full text-[#F4B400] px-4 py-3 shadow-lg bg-black/20
backdrop-blur-xl
border border-white/10"
    >
      <div id="logo" className="px-2 text-2xl">
        Contruction Company
      </div>

      <Separator orientation="vertical" className="my-1" />

      <div id="navmenu">
        <NavigationMenu>
          <NavigationMenuList ref={navmenu}>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} text-2xl`}
              >
                <Link href="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} text-2xl`}
              >
                <Link href="/about">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} text-2xl`}
              >
                <Link href="/services">Services</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} text-2xl`}
              >
                <Link href="/Blog">Blog</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} text-2xl`}
              >
                <Link href="/project">Project</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} text-2xl`}
              >
                <Link href="/contact">Contact</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}

export default Nav;
