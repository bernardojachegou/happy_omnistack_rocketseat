import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../model/User';

export default {
	async authenticate(request: Request, response: Response) {
		const repository = getRepository(User);
		const { email, password } = request.body;

		const user = await repository.findOne({ where: { email } });

		if (!user) {
			return response.sendStatus(401);
		}

		const isValidPassword = await bcrypt.compare(password, user.password);

		if (!isValidPassword) {
			return response.sendStatus(401);
		}

		const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1d' });

		// delete user.password;

		return response.json({
			user,
			token
		});

	}
}