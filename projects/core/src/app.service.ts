import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getAbout(): string {
    return '<h4>This is a test project using monorepo!</h4>';
  }
}
