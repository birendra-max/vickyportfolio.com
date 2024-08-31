import React from "react";
import VickyImg from "../img/vickyimg3.jpg";
import About from "./About";
import SubscribeBolg from "../Blogs/SubscribeBolg.js";
import Contact from "../Contact.js";


export default function Home(Contac) {

    return (
        <>
            {/* <!-- Hero --> */}
            <div id="home">
                <section className="md:p-8 md:py-10 p-2">
                    <div className="px-4 mx-auto sm:px-4 lg:px-32 max-w-9xl border border-gray-300 rounded-lg shadow-md py-8">
                        <div className="py-8 grid max-w-md grid-cols-1 mx-auto lg:grid-cols-12 gap-x-10 gap-y-2 lg:max-w-none ">
                            <div className="md:order-1 order-2 self-center lg:col-span-4 mr-4">
                                <h1 className="text-2xl font-bold  sm:text-4xl xl:text-3xl">
                                    Hey 👋 I am{" "}
                                    <span className="border-b-4 border-green-600">
                                        Birendra Kumar Pradhan
                                    </span>{" "}
                                    , welcome to my site.
                                </h1>
                                <p className="mt-5 text-base font-normal leading-7 text-gray-500">
                                    You may not always get what you wish for, but through hard
                                    work, you get what you deserve.
                                </p>
                                <div className="relative inline-flex mt-9 group flex justify-around">
                                    <div className=" rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
                                    <a href="#" class="btn mr-2" alt="Hire Me" >Hire Me</a>

                                    <button id="aboutMe">
                                        <a href="#About" alt="About Me">About Me</a>
                                    </button>
                                </div>
                            </div>

                            <div className=" md:order-3 order-3 self-end lg:order-last lg:pb-10 lg:col-span-3">
                                <p className="text-xs font-bold tracking-widest uppercase">
                                    ⚡️ Latest Posts
                                </p>

                                <div className="mt-6 space-y-6 lg:space-y-8 md:w-80">
                                    <div className="relative overflow-hidden p-1 rounded-lg hover:bg-yellow-200 hover:text-black">
                                        <div className="flex items-start lg:items-center">
                                            <img
                                                className="object-cover w-12 h-12 rounded-lg shrink-0"
                                                src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/1/thumbnail-1.png"
                                                alt=""
                                            />
                                            <p className="ml-3 text-base font-bold leading-6">
                                                <a href="/" title="">
                                                    How a visual artist redefines success in graphic
                                                    design
                                                    <span
                                                        className="absolute inset-0"
                                                        aria-hidden="true"
                                                    ></span>
                                                </a>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="relative overflow-hidden p-1 hover:bg-indigo-200 rounded-lg hover:text-black">
                                        <div className="flex items-start lg:items-center">
                                            <img
                                                className="object-cover w-12 h-12 rounded-lg shrink-0"
                                                src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/1/thumbnail-2.png"
                                                alt=""
                                            />
                                            <p className="ml-3 text-base font-bold leading-6  ">
                                                <a href="/" title="">
                                                    How a visual artist redefines success in graphic
                                                    design
                                                    <span
                                                        className="absolute inset-0"
                                                        aria-hidden="true"
                                                    ></span>
                                                </a>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="relative overflow-hidden p-1 hover:bg-green-200 rounded-lg hover:text-black">
                                        <div className="flex items-start lg:items-center">
                                            <img
                                                className="object-cover w-12 h-12 rounded-lg shrink-0"
                                                src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/1/thumbnail-3.png"
                                                alt=""
                                            />
                                            <p className="ml-3 text-base font-bold leading-6  ">
                                                <a href="/" title="">
                                                    How a visual artist redefines success in graphic
                                                    design
                                                    <span
                                                        className="absolute inset-0"
                                                        aria-hidden="true"
                                                    ></span>
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                id="image-container"
                                className="md:order-2  order-1 flex justify-center self-end lg:col-span-5 "
                            >
                                <img
                                    id="vickyimg"
                                    src={VickyImg}
                                    alt="vickyimg"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* <!-- Hero --> */}
            <About />
            <div className="md:mt-2 md:p-8 p-2">
                {/* <HomeBlog/> */}
                <SubscribeBolg />
                <Contact />
            </div>
        </>
    );
}
