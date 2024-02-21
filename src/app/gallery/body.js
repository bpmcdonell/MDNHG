import Image from "next/image";
import React from "react";
import { getFolders } from "../utils/imageURL";

export default function GalleryBody() {
    const folders = getFolders();
    console.log(folders);

    return (
        <div>
            <p>poop idk</p>
        </div>
    );
}
