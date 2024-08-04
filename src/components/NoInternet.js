import React from 'react'

export default function NoInternet() {
    return (
        <>
            <div class="bg-black px-2 text-center">
                <div class="h-screen flex flex-col justify-center items-center">
                    <h1 class="text-8xl font-extrabold text-red-500">500</h1>
                    <p class="text-4xl font-medium">No internet</p>
                    <p class="text-xl mt-4">
                        <ul>
                            <li>
                                Checking the network cables, modem, and router
                            </li>
                            <li>
                                Reconnecting to Wi-Fi
                            </li>
                            <li>
                                Running Windows Network Diagnostics
                            </li>
                            ERR_INTERNET_DISCONNECTED
                        </ul>
                    </p>
                </div>
            </div>
        </>
    )
}
