import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";

const records = [];

const querySnapshot = await getDocs(collection(db, "memoriams"));
querySnapshot.forEach((doc) => {
    records.push(doc.data());
});

export default async function MemConstructor() {
    //for future:: This needs pagination

    return (
        <div className="">
            <ul className="grid grid-cols-1 lg:grid-cols-2">
                {records.map((record) => (
                    <li className="flex flex-row mb-6 w-auto bg-gray-200 rounded-lg shadow-md ">
                        <div>
                            <Image
                                src="/images/nurseLamp2.jpg"
                                width={96}
                                height={96}
                                alt="Candle Picture"
                                priority={true}
                                className="rounded-l-md absolute"
                            />
                        </div>
                        <div className="flex-1 ml-[96px] h-[96px]">
                            <p className="text-base text-nowrap flex justify-center ">
                                {record.name}
                            </p>
                            <p className="text-base text-nowrap flex justify-center m-2">
                                {record.dob} - {record.dod}
                            </p>
                            {record.dos && (
                                <p className="text-base text-nowrap flex justify-center ">
                                    Honored on: {record.dos}{" "}
                                </p>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
