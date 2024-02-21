"use client";

import VolunteerBody from "./body";
import React, { useState } from "react";
import VolunteerForm from "./form";

export default function VolunteerPage() {
    return (
        <div>
            <main>
                <VolunteerBody />
                <VolunteerForm />
            </main>
        </div>
    );
}
