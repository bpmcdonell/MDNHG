import React, { Suspense } from "react";
import DonorWallCons from "../components/donorWallCons.js";

export default function GratitudeWallPage() {
    return (
        <div className="min-h-screen  bg-[url('/images/IMG_5724.jpeg')] bg-no-repeat bg-center ">
            <div className="min-h-screen min-w-screen backdrop-blur-xs">
                <div className="relative">
                    <div className="flex justify-center">
                        <div className="z-10 pt-14 lg:w-full lg:max-w-4xl">
                            <div className="relative px-6 lg:pr-4">
                                <div className="flex mx-auto flex-col">
                                    <h2 className="text-3xl flex mx-auto justify-center text-center">
                                        Gratitude Wall
                                    </h2>
                                    <p className="font-bold text-base flex justify-center mb-8">
                                        We would like to thank the following
                                        donors for their generous support of the
                                        Maryland Nurse Honor Guard:
                                    </p>
                                </div>
                                <Suspense
                                    fallback={
                                        <div>
                                            <p>Loading...</p>
                                        </div>
                                    }
                                >
                                    <DonorWallCons />
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
