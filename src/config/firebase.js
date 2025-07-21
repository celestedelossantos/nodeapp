import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import config from '../config/environment.js';
const { credentials } = config;
initializeApp({
    credential: cert(credentials),
});

export const db = getFirestore();
