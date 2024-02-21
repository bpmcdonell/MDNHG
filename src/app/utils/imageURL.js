import { Cloudinary } from "@cloudinary/url-gen";

const cld = new Cloudinary({
    cloud: {
        cloudName: process.env.CLOUD_NAME,
    },
});

export async function getFolders(options = {}) {
    const response = await fetch(
        `https://api.cloudinary.com/v1_1/dx6nv04ky/folders`
    );
    const data = await response.json();
    console.log(data);
    return data;
}
