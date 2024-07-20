import React from "react";
import VickyImg from "./img/vickyimg.png";
import About from "./About";

export default function Home() {
    function darkMode() {
        document.getElementById("body").style.backgroundColor = "black";
        document.getElementById("body").style.color = "white";
        document.getElementById("root").removeAttribute("class");
    }

    function whiteMode() {
        document.getElementById("body").style.backgroundColor = "bg-blue-200";
        document.getElementById("body").style.color = "black";
        document.getElementById("root").classList.add("bg-gradient-to-b", "from-gray-50", "via-white", "bg-blue-200");

    }

    return (
        <>
            {/* <!-- Hero --> */}
            <div id="home">
                <section className="pt-5">
                    <div className="px-4 mx-auto sm:px-4 lg:px-3 max-w-7xl">
                        <div className="py-4 grid max-w-md grid-cols-1 mx-auto lg:grid-cols-12 gap-x-10 gap-y-2 lg:max-w-none ">
                            <div className="md:order-1 order-2 self-center lg:col-span-4">
                                <h1 className="text-3xl font-bold   sm:text-4xl xl:text-3xl">
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
                                <div className="relative inline-flex mt-9 group">
                                    <div className=" rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>

                                    <a href="/" class="inline-block px-6 py-3 text-sm font-medium leading-6 text-center text-white uppercase transition bg-pink-500 rounded shadow ripple hover:shadow-lg hover:bg-pink-600 focus:outline-none">
                                        Hire Me
                                    </a>

                                    <a href="#About" class="ml-4 inline-block px-6 py-3 text-sm font-medium leading-6 text-center text-white uppercase transition bg-green-500 rounded shadow ripple hover:shadow-lg hover:bg-green-600 focus:outline-none">
                                        About Me
                                    </a>
                                </div>
                            </div>

                            <div className="md:order-3  order-3 self-end lg:order-last lg:pb-20 lg:col-span-3">
                                <p className="text-xs font-bold tracking-widest uppercase">
                                    ⚡️ Latest Picks
                                </p>

                                <div className="mt-6 space-y-6 lg:space-y-8 md:w-55">
                                    <div className="relative overflow-hidden p-1 rounded-lg hover:bg-red-200 hover:text-black">
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
                                    className="rounded-sm rounded-br-[5rem] rounded-tl-[5rem]"
                                    src={VickyImg}
                                    alt="vickyimg"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* <!-- Hero --> */}

            {/* <!-- floting button --> */}
            <div className="group fixed bottom-0 right-0 p-2 pb-6 pr-4 flex items-end justify-end w-24 h-24">
                {/* <!-- setting icon --> */}
                <div className="text-white shadow-xl flex items-center justify-center p-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 z-50 absolute cursor-pointer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 group-hover:rotate-90 transition cursor-pointer  transition-all duration-[0.6s]"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                        />
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                    </svg>
                </div>
                {/* <!-- music start left --> */}
                <div className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-y-0 group-hover:scale-y-100 group-hover:-translate-x-16   flex  p-2 hover:p-3 bg-green-300 scale-100 hover:bg-green-400 text-white cursor-pointer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 cursor-pointer"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z"
                        />
                    </svg>
                </div>
                {/* <!-- light mode top --> */}
                <div
                    onClick={whiteMode}
                    className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-16  flex  p-2 hover:p-3 bg-blue-300 hover:bg-blue-400  text-white cursor-pointer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 cursor-pointer"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                        />
                    </svg>
                </div>
                {/* <!-- dark mode middle --> */}
                <div
                    onClick={darkMode}
                    className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-14 group-hover:-translate-x-14   flex  p-2 hover:p-3 bg-yellow-300 hover:bg-yellow-400 text-white cursor-pointer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 cursor-pointer"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                        />
                    </svg>
                </div>
            </div>
            {/* <!-- floting button --> */}

            <About />
        </>
    );
}
