import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
	let app: INestApplication;

	beforeEach(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [AppModule],
		}).compile();

		app = moduleFixture.createNestApplication();
		await app.init();
	});

	it('/ (GET)', () => {
		return request(app.getHttpServer())
			.get('/')
			.expect(200)
			.expect('Hello World!');
	});

	it('/about (GET)', () => {
		return request(app.getHttpServer())
			.get('/about')
			.expect(200)
			.expect('Test project with monorepo!');
	});

	it('/careers', () => {
		return request(app.getHttpServer())
			.get('/careers')
			.expect(200)
			.expect('It worked!');
	});
});
