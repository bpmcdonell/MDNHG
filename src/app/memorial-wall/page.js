import React, { Suspense } from "react";
import MemConstructor from "../components/MemConstructor";

export default function MemorialWall() {
    return (
        <div className="min-h-screen  bg-[url('/images/1337267.png')] bg-center pb-10">
            <div className="relative">
                <div className="flex justify-center">
                    <div className="z-10 pt-14 lg:w-full lg:max-w-4xl">
                        <div className="relative px-6 lg:pr-4">
                            <div className="flex mx-auto flex-col">
                                <h1 className="text-3xl flex mx-auto justify-center text-center">
                                    Memorial Wall
                                </h1>
                                <p className="font-bold text-base flex justify-center mb-8">
                                    This page is dedicated to the memory of our
                                    fallen nurses.
                                </p>
                            </div>
                            <div className="">
                                <Suspense fallback={<div>Loading...</div>}>
                                    <MemConstructor />
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
