import React from "react";

export default function ServiceBody() {
    return (
        <div>
            <h2 className="flex justify-center pb-5">Memorial Tributes</h2>
            <p>
                The Nightingale Tribute is comforting to families and helps
                provide closure by honoring their loved one&#39;s dedication to
                nursing. It offers an opportunity for fellow nurses to
                commemorate and recognize their colleague's unique contributions
                to our nursing profession. We welcome people of all backgrounds,
                cultures and faiths to receive our non-denominational services.
            </p>
            <p>
                It is a short ceremony (generally 2-5 minutes) and can be placed
                anywhere within the service appropriate to the preferences of
                the family or clergy.
            </p>
            <p>
                We can help coordinate the tribute within the service in
                collaboration with the family, funeral home and place of worship
                as appropriate, and are able to adapt our readings to suit the
                recipient.
            </p>
            <div className="flex flex-col max-w-sm mx-auto pr-5 pl-2 my-5 py-5 text-white bg-nhgBlue b rounded-lg">
                <p className="mb-2 mx-auto text-base md:text-lg font-bold">
                    The Nightingale Tribute consists of:
                </p>
                <ul className="mx-auto pl-4">
                    <li>Short synopsis of nurse&#39;s career (optional)</li>
                    <li>Creative reading</li>
                    <li>Presentation of white rose</li>
                    <li>Final Roll Call - release of nurse duties</li>
                    <li>Presentation of lamp to family</li>
                </ul>
            </div>
            <h2 className="flex justify-center pb-2">Living tributes</h2>
            <p>
                Living Tributes are performed for nurses during their life in
                recognition and gratitude for their service. This tribute thanks
                the nurse in person with a reading, and gifts of a rose and
                blanket. Common places for living tributes are in the home,
                hospice or nursing facility and can be small or large gatherings
                depending on the family and member&#39;s wishes.
            </p>

            <h2 className="flex justify-center py-2">Other Special Events</h2>
            <p>
                The Maryland Nurse Honor Guard is also available for special
                events where we may support the recognition of nurses in our
                community including:
            </p>
            <div className="flex flex-col max-w-sm mx-auto pr-5 pl-2 my-5 py-5 bg-nhgBlue rounded-lg">
                <ul className="text-white flex justify-center flex-col mx-auto px-6">
                    <li>Nurses Week</li>
                    <li>
                        Student Nurse Pinning, Lamp lighting or <br />{" "}
                        graduation ceremonies
                    </li>
                    <li>Parades</li>
                    <li>Community Activities</li>
                    <li>Health Fairs</li>
                </ul>
            </div>
            <p className="my-5 mb-10">
                If there is an event you would like to request the presence of
                the Nurse Honor Guard at that is not listed above, please select
                "other" and provide details in the form to the left and we will
                be in touch.
            </p>
        </div>
    );
}
