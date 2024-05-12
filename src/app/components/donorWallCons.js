"use server";

import Image from "next/image";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { unstable_noStore } from "next/cache";

const donors = [];

const querySnapshot = await getDocs(collection(db, "donors"));
querySnapshot.forEach((doc) => {
    donors.push(doc.data());
});

export default async function DonorWallCons() {
    unstable_noStore();
    function formatDate(date) {
        return new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    }

    return (
        <div className="columns-1 lg:columns-2 gap-6">
            <ul className="">
                {donors.map((donor) => (
                    <li className="flex flex-row  pt-2 pl-2 pb-2 py-2 mb-6 w-auto bg-gray-200 rounded-lg shadow-md justify-evenly ">
                        <Image
                            src="/images/1337267copy.png"
                            width={90}
                            height={90}
                            className="aspect-square rounded-md"
                            priority={true}
                            alt="Flower Picture"
                        />
                        <div className="flex-1 justify-center">
                            <p className="text-base text-nowrap flex justify-center ">
                                {donor.name}
                            </p>

                            <p className="text-base text-nowrap flex justify-center m-2">
                                {formatDate(donor.date)}
                            </p>
                            <p className="text-base text-nowrap flex justify-center">
                                In memory of: {donor.note}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
