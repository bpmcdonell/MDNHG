"use server";
import { addDoc, getDocs, collection, doc } from "firebase/firestore";
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

export async function serviceFormSubmit(service, now) {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const data = service;

    try {
        const docRef = await addDoc(collection(db, "serviceRequest"), {
            serviceType: data.serviceType,
            otherService: data.otherService,
            dateOfService: data.dateOfService,
            honoredName: data.honoredName,
            reqName: data.reqName,
            reqPhone: data.reqPhone,
            reqEmail: data.reqEmail,
            reqRelation: data.reqRelation,
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
			<p>Requestor Name: ${data.reqName}</p>
			<p>Requestor Phone: ${data.reqPhone}</p>
			<p>Requestor Email: ${data.reqEmail}</p>
			<p>Requestor Relation: ${data.reqRelation}</p>
			<p>Timestamp: ${now}</p>
			`,
        };

        firebaseEmailer(emailData);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export async function contactFormSubmit(contact, now) {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const data = contact;

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

        firebaseEmailer(emailData);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export async function volFormSubmit(volunteer, now) {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const data = volunteer;

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
			<p>Timestamp: ${now}</p>
			`,
        };

        firebaseEmailer(emailData);

        return docRef.id;
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export async function volFormSubmitSheets(volunteer, now) {
    const sheetURL =
        "https://script.google.com/macros/s/AKfycbyhlDNXQ4bgoAocuI5ZDACN0xNLDtPaH4baXUqxoAQPphao7nZwPmqhnRda9jpsjMnk/exec";

    const formData = new FormData();
    formData.append("FirstName", volunteer.FirstName);
    formData.append("LastName", volunteer.LastName);
    formData.append("DateOfBirth", volunteer.DateOfBirth);
    formData.append("Address", volunteer.Address);
    formData.append("City", volunteer.City);
    formData.append("ZipCode", volunteer.ZipCode);
    formData.append("County", volunteer.County);
    formData.append("State", volunteer.State);
    formData.append("Phone", volunteer.Phone);
    formData.append("Email", volunteer.Email);
    formData.append("Designation", volunteer.Designation);
    formData.append("DesignationOther", volunteer.DesignationOther);
    formData.append("YearOfLicensure", volunteer.YearOfLicensure);
    formData.append("EmploymentStatus", volunteer.EmploymentStatus);
    formData.append("Timestamp", now);

    fetch(sheetURL, {
        method: "POST",
        body: formData,
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            return data;
        })

        .catch((error) => {
            console.log("Error:", error);
            return error;
        });
}

//gets

export async function donorWallGet() {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const donors = [];
    const querySnapshot = await getDocs(collection(db, "donors"));
    querySnapshot.forEach((doc) => {
        donors.push(doc.data());
    });

    donors.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    });

    return donors;
}

export async function memWallGet() {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const memoriams = [];
    const querySnapshot = await getDocs(collection(db, "memoriams"));
    querySnapshot.forEach((doc) => {
        memoriams.push(doc.data());
    });

    memoriams.sort((a, b) => {
        let aName = a.name.split(" ");
        let bName = b.name.split(" ");
        let aLast = aName[aName.length - 1];
        let bLast = bName[bName.length - 1];
        return aLast.localeCompare(bLast);
    });

    return memoriams;
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
            to: [
                "contact@mdnursehonorguard.org",
                "carol.mcdonell@mdnursehonorguard.org",
            ],
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
        return emailSent;
    }
}
