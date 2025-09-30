"use server";
import {
    addDoc,
    getDocs,
    collection,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";
import cloudinary from "./cloudinary";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

//form posts

export async function serviceFormSubmit(service, token, now) {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const data = service;

    let verified = await verifyCaptcha(token);

    if (verified.success === false) {
        return "Captcha failed";
    }
    if (verified.success === undefined) {
        return "Captcha error";
    } else if (verified.success === true) {
        data.CaptchaState = "Passed";
        data.CaptchaScore = verified.score;
    }

    try {
        const docRef = await addDoc(collection(db, "serviceRequest"), {
            serviceType: data.serviceType,
            otherService: data.otherService,
            dateOfService: data.dateOfService,
            honoredName: data.honoredName,
            serviceLocation: data.serviceLocation,
            reqName: data.reqName,
            reqPhone: data.reqPhone,
            reqEmail: data.reqEmail,
            reqRelation: data.reqRelation,
            CaptchaState: data.CaptchaState,
            CaptchaScore: data.CaptchaScore,
            timestamp: now,
        });
        console.log("Form submission written with ID: ", docRef.id);

        const emailData = {
            type: "Service",
            name: data.reqName,
            html: `
			<p>Service Type: ${data.serviceType}</p>
			<p>Other Service: ${data.otherService}</p>
			<p>Date of Service: ${data.dateOfService}</p>
			<p>Honored Name: ${data.honoredName}</p>
            <p>Service Location: ${data.serviceLocation}</p>
			<p>Requestor Name: ${data.reqName}</p>
			<p>Requestor Phone: ${data.reqPhone}</p>
			<p>Requestor Email: ${data.reqEmail}</p>
			<p>Requestor Relation: ${data.reqRelation}</p>
            <p>Captcha State: ${data.CaptchaState}</p>
            <p>Captcha Score: ${data.CaptchaScore}</p>
			<p>Timestamp: ${now}</p>
			`,
        };

        firebaseEmailer(emailData);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export async function contactFormSubmit(contact, token, now) {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const data = contact;

    let verified = await verifyCaptcha(token);

    if (verified.success === false) {
        return "Captcha failed";
    }
    if (verified.success === undefined) {
        return "Captcha error";
    } else if (verified.success === true) {
        data.CaptchaState = "Passed";
        data.CaptchaScore = verified.score;
    }

    try {
        const docRef = await addDoc(collection(db, "contactForm"), {
            FirstName: data.FirstName,
            LastName: data.LastName,
            Phone: data.Phone,
            Email: data.Email,
            Message: data.Message,
            CaptchaState: data.CaptchaState,
            CaptchaScore: data.CaptchaScore,
            timestamp: now,
        });
        console.log("Form submission written with ID: ", docRef.id);

        const emailData = {
            type: "Contact",
            name: data.FirstName + " " + data.LastName,
            html: `
			<p>First Name: ${data.FirstName}</p>
			<p>Last Name: ${data.LastName}</p>
			<p>Phone: ${data.Phone}</p>
			<p>Email: ${data.Email}</p>
			<p>Message: ${data.Message}</p>
            <p>Captcha State: ${data.CaptchaState}</p>
            <p>Captcha Score: ${data.CaptchaScore}</p>
			<p>Timestamp: ${now}</p>
			`,
        };

        firebaseEmailer(emailData).then((res) => {
            console.log(res);
        });
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export async function volFormSubmit(volunteer, token, now) {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const data = volunteer;

    let verified = await verifyCaptcha(token);

    if (verified.success === false) {
        return "Captcha failed";
    }
    if (verified.success === undefined) {
        return "Captcha error";
    } else if (verified.success === true) {
        data.CaptchaState = "Passed";
        data.CaptchaScore = verified.score;
    }

    try {
        const docRef = await addDoc(collection(db, "volunteerForm"), {
            FirstName: data.FirstName,
            LastName: data.LastName,
            DateOfBirth: data.DateOfBirth,
            Address: data.Address,
            City: data.City,
            ZipCode: data.ZipCode,
            County: data.County,
            State: data.State,
            Phone: data.Phone,
            Email: data.Email,
            Designation: data.Designation,
            DesignationOther: data.DesignationOther,
            YearOfLicensure: data.YearOfLicensure,
            EmploymentStatus: data.EmploymentStatus,
            CaptchaState: data.CaptchaState,
            CaptchaScore: data.CaptchaScore,
            timestamp: now,
        });
        console.log("Document written with ID: ", docRef.id);

        const emailData = {
            type: "Volunteer",
            name: data.FirstName + " " + data.LastName,
            html: `
			<p>First Name: ${data.FirstName}</p>
			<p>Last Name: ${data.LastName}</p>
			<p>Date of Birth: ${data.DateOfBirth}</p>
			<p>Address: ${data.Address}</p>
			<p>City: ${data.City}</p>
			<p>Zip Code: ${data.ZipCode}</p>
			<p>County: ${data.County}</p>
			<p>State: ${data.State}</p>
			<p>Phone: ${data.Phone}</p>
			<p>Email: ${data.Email}</p>
			<p>Designation: ${data.Designation}</p>
			<p>Designation Other: ${data.DesignationOther}</p>
			<p>Year of Licensure: ${data.YearOfLicensure}</p>
			<p>Employment Status: ${data.EmploymentStatus}</p>
            <p>Captcha State: ${data.CaptchaState}</p>
            <p>Captcha Score: ${data.CaptchaScore}</p>
			<p>Timestamp: ${now}</p>
			`,
        };

        firebaseEmailer(emailData).then((res) => {
            console.log(res);
        });

        // volWelcomeEmail(data).then((res) => {
        //     console.log(res);
        // });

        return docRef.id;
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

//gets

export async function donorWallGet() {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const querySnapshot = await getDocs(collection(db, "donors"));
    const donors = querySnapshot.docs.map((doc) => ({
        id: doc.id, // Document ID
        ...doc.data(),
    }));

    const sortedDonors = donors.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
    });

    const paginatior = (donors) => {
        const itemsPerPage = 14;
        const pages = Math.ceil(donors.length / itemsPerPage);
        const paginatedDonors = Array.from({ length: pages }, (_, index) => {
            const start = index * itemsPerPage;
            return donors.slice(start, start + itemsPerPage);
        });
        return paginatedDonors;
    };

    return paginatior(sortedDonors);
}

export async function memWallGet() {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const querySnapshot = await getDocs(collection(db, "memoriams"));
    const memoriams = querySnapshot.docs.map((doc) => ({
        id: doc.id, // Document ID
        ...doc.data(),
    }));

    const sorted = memoriams.sort((a, b) => {
        let aName = a.name.split(" ");
        let bName = b.name.split(" ");
        let aLast = aName[aName.length - 1];
        let bLast = bName[bName.length - 1];
        return aLast.localeCompare(bLast);
    });

    return sorted;
}

export async function galleryImageGet() {
    const { resources } = await cloudinary.search.expression().execute();
    return resources;
}

//e-mailer

export async function firebaseEmailer(data) {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    let emailSent = false;

    try {
        const docRef = await addDoc(collection(db, "mail"), {
            to: ["contact@mdnursehonorguard.org"],
            message: {
                subject: `New ${data.type} Form Submission: ${data.name}`,
                html: data.html,
            },
        });
        console.log("Emailer doc written with ID: ", docRef.id);
        emailSent = true;
        return emailSent;
    } catch (e) {
        console.error("Error adding document: ", e);
        emailSent = false;
        return emailSent;
    }
}

//automated volunteer welcome email

export async function volWelcomeEmail(volunteer) {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    let emailSent = false;

    try {
        const docRef = await addDoc(collection(db, "mail"), {
            to: [volunteer.Email],

            message: {
                subject: `Welcome to the Maryland Nurse Honor Guard, ${volunteer.FirstName}!`,
                html: `
                <img src="https://www.mdnursehonorguard.org/images/MDNHGLogoWhite.png" alt="Maryland Nurse Honor Guard Logo" style="width: 300px; height: auto; margin: 0 auto; display: block;">
                <p>Dear ${volunteer.FirstName},</p>
                <p>Thank you for your interest in being a volunteer with The Maryland Nurse Honor Guard.</p>
                <p><span style="font-weight: bold;">Services:</span> The Nurse Honor Guard attends memorial services for any LPN, RN, NP or other advanced practice nurse in the State of Maryland.  Similar to a military honor guard, we represent our profession with dignity  to pay our respects to nurses by being present and providing them with a tribute to honor their nursing legacy.</p>
                <p>The ceremony is about 5 minutes long. It consists of a reading, presenting a white rose to the nurse who has passed, releasing the nurse from their duties, and providing a Nightingale lamp to the family.</p>
                <p>This ceremony is very healing for the family, and is such a great way to honor our profession with dignity. Most families and other nurses in attendance find this to be a beautiful remembrance of how much their service is valued.</p>
                <p>We also perform living tributes for nurses who may be at the end of life at home or in hospice, and we may also participate in other special activities for nurses including retirements, nursing school graduations, nurse's week activities and community events.  We may participate in parades and fundraising events.</p>
                <p>Nurses who volunteer in the Honor Guard find it personally rewarding and gratifying to join with other nurses as colleagues and friends to perform these services. The nurses who are members of the honor Guard consider it both an honor and a privilege to participate in final services for their fellow nurses.</p>
                <br>
                <p><span style="font-weight: bold;">Volunteering:</span> Volunteer positions are open to any LPN, RN, NP or advanced practice nurse, active or retired in good standing in the State of Maryland.</p>
                <p>Participation does require the ability to walk and stand for sometimes extended periods of time while at a service, but we offer other volunteer opportunities to participate if mobility is difficult.</p>
                <p>We welcome and encourage diversity in our group to proudly represent all nurses, and our services are non-denominational.</p>
                <br>
                <p><span style="font-weight: bold;">Uniform:</span> The Nurse Honor Guard dresses in a traditional white uniform, complete with cap and cape. Volunteers provide their own white uniform dress or pants and shoes. Often these can be found on Amazon or from uniform stores.  Our Cap, bobby pins, cape, and cape clasp are available to purchase as a package. To purchase a cap and cape please send an email to <a href="mailto:contact@mdnursehonorguard.org">contact@mdnursehonorguard.org</a>.</p>
                <br>
                <p><span style="font-weight: bold;">Communication:</span> We have a private volunteer only Facebook page where we post news, updates, calls for volunteers for tributes and coordinate all matters of internal business. This site is by invitation only which you should receive within a week of signing up. If you do not receive an invitation through facebook or your email please reach out to us and let us know.</p>
                <p>For those volunteers who do not use facebook we <span style="underline;">highly recommend</span> making a private account for yourself so you may access and participate in our volunteer site so you do not miss information, photos and interaction with other volunteers. If you would like to learn more about facebook please let us know and we can show you how it works and assist set up.</p>
                <p>If you prefer to use email only for communication we can coordinate that with you so you will get updates of meeting links and tributes that you can sign up to attend.</p>
                <p>We also have a Social Facebook Page for the general public to highlight our group activities in the community. You can find our social page at: <a href="https://www.facebook.com/groups/891383095941572">https://www.facebook.com/groups/891383095941572</a></p>
                <br>
                <p><span style="font-weight: bold;">Meetings:</span> We have virtual meetings every third Tuesday of the month at 7pm. We post the agenda and the meeting information in our Private Volunteer site on Facebook</p>
                <br>
                <p><span style="font-weight: bold;">Mission:</span> Our mission is to be able to offer tributes to all nurses across Maryland so we need volunteers across our whole state in every area.</p>
                <p>We welcome any other questions you may have to <a href="mailto:contact@mdnursehonorguard.org">contact@mdnursehonorguard.org</a>, or you may call us at <a href="tel:+12409747554">(240)974-7554</a>.</p>
                <p>It is our hope that you will find that this is a meaningful and uplifting group to be a part of, and that it enriches your life.  We look forward to meeting you and working together with you!</p>
                `,
            },
        });
        console.log("Emailer doc written with ID: ", docRef.id);
        emailSent = true;
        return emailSent;
    } catch (e) {
        console.error("Error adding document: ", e);
        emailSent = false;
        return emailSent;
    }
}

//recaptcha

export async function verifyCaptcha(token) {
    const secret = process.env.RECAPTCHA_SECRET_KEY;
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`;

    const response = await fetch(url, {
        method: "POST",
    });

    const data = await response.json();

    return await data;
}

//date formatting
export async function formatDateISOshort(date) {
    var formatted = new Date(date).toISOString().slice(0, 10);
    return formatted;
}

//admin

//gallery
export async function galleryImageDelete(publicID) {
    const timestamp = Math.round(new Date().getTime() / 1000);
    const signature = cloudinary.utils.api_sign_request(
        {
            timestamp: timestamp,
        },
        process.env.CLOUDINARY_API_SECRET
    );

    let res = await cloudinary.uploader.destroy(publicID);

    return res;
}

//donor wall

export async function donorWallAdd(donor) {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    try {
        const docRef = await addDoc(collection(db, "donors"), {
            name: donor.name,
            date: donor.date,
            notePrefix: donor.notePrefix,
            note: donor.note,
            AdminUID: donor.AdminUID,
        });
        console.log("Donor added with ID: ", docRef.id);
        return { success: true };
    } catch (e) {
        console.error("Error adding document: ", e);
        return { success: false };
    }
}

export async function donorWallDelete(id) {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    try {
        await deleteDoc(doc(db, "donors", id));
        console.log("Donor deleted with ID: ", id);
    } catch (e) {
        console.error("Error deleting document: ", e);
    }
}

export async function donorWallEdit(donor) {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    donor.date = await formatDateISOshort(donor.date);

    (donor.notePrefix = donor.notePrefix || ""),
        (donor.note = donor.note || "");

    try {
        await updateDoc(doc(db, "donors", donor.id), {
            name: donor.name,
            date: donor.date,
            notePrefix: donor.notePrefix,
            note: donor.note,
            AdminUID: donor.AdminUID,
        });
        console.log("Donor edited with ID: ", donor.id);
        return { success: true };
    } catch (e) {
        console.error("Error editing document: ", e);
        return { success: false };
    }
}

//memorial wall

export async function memWallAdd(mem) {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    formatDateISOshort(mem.dob);
    formatDateISOshort(mem.dod);

    try {
        const docRef = await addDoc(collection(db, "memoriams"), {
            name: mem.name,
            title: mem.title,
            dob: mem.dob,
            dod: mem.dod,
            AdminUID: mem.AdminUID,
        });
        console.log("Memorial added with ID: ", docRef.id);
        return { success: true };
    } catch (e) {
        console.error("Error adding document: ", e);
        return { success: false };
    }
}

export async function memWallDelete(id) {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    try {
        await deleteDoc(doc(db, "memoriams", id));
        console.log("Memorial deleted with ID: ", id);
    } catch (e) {
        console.error("Error deleting document: ", e);
    }
}

export async function memWallEdit(mem) {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    formatDateISOshort(mem.dob);
    formatDateISOshort(mem.dod);

    try {
        await updateDoc(doc(db, "memoriams", mem.id), {
            name: mem.name,
            title: mem.title,
            dob: mem.dob,
            dod: mem.dod,
        });
        console.log("Memorial edited with ID: ", mem.id);
        return { success: true };
    } catch (e) {
        console.error("Error editing document: ", e);
        return { success: false };
    }
}
