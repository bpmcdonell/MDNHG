import PocketBase from "pocketbase";
import Image from "next/image";

const pb = new PocketBase("http://127.0.0.1:8090");

export default async function MemConstructor() {
    const records = await pb
        .collection("memoriams")
        .getFullList({
            sort: "created",
        })
        .catch((err) => {
            console.error(err);
        });

    console.log(records);

    //for future:: This needs pagination
    //     can we center all of these?

    return (
        <div className="columns-1 lg:columns-2 gap-6">
            <ul className="">
                {records.map((record) => (
                    <li className="flex flex-row p-2 py-2 mb-6 w-auto bg-gray-200 rounded-lg shadow-md">
                        <div>
                            <Image
                                src="/images/nurseLamp2.jpg"
                                width={90}
                                height={90}
                                alt="Candle Picture"
                                className="rounded-md"
                            />
                        </div>
                        <div className="flex-1">
                            <p className="text-base text-nowrap flex justify-center ">
                                {record.name}
                            </p>
                            <p className="text-base text-nowrap flex justify-center m-2">
                                {record.dates}
                            </p>
                            <p className="text-base text-nowrap flex justify-center bg-nhgGold">
                                Honored on: {record.dos}
                                {/* Date of Service: {record.dos} */}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
