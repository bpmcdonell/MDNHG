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
        return new Date(b.date) - new Date(a.date);
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
        process.env.CLOUDINARY_API_SECRET,
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
        await deleteDoc(doc(db, "donors", id.id), {
            AdminUID: id.AdminUID,
        });
        console.log("Donor deleted with ID: ", id);
    } catch (e) {
        console.error("Error deleting document: ", e);
    }
}

export async function donorWallEdit(donor) {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    donor.date = await formatDateISOshort(donor.date);

    ((donor.notePrefix = donor.notePrefix || ""),
        (donor.note = donor.note || ""));

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
        await deleteDoc(
            doc(db, "memoriams", id.id, {
                AdminUID: id.AdminUID,
            }),
        );
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
            AdminUID: mem.AdminUID,
        });
        console.log("Memorial edited with ID: ", mem.id);
        return { success: true };
    } catch (e) {
        console.error("Error editing document: ", e);
        return { success: false };
    }
}
