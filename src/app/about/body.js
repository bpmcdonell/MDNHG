import React from "react";

export default function AboutBody() {
    return (
        <aside className="px-10 flex flex-col">
            <h2 className="py-7 mx-auto">Who We Are:</h2>

            <div>
                <p className="p-1">
                    The Maryland Nurse Honor Guard considers it a privilege to
                    participate in the memorial services of fellow nurses to
                    celebrate and recognize those who have dedicated their lives
                    to the profession of nursing.
                </p>

                <p className="p-1">
                    We are a group of active and retired professional nurses who
                    volunteer our time to pay tribute to our fallen colleagues
                    at their funeral or memorial service.
                </p>
                <div className="flex max-w-lg shadow-lg mx-auto pr-5 pl-2 my-5 py-5 bg-[#0A0C92] b rounded-lg">
                    <p className="flex text-white mx-auto font-semibold text-4xl">
                        "Nurses Honoring Nurses"
                    </p>
                </div>

                <p className="p-1">
                    Our service is steeped in nursing tradition and embraces the
                    symbolism of our nursing uniform and presentation of a
                    nursing lamp to the family after a Nightingale Tribute and
                    Last Roll Call releasing the nurse from their duties with
                    honor
                </p>
                <p className="p-1">
                    It is similar to a military tribute, and it is our mission
                    to be able to provide this service free of charge to any
                    Maryland resident who was a Registered Nurse, Licensed
                    Practical Nurse, Nurse Practitioner or other nurse
                    specialist in our state. The presence of the Nurse Honor
                    Guard hopes to be a source of comfort to the family and a
                    celebration of the nurse's service.
                </p>
                <p className="p-1">
                    Also we offer Living Tributes to any nurse that may be near
                    the end of their life so we may honor them in person and
                    thank them for their service.
                </p>
            </div>
            <div className="flex flex-col">
                <h2 className="py-7 mx-auto">Get Involved!</h2>
                <p>
                    If you are a nurse and would like to join the Maryland
                    Nurses Honor Guard, please sumbit your information on our{" "}
                    <a href="/volunteer">volunteer page</a> and join our
                    community on our{" "}
                    <a href="https://www.facebook.com/groups/891383095941572">
                        Facebook Group
                    </a>
                    .
                </p>
            </div>
        </aside>
    );
}
