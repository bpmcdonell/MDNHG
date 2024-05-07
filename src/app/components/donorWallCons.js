"use server";

import PocketBase from "pocketbase";
import Image from "next/image";

const pb = new PocketBase("http://127.0.0.1:8090");

export default async function DonorWallCons() {
    const donors = await pb
        .collection("donors")
        .getFullList({
            sort: "date",
            order: "desc",
        })
        .then((data) => {
            return data;
        })

        .catch((err) => {
            console.error(err);
        });

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
