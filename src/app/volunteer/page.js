"use client";

import VolunteerBody from "./body";
import React, { useState } from "react";
import VolunteerForm from "./form";
import Image from "next/image";

export default function VolunteerPage() {
    return (
        <div className="lg:contianer lg:max-w-screen-2xl lg:mx-auto">
            <main>
                {/* <Image
                    src="/images/WhiteRoseBanner.png"
                    width={1200}
                    height={400}
                    className="object-cover mx-auto mt-3"
                /> */}
                <div className="px-10 columns-1 pt-10 lg:columns-2 lg:gap-20">
                    <div className="w-auto lg:break-inside-avoid-column">
                        <VolunteerBody />
                    </div>
                    <div className="w-auto lg:break-inside-avoid-column">
                        <VolunteerForm />
                    </div>
                </div>
            </main>
        </div>
    );
}
