import React from "react";
import DonateBody from "./body.js";
import DonoHandler from "../utils/donoHandler.js";
import Image from "next/image";

export default async function DonatePage() {
    return (
        <div className=" container w-10/12 mx-auto">
            <main>
                <Image
                    src="/images/flowersBanner.jpg"
                    width={1200}
                    height={400}
                    className="object-cover mx-auto mt-3"
                />
                <h2 className="flex lg:text-2xl text-xl justify-center mt-6">
                    Donate to the Maryland Nurses Honor Guard
                </h2>
                <div className=" flex place-content-between columns-1 flex-col lg:columns-2 lg:flex-row">
                    <aside className="m-8 w-5/6 lg:w-3/6">
                        <DonateBody />
                    </aside>
                    <div>
                        <DonoHandler />
                    </div>
                </div>
            </main>
        </div>
    );
}
