import jwt from 'jsonwebtoken';
import { createHash } from '../utils/encrypt.js';
import config from '../config/environment.js';

export class AuthService {
    constructor(model) {
        this.model = model;
    }

    async login(username, password) {
        try {
            const user = await this.model.login(username, password);
            if (!user) {
                throw new Error('Invalid credentials');
            }
            const token = jwt.sign(
                { userId: user.username },
                config.secretKey,
                {
                    expiresIn: '1h',
                }
            );
            return token;
        } catch (error) {
            console.error('Error during login', error);
            return null;
        }
    }

    async register(username, password) {
        try {
            const user = await this.model.findOne(username);
            if (user) {
                return null;
            }
            const passwordHash = await createHash(password);
            const newUser = await this.model.create(username, passwordHash);
            if (!newUser) {
                return null;
            }
            return newUser;
        } catch (error) {
            console.error('Error during login', error);
            return null;
        }
    }
}
