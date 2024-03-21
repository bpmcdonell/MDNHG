import React from "react";
import ServiceBody from "./body.js";
import ServiceForm from "./form.js";
import SerivceTitle from "./title.js";

export default function ServicePage() {
    return (
        <div className="mx-30">
            <main>
                <div className="flex justify-center w-full">
                    <SerivceTitle />
                </div>
                <div className="px-10 columns-1 pt-10 md:columns-2">
                    <div className="w-auto md:break-inside-avoid-column">
                        <ServiceBody />
                    </div>
                    <div className="w-auto md:break-inside-avoid-column">
                        <ServiceForm />
                    </div>
                </div>
            </main>
        </div>
    );
}
