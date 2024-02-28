import { FacebookProvider, Group } from "react-facebook";
import React from "react";

export default function FacebookEmbed() {
    return (
        <div>
            <FacebookProvider appId="123456789">
                <Group href="https://www.facebook.com/groups/891383095941572" />
            </FacebookProvider>
        </div>
    );
}
