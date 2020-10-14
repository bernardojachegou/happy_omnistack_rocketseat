import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Orphanage from '../model/Orphanage';

export default {
    async create(request: Request, response: Response) {
        const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends
        } = request.body;

        // This is the const that will be used to create and save the object;

        const orphanagesRepository = getRepository(Orphanage);

        // Creating the object that will be saved in the DB;

        const orphanage = orphanagesRepository.create({
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends
        });

        // Salving the object created inside the DB;

        await orphanagesRepository.save(orphanage);

        return response.status(201).json(orphanage);
    }
}