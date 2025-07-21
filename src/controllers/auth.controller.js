import { AuthModel } from '../models/auth.model.js';
import { AuthService } from '../service/auth.service.js';

const service = new AuthService(new AuthModel());

export const login = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res
            .status(400)
            .json({ error: 'Username and password are required' });
    }

    const token = await service.login(username, password);

    if (!token) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    res.json({ message: 'Login successful', payload: token });
};

export const register = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password || username.length < 3 || password.length < 6) {
        return res
            .status(400)
            .json({ error: 'Username and password are invalid' });
    }

    const user = await service.register(username, password);

    if (!user) {
        return res
            .status(400)
            .json({ error: 'Username or password are invalid' });
    }

    res.status(201).json({
        message: 'User registered successfully',
        user,
    });
};
