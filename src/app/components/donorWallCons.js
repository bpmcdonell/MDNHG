"use server";

import PocketBase from "pocketbase";
import Image from "next/image";

const pb = new PocketBase("http://127.0.0.1:8090");

export default async function DonorWallCons() {
    const donors = await pb
        .collection("donors")
        .getFullList({
            sort: "-created",
        })

        .catch((err) => {
            console.error(err);
        });

    return (
        <div className="">
            <div className="flex justify-center mx-auto flex-col">
                <h2 className="flex justify-center pb-2">Donor Wall</h2>
                <p className="font-bold flex justify-center mb-8">
                    We would like to thank the following donors for their
                    generous support of the Maryland Nurses Honor Guard:
                </p>
            </div>

            <div className="columns-1 lg:columns-2 ">
                {donors.map((donor) => (
                    <div className="flex bg-gray-200 mb-4 p-2">
                        <Image
                            src="/images/placeholder.jpg"
                            width={75}
                            height={75}
                            className="object-contain aspect-square mr-4"
                        />
                        <div className="flex flex-col break-inside-avoid-column">
                            <p>Name: {donor.name}</p>
                            <p>Donation Amount: {donor.amount}</p>
                            <p>Date of Donation: {donor.date}</p>
                            <p>Donation Note: {donor.note}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
