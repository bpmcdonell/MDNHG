import React, { Suspense } from "react";
import MemConstructor from "../components/inMemConstructor";

export default function inMemoriam() {
    return (
        <div>
            <h1>In Memoriam</h1>
            <br />
            <p>
                Welcome to the Maryland Nurses Honor Guard's In Memoriam page.
                Here we honor the memory of our fallen nurses.
            </p>
            <br />
            <div>
                <Suspense fallback={<div>Loading...</div>}>
                    <MemConstructor />
                </Suspense>
            </div>
        </div>
    );
}
