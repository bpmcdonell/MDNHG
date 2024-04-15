import React from "react";
import DonorWallCons from "../components/donorWallCons";

export default function DonateBody() {
    return (
        <div>
            <div>
                <h2 className="flex justify-center pb-2">
                    Donate to the Maryland Nurses Honor Guard
                </h2>
                <p>
                    The Maryland Nurse Honor Guard&#39;s mission is to provide
                    tributes to all nurses in the State of Maryland free of
                    charge to their families. In order to do this we rely on
                    nurse volunteers giving of their own time and expense to
                    perform our tribute services, and the generosity of donors
                    to help us to continue to serve families at no cost.
                </p>
                <p>
                    Donations are used to purchase supplies for our services
                    such as nursing lamps, roses, chimes, tablecloths, blankets,
                    ribbons, printing supplies, fund raising supplies and other
                    necessary purchases to provide free tributes to families of
                    nurses. If we have any residual funds after our expenses we
                    hope to develop a scholarship offering or other financial
                    assistance for nursing students.
                </p>
                <p>
                    Please consider requesting charitable donations to The
                    Maryland Nurse Honor Guard in lieu of flowers in your
                    nurse&#39;s honor. We also welcome donations from businesses
                    or individuals to support our mission to serve nurses.
                </p>
                <p>
                    If you are donating in honor of a nurse we will note your
                    donor status on our donor wall in their memory, and will
                    light a candle for your nurse on our honor wall. Please be
                    certain to provide the full name of the nurse you would like
                    to honor with your donation information, and the family
                    contact information if you would like us to notify the
                    family of your donation in their nurse&#39;s honor as well.
                </p>
                <p>
                    For business or corporate donors please contact us directly
                    so we may place your name and logo on our donor wall in
                    appreciation of your supporting nurses and our mission of
                    nurses honoring nurses.
                </p>
                <p>
                    We are not yet established as a 501 (c)(3) non-profit
                    organization but are planning to apply soon which if
                    accepted will be retroactive to our organization January 1,
                    2024. However in the interim we can supply a receipt and
                    information about our organization.
                </p>
            </div>

            <div>
                <h2 className="flex justify-center pb-2">Donor Wall:</h2>
                <p className="font-bold flex justify-center">
                    We would like to thank the following donors for their
                    generous support of the Maryland Nurse Honor Guard:
                </p>
                <div className="flex justify-center">
                    <div className="columns-2">
                        <DonorWallCons />
                    </div>
                </div>
            </div>
        </div>
    );
}
