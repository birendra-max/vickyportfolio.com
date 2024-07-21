import React from 'react'

export default function Footer() {
    return (
        <>
            <section class="md:py-8 py-2 bg-black">
                <div class="container mx-auto px-4">
                    <div class="flex flex-wrap -mx-4 mb-9">
                        <div class="w-full lg:w-1/2 px-4 mb-10 lg:mb-0">
                            <a class="inline-block" href="/">
                                <img class="block h-7" src="vendia-assets/logos/vendia.svg" alt="" />
                            </a>
                        </div>
                        <div class="w-full lg:w-1/2 px-4 ">
                            <div class="flex -mb-2 flex-wrap items-center xl:justify-end justify-center"><a class="inline-block mb-2 mr-8 xl:mr-12 font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white hover:from-yellow-500 hover:via-green-300 hover:to-blue-500" href="/">Company</a><a class="inline-block mb-2 mr-8 xl:mr-12 font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white hover:from-yellow-500 hover:via-green-300 hover:to-blue-500" href="/">Resource</a><a class="inline-block mb-2 mr-8 xl:mr-12 font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white hover:from-yellow-500 hover:via-green-300 hover:to-blue-500" href="/">Tracking</a><a class="inline-block mb-2 mr-8 xl:mr-12 font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white hover:from-yellow-500 hover:via-green-300 hover:to-blue-500" href="/">Help</a><a class="inline-block mb-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white hover:from-yellow-500 hover:via-green-300 hover:to-blue-500" href="/">Privacy Policy</a></div>
                        </div>
                    </div>
                    <div class="w-full h-px mb-6 bg-gradient-to-r from-yellow-500 via-green-300 to-blue-500"></div>
                    <div class="flex flex-wrap -mx-4">
                        <div class="w-full md:w-1/2 px-4 mb-6 md:mb-0">
                            <p class="text-gray-400 md:text-left text-center">Copyright © 2024 Made by vickyPortfolio.com . All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
