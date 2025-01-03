"use client";

import Link from "next/link";
import Image from "next/image";
import blogImg from "../assets/blogImg.webp";

import { MdKeyboardArrowRight } from "react-icons/md";
import { CiCircleMinus } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";
import { PiHandsClappingFill } from "react-icons/pi";
import { FaComment } from "react-icons/fa6";


export default function Body() {
    return (
        <div className="flex  ">
        <div className=" w-[900px] border-r-[1px] border-gray-200 py-6 h-screen ">
            <div className=" w-[700px] flex flex-col gap-4 mx-auto ">
                <div className="  flex items-center gap-8 text-gray-500 border-b-[1px] border-gray-200 text-[15px] py-4 ">
                    <Link href={"#"} >+</Link>
                    <Link href={"#"} >For you</Link>
                    <Link href={"#"} >Following</Link>
                    <Link href={"#"} >Nft</Link>
                    <Link href={"#"} >UI</Link>
                    <Link href={"#"} >DevOps</Link>
                    <Link href={"#"} >Bitcoin</Link>
                    <Link href={"#"} >History</Link>
                    <Link href={"#"} >Ethereum</Link>
                    <Link href={"#"} ><MdKeyboardArrowRight/></Link>

                </div>
                <div className=" flex py-8 items-center justify-between border-b-[1px] border-gray-200 ">
                    <div className=" flex flex-col justify-center gap-2 xl:min-w-[499px] xl:max-w-[500px] ">
                        <div className=" flex gap-2 items-center ">
                            <div className=" size-[20px] rounded-full border-[1px] border-gray-600 "></div>
                            <p className="">Alex бхарве</p>
                        </div>
                    <h2 className=" font-bold text-[24px]  ">Make MONEY ONLINE: $50/hr Jobs With NO EXPERIENCE needed</h2>
                    <p className=" text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className=" flex justify-between">
                        <div className=" flex items-center gap-4 text-[13px] text-gray-600  ">
                            <p>Nov 9,2024</p>
                            <p className=" inline-flex gap-1"><PiHandsClappingFill className="text-base "/> 1k</p>
                            <p className=" inline-flex gap-1"><FaComment className="text-base "/> 57</p>
                        </div>
                        <div className=" flex gap-4 text-[24px]  text-gray-600  ">
                        <CiCircleMinus className="hover:text-black "/>
                        <CiBookmark className="hover:text-black "/>
                        <BsThreeDots className="hover:text-black "/>
                        </div>
                    </div>
                    </div>
                    <Image src={blogImg} alt="" className=" w-[180px]  "></Image>
                </div>
            </div>
        </div>
        <div className=" w-[440px] h-screen ">
            <div className=" w-[380px] flex flex-col gap-4 mx-auto py-8 ">
                <h4 className=" text-[15px] font-semibold py-4 ">Staff Picks</h4>
                <div className=" flex flex-col gap-3 text-gray-600 ">
                    <div className=" flex gap-2 items-center ">
                        <div className=" size-[20px] rounded-sm bg-black text-white font-serif pl-1 ">Th</div>
                        <p className=" text-[13px]  ">In <span className=" text-black">The Thought Blog</span> by <span className=" text-black">Thought Staff</span></p>
                    </div>
                    <h6 className=" text-[15px] font-semibold text-black ">It Happend on Thought in 2026</h6>
                    <p className=" text-[12px] ">Sep 9,2026</p>
                </div>
            </div>
        </div>
        </div>
    );
    }