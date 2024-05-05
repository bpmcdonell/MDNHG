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
                    <li className="flex flex-row gap-6 p-2 py-2 mb-6 w-auto bg-gray-200 rounded-lg shadow-inner justify-evenly ">
                        <Image
                            src="/images/placeholder.jpg"
                            width={75}
                            height={75}
                            className="object-contain aspect-square mr-4"
                        />
                        <div className="flex flex-col w-fit justify-evenly">
                            <p className="text-base text-nowrap">
                                Name: {donor.name}
                            </p>
                            <p className="text-base text-nowrap">
                                Donation Amount: ${donor.amount}
                            </p>
                            <p className="text-base text-nowrap">
                                Date of Donation: {formatDate(donor.date)}
                            </p>
                            <p className="text-base text-nowrap">
                                In memory of: {donor.note}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
