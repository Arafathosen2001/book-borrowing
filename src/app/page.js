"use client" 
import { useSession } from "@/lib/auth-client";
import Image from "next/image";
import Baner from "./Component/Baner";
import Marquee from "react-fast-marquee";

export default function Home() {
  const { data, status, error } = useSession();
  const users= data?.user;
  console.log(users,status, error);// { data, status, error }
  return (
    <div className="container">
      <Baner></Baner>
      <Marquee>
            I can be a React component, multiple React components, or just some text.
      </Marquee>
    </div>
  );
}
