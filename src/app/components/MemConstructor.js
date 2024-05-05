import PocketBase from "pocketbase";
import Image from "next/image";

const pb = new PocketBase("http://127.0.0.1:8090");

export default async function MemConstructor() {
    const records = await pb
        .collection("memoriams")
        .getFullList({
            sort: "-created",
        })
        .catch((err) => {
            console.error(err);
        });

    console.log(records);

    return (
        <div className="columns-1 ">
            <ul>
                {records.map((record) => (
                    <li className="flex flex-row m-6 p-2 ">
                        <Image
                            src="/images/IMG_6329.jpg"
                            width={75}
                            height={75}
                            alt="Rose Picture"
                            className="mr-4"
                        />
                        <div className="flex flex-col justify-evenly">
                            <p>Name: {record.name}</p>
                            <p className=" text-nowrap">
                                Date of Birth/Death: {record.dates}
                            </p>
                            <p>Date of Service: {record.dos}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
