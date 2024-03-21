"use client";

import VolunteerBody from "./body";
import React, { useState } from "react";
import VolunteerForm from "./form";

export default function VolunteerPage() {
    return (
        <div className="mx-30">
            <main>
                <div className="px-10 columns-1 pt-10 md:columns-2">
                    <div className="w-auto md:break-inside-avoid-column">
                        <VolunteerBody />
                    </div>
                    <div className="w-auto md:break-inside-avoid-column">
                        <VolunteerForm />
                    </div>
                </div>
            </main>
        </div>
    );
}
