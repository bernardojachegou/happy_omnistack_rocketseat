import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate } from 'typeorm';
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

	@BeforeInsert()
	@BeforeUpdate()
	async hashPassword(): Promise<void> {
		if (!!this.password) {
			this.password = await bcrypt.hash(this.password, 10);
		}
	}
}