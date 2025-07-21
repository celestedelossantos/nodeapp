import { db } from '../config/firebase.js';
import { passwordValidation } from '../utils/encrypt.js';

export class AuthModel {
    #name = 'auth';
    #collection = null;
    constructor() {
        this.#collection = db.collection(this.#name);
    }

    async findOne(username) {
        try {
            const ref = this.#collection.where('username', '==', username);
            const response = await ref.get();
            return response.docs[0].data();
        } catch (error) {
            console.error('Error finding user', error);
            return null;
        }
    }

    async login(username, password) {
        const user = await this.findOne(username);

        if (!user) {
            return null;
        }
        const passwordMatch = await passwordValidation(user, password);

        if (!passwordMatch) {
            return null;
        }
        return user;
    }

    async create(username, password) {
        const user = { username, password };
        const data = await this.#collection.add(user);
        return { username: data.username };
    }
}
