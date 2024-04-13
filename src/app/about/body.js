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
                <div className="flex max-w-lg mx-auto pr-5 pl-2 my-5 py-5 bg-indigo-200 b rounded-lg">
                    <ul>
                        <li>
                            VISION - To honor every nurse who passes in the
                            State of Maryland.
                        </li>
                        <li>
                            PURPOSE - To recognize fallen professional nurses
                            and their contributions to society by honoring their
                            life's work in a memorial service.
                        </li>
                        <li>
                            MISSION - To honor fallen colleagues and provide
                            comfort to their families by participating in their
                            memorial services including providing a Nightingale
                            Tribute ceremony.
                        </li>
                    </ul>
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
        </aside>
    );
}
