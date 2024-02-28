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
        <div>
            <div>
                <h2>Memoriams</h2>
                <ul>
                    {records.map((record) => (
                        <div>
                            <Image
                                src="/images/IMG_6329.jpg"
                                width={75}
                                height={75}
                                alt="Rose Picture"
                            />
                            <p>Name: {record.name}</p>
                            <p>Date of Birth/Death: {record.dates}</p>
                            <p>Date of Service: {record.dos}</p>
                            <br />
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
}
