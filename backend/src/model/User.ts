import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, OneToMany, JoinColumn } from 'typeorm';
import Orphanage from './Orphanage';
import * as bcrypt from 'bcrypt';

@Entity('users')
export default class User {

	@PrimaryGeneratedColumn('increment')
	user_id: number;

	@Column()
	name: string;

	@Column({ unique: true })
	email: string;

	@Column({ select: false })
	password: string;

	@OneToMany(() => Orphanage, orphanage => orphanage.user, {
		cascade: ['insert', 'update']
	})
	@JoinColumn({ name: 'user_id' })
	orphanages: Orphanage;

	@BeforeInsert()
	@BeforeUpdate()
	async hashPassword(): Promise<void> {
		if (!!this.password) {
			this.password = await bcrypt.hash(this.password, 10);
		}
	}
}