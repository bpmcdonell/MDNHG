import React from "react";
import DonateBody from "./body.js";

import Image from "next/image";

export default async function DonatePage() {
    return (
        <div className=" container w-10/12 mx-auto">
            <main>
                <Image
                    src="/images/flowersBanner.jpg"
                    width={1955}
                    height={400}
                    alt="Flowers Banner"
                    priority={true}
                />
                <h2 className="flex lg:text-2xl text-xl justify-center mt-6">
                    Donate to the Maryland Nurse Honor Guard
                </h2>
                <div className=" flex justify-center">
                    <aside className="m-8 w-5/6 lg:w-3/6">
                        <DonateBody />
                    </aside>
                </div>
            </main>
        </div>
    );
}
