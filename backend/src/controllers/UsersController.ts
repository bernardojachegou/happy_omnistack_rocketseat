import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import User from '../model/User';

export default {
    async create(request: Request, response: Response) {
        const {
            name,
            email,
            password
        } = request.body;

        const usersRepository = getRepository(User);

        const data = {
            name,
            email,
            password
        };

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().required(),
            password: Yup.string().required(),

        });

        await schema.validate(data, {
            abortEarly: false,
        });

        const user = usersRepository.create(data);
        await usersRepository.save(user);
        
        return response.status(201).json(user);
    }
}