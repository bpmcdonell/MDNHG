import React, { Suspense } from "react";
import MemConstructor from "../components/MemConstructor";
import Image from "next/image";

export default function MemorialWall() {
    return (
        <div className="bg-white">
            <div className="relative">
                <div className="mx-auto max-w-7xl">
                    <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
                        <div className="relative px-6 lg:pr-4">
                            <div>
                                <h1 className="text-3xl text-center">
                                    Memorial Wall
                                </h1>
                                <p className="text-center m-4">
                                    This page is dedicated to the memory of our
                                    fallen nurses.
                                </p>
                            </div>
                            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                                <Suspense fallback={<div>Loading...</div>}>
                                    <MemConstructor />
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 fixed lg:inset-y-0 lg:right-0 lg:w-5/12 lg:mt-[64px]">
                    <img
                        className="aspect-[2/3] lg:aspect-auto lg:h-full lg:w-full shadow-lg object-cover"
                        src="../images/Candle.jpg"
                        alt="A picture of a Candle"
                    />
                </div>
            </div>
        </div>
    );
}
