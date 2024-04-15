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

    const getImage = async (donor) => {
        if (!donor.logo) {
            return "/placeholder.jpg";
        } else {
            const url = pb.files.getUrl(donors, donor.logo);
            return url;
        }
    };
    //!!
    return (
        <div>
            {donors.map((donor) => (
                <div className="">
                    <Image src={getImage} width={75} height={75} />
                    <p>Name: {donor.name}</p>
                    <p>Donation Amount: {donor.amount}</p>
                    <p>Date of Donation: {donor.date}</p>
                    <p>Donation Note: {donor.note}</p>
                    <p>Donation Date: {donor.date}</p>
                    <br />
                </div>
            ))}
        </div>
    );
}
