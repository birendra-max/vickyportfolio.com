import React from "react";
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Blogs from "./Blogs";
import Projects from './Projects';
import Contact from './Contact';
import logo1 from './img/logo1.jpeg';
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
            <BrowserRouter>
                <div id="nav" className="w-full h-full bg-teal-400 dark:bg-green-400 dark:text-black text-black">
                    <header className="lg:px-16 px-4 flex flex-wrap items-center py-4 shadow-lg">
                        <div id="loader" className="md:pl-10 flex-1 flex justify-space items-center">
                            <img id="logo"
                                className="rounded-full md:w-[10%] sm:max-w-[5%] w-[10%] xs:max-w-[6%]"
                                src={logo1}
                                alt="Logo"
                            />
                            <h1 className="ml-2 text-xl md:text-2xl font-bold">
                            VickyPortfolio</h1>
                        </div>
                        <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
                            <svg onClick={show} id="show"
                                className="fill-current size-7"
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                            >
                                <title>menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                            </svg>
                            <svg onClick={hide} style={{ display: "none" }} id="close" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>

                        </label>
                        <input className="hidden" type="checkbox" id="menu-toggle" />

                        <div
                            className="md:ml-0 ml-10 md:flex md:items-center md:w-auto w-full"
                            id="menu">
                            <nav>
                                <ul className="md:flex items-center justify-between text-base dark:text-gray-600 pt-4 md:pt-0">
                                    <li>
                                        <Link className="dark:text-black font-semibold	md:w-full w-28 pl-4 md:p-4 py-2 px-0 block hover:animate-pulse hover:text-black hover:bg-blue-200 round-full" to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link className="dark:text-black font-semibold	md:w-full w-28 pl-4 md:p-4 py-2 px-0 block hover:animate-pulse hover:text-black hover:bg-red-200 " to="/Blogs">Blogs</Link>
                                    </li>
                                    <li>
                                        <Link className="dark:text-black font-semibold	md:w-full w-28 pl-4 md:p-4 py-2 px-0 block hover:animate-pulse hover:text-black hover:bg-orange-200" to="/Projects">Projects</Link>
                                    </li>
                                    <li>
                                        <Link className="dark:text-black font-semibold	md:w-full w-28 pl-4 md:p-4 py-3 px-0 block md:mb-0 mb-2 hover:animate-pulse hover:text-black hover:bg-green-200" to="/Contact">Contact</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </header>
                </div>
                <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Blogs" element={<Blogs/>} />
                <Route path="/Projects" element={<Projects/>} />
                <Route path="/Contact" element={<Contact/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}
