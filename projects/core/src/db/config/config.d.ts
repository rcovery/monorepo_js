import { Dialect } from 'sequelize';

type ConnectionInfo = {
	username: string;
	password: string;
	port: number;
	database: string;
	host: string;
	dialect: Dialect;
};

export type ConfigurationObject = {
	development: ConnectionInfo;
	test: ConnectionInfo;
	production: ConnectionInfo;
};
