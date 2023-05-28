import { Sequelize } from 'sequelize-typescript';
import { User } from 'src/db/models/users/user.entity';
import Configuration, { ConfigurationObject } from 'src/db/config/config';

type AvailableEnvironments = 'development' | 'test' | 'production';
export const databaseProviders = [
	{
		provide: 'SEQUELIZE',
		useFactory: async () => {
			const configObject = Configuration as ConfigurationObject;
			const currentEnvironment =
				(process.env.NODE_ENV as AvailableEnvironments) ?? 'development';

			const config = configObject[currentEnvironment];
			const sequelize = new Sequelize(config);
			sequelize.addModels([User]);
			await sequelize.sync();
			return sequelize;
		},
	},
];
