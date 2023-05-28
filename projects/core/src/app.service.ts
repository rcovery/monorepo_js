import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
	getHello(): string {
		return 'Hello World!';
	}

	getAbout(): string {
		return 'Test project with monorepo!';
	}

	getCareers(): string {
		return 'It worked!';
	}
}
