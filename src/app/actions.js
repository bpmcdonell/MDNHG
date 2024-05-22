"use server";
import { addDoc, getDocs, collection } from "firebase/firestore";
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

	console.log(data);

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
		console.log("Document written with ID: ", docRef.id);
		return docRef.id;
	} catch (e) {
		console.error("Error adding document: ", e);
	}
}

export async function contactFormSubmit(contact, now) {
	const app = initializeApp(firebaseConfig);
	const db = getFirestore(app);

	const data = contact;

	console.log(data);

	try {
		const docRef = await addDoc(collection(db, "contactForm"), {
			FirstName: data.FirstName,
			LastName: data.LastName,
			Phone: data.Phone,
			Email: data.Email,
			Message: data.Message,
			timestamp: now,
		});
		console.log("Document written with ID: ", docRef.id);
		return docRef.id;
	} catch (e) {
		console.error("Error adding document: ", e);
	}
}

export async function volFormSubmit(volunteer, now) {
	const app = initializeApp(firebaseConfig);
	const db = getFirestore(app);

	const data = volunteer;

	console.log(data);
	try {
		const docRef = await addDoc(collection(db, "volunteerForm"), {
			FirstName: data.FirstName,
			LastName: data.LastName,
			Address: data.Address,
			City: data.City,
			ZipCode: data.ZipCode,
			County: data.County,
			CountyOther: data.CountyOther,
			State: data.State,
			Phone: data.Phone,
			Email: data.Email,
			Designation: data.Designation,
			DesignationOther: data.DesignationOther,
			EmploymentStatus: data.EmploymentStatus,
			timestamp: now,
		});
		console.log("Document written with ID: ", docRef.id);
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
	formData.append("Address", volunteer.Address);
	formData.append("City", volunteer.City);
	formData.append("ZipCode", volunteer.ZipCode);
	formData.append("County", volunteer.County);
	formData.append("CountyOther", volunteer.CountyOther);
	formData.append("State", volunteer.State);
	formData.append("Phone", volunteer.Phone);
	formData.append("Email", volunteer.Email);
	formData.append("Designation", volunteer.Designation);
	formData.append("DesignationOther", volunteer.DesignationOther);
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
	return memoriams;
}

export async function galleryImageGet() {
	const { resources } = await cloudinary.search.expression().execute();
	return resources;
}
