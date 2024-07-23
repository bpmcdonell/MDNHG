import React from "react";

export default function DonateBody() {
    return (
        <div>
            <p className="my-2 text-base">
                The Maryland Nurse Honor Guard&#39;s mission is to provide
                tributes to all nurses in the State of Maryland free of charge
                to their families. In order to do this we rely on nurse
                volunteers giving of their own time and expense to perform our
                tribute services, and the generosity of donors to help us to
                continue to serve families at no cost.
            </p>
            <p className="my-2 text-base">
                Donations are used to purchase supplies needed for our services
                such as nursing lamps, roses, chimes, tablecloths, blankets,
                ribbons, and printing supplies.
            </p>

            <div className="flex flex-col max-w-md mx-auto m-5 p-5 text-white bg-nhgBlue rounded-lg">
                <p className="mx-auto text-lg text-center font-bold">
                    Please consider requesting charitable donations to The
                    Maryland Nurse Honor Guard in lieu of flowers in your
                    nurse&#39;s honor.
                </p>
            </div>
            <p className="my-2 text-base">
                When you donate we will list you on our{" "}
                <a
                    className=" text-blue-700 underline underline-offset-2 leading-6 "
                    href="/gratitude-wall"
                >
                    Gratitude Wall
                </a>
                . If you contribute in honor of a nurse we will light a candle
                in their memory on our{" "}
                <a
                    className=" text-blue-700 underline underline-offset-2 leading-6 "
                    href="/memorial-wall"
                >
                    Memorial Wall
                </a>
                . Please provide the full name of the nurse you would like to
                honor, and the family contact information so we may notify them
                of your gift. Please be certain to provide the full name of the
                nurse you would like to honor with your donation information,
                and the family contact information if you would like us to
                notify the family of your donation in their nurse&#39;s honor as
                well. You may also support us by helping purchase our supplies
                through our{" "}
                <a
                    className=" text-blue-700 underline underline-offset-2 leading-6 "
                    href="https://www.amazon.com/registries/gl/guest-view/1YGEJMFIDWJSU"
                >
                    Amazon Gift Registry
                </a>
                .
            </p>
            <p className="my-2 text-base font-semibold">
                To donate, please send us a message through our website{" "}
                <a
                    className=" text-blue-700 underline underline-offset-2 leading-6 "
                    href="/contact"
                >
                    contact form
                </a>{" "}
                on our website and we will respond to you with details on how to
                donate. We are currently working on setting up a donation portal
                on our website. Thank you for your patience and support.
            </p>
            <p className="my-2 text-base font-semibold">
                For business or corporate donors please contact us directly so
                we may place your name and logo on our gratitude wall in
                appreciation of your supporting nurses and our mission of nurses
                honoring nurses.
            </p>
            <p className="my-2 italic">
                We are not yet established as a 501 (c)(3) non-profit
                organization but are planning to apply soon which if accepted
                will be retroactive to our organization January 1, 2024. However
                in the interim we can supply a receipt and information about our
                organization.
            </p>
        </div>
    );
}
