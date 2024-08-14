"use server";
import { donorWallGet } from "../actions.js";
import React, { Suspense } from "react";
import DonorWallCons from "../components/donorWallCons.js";

export default async function GratitudeWallPage() {
    const donors = await donorWallGet();

    return (
        <div className="min-h-screen  bg-[url('/images/IMG_5724.jpeg')] bg-no-repeat bg-center ">
            <div className="min-h-screen min-w-screen backdrop-blur-xs">
                <div className="relative">
                    <div className="flex justify-center">
                        <div className="z-10 pt-6 lg:w-full lg:max-w-4xl">
                            <div className="relative px-6">
                                <div className="flex mx-auto flex-col">
                                    <h2 className="text-3xl flex mx-auto justify-center text-center">
                                        Gratitude Wall
                                    </h2>
                                    <p className="font-bold text-base flex justify-center text-center mb-8">
                                        We would like to thank the following
                                        donors for their generous support of the
                                        Maryland Nurse Honor Guard:
                                    </p>
                                </div>
                                <div className="">
                                    <Suspense fallback={<div>Loading...</div>}>
                                        <DonorWallCons donors={donors} />
                                    </Suspense>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
