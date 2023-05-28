import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class User extends Model {
	@Column
	id: number;

	@Column
	name: string;

	@Column
	email: string;
}
