import React from "react";
export default function Nav() {

    function show() {
        document.getElementById('menu').style.display = "block";
        document.getElementById('show').style.display = "none";
        document.getElementById('close').style.display = "block";
    }

    function hide() {
        document.getElementById('menu').style.display = "none";
        document.getElementById('show').style.display = "block";
        document.getElementById('close').style.display = "none";
    }

    return (
        <>
            <div className="w-full h-full bg-gray-900 dark:bg-gray-900 dark:text-white">
                <header className="lg:px-16 px-4 flex flex-wrap items-center py-4 shadow-lg">
                    <div className="md:pl-10 flex-1 flex justify-space items-center">
                        <img
                            className="rounded-full md:w-[10%] sm:max-w-[5%] w-[10%] xs:max-w-[6%]"
                            src="https://media.istockphoto.com/id/1204088265/vector/vector-illustration-abstract-letter-b-gradient-colorful.jpg?s=612x612&w=0&k=20&c=11xLGYoKbaM7dFuxhmFhGPcEewI3CsK2npJ29mOkftI="
                            alt="Logo"
                        />
                        <h1 className="ml-2 text-2xl text-bold text-white font-bold">vickyPortfolio</h1>
                    </div>
                    <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
                        <svg onClick={show} id="show"
                            className="fill-current text-gray-200"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                        >
                            <title>menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                        <svg onClick={hide} style={{ display: "none" }} id="close" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>

                    </label>
                    <input className="hidden" type="checkbox" id="menu-toggle" />

                    <div
                        className="md:ml-0 ml-10 md:flex md:items-center md:w-auto w-full"
                        id="menu"
                    >
                        <nav>
                            <ul className="md:flex items-center justify-between text-base text-gray-100 dark:text-gray-600 pt-4 md:pt-0">
                                <li>
                                    <a className="dark:text-white font-semibold	md:w-full w-28 pl-4 md:p-4 py-2 px-0 block hover:animate-pulse hover:text-black hover:bg-white round-full" href="/">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a className="dark:text-white font-semibold	md:w-full w-28 pl-4 md:p-4 py-2 px-0 block hover:animate-pulse hover:text-black hover:bg-white " href="/">
                                        About Me
                                    </a>
                                </li>
                                <li>
                                    <a className="dark:text-white font-semibold	md:w-full w-28 pl-4 md:p-4 py-2 px-0 block hover:animate-pulse hover:text-black hover:bg-white " href="/">
                                        Education
                                    </a>
                                </li>
                                <li>
                                    <a className="dark:text-white font-semibold	md:w-full w-28 pl-4 md:p-4 py-2 px-0 block hover:animate-pulse hover:text-black hover:bg-white " href="/">
                                        Experience
                                    </a>
                                </li>
                                <li>
                                    <a className="dark:text-white font-semibold	md:w-full w-28 pl-4 md:p-4 py-2 px-0 block hover:animate-pulse hover:text-black hover:bg-white " href="/">
                                        Projects
                                    </a>
                                </li>
                                <li>
                                    <a className="dark:text-white font-semibold	md:w-full w-28 pl-4 md:p-4 py-3 px-0 block md:mb-0 mb-2 hover:animate-pulse hover:text-black hover:bg-white" href="/">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
        </>
    );
}
