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

    return (
        <div className="columns-1 lg:columns-2 gap-6">
            <ul className="">
                {records.map((record) => (
                    <li className="flex flex-row gap-6 p-2 py-2 mb-6 w-auto bg-gray-200 rounded-lg shadow-inner justify-evenly  ">
                        <Image
                            src="/images/CandleCopy1.jpg"
                            width={75}
                            height={100}
                            alt="Candle Picture"
                            className="rounded-md"
                        />
                        <div className="flex flex-col w-fit justify-evenly">
                            <p className="text-base text-nowrap">
                                Name: {record.name}
                            </p>
                            <p className="text-base text-nowrap">
                                Date of Birth/Death: {record.dates}
                            </p>
                            <p className="text-base text-nowrap">
                                Date of Service: {record.dos}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
