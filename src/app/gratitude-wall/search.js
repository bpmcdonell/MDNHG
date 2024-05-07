import pocketbase from "pocketbase";

const pb = new pocketbase("http://127.0.0.1:8090");

export default async function Search() {
    const search = await pb
        .collection("gratitude")
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

        // make a search function :)

        return (


            

        );
}
