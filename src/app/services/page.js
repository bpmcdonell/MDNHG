import React from "react";
import ServiceBody from "./body.js";
import ServiceForm from "./form.js";

import SerivceTitle from "./title.js";
import Image from "next/image.js";

export default function ServicePage() {
    return (
        <div className="lg:contianer lg:max-w-screen-2xl lg:mx-auto">
            <main>
                <div className="flex justify-center w-full">
                    <SerivceTitle />
                </div>
                <div className="px-10 columns-1 pt-10 md:columns-2 md:gap-20">
                    <div>
                        <Image
                            src="/images/IMG_4861.jpg"
                            alt="MDNHG Members at a service"
                            width={700}
                            height={700}
                            className="
                            rounded-sm
                            shadow-md
                            mx-auto"
                            priority={true}
                        />
                    </div>
                    <div className="w-auto md:break-inside-avoid-column">
                        <ServiceForm />
                    </div>
                    <div className="w-auto md:break-inside-avoid-column">
                        <ServiceBody />
                    </div>
                </div>
            </main>
        </div>
    );
}
