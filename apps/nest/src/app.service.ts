import { Injectable } from '@nestjs/common';
import { MyLib } from 'api-lib';

@Injectable()
export class AppService {
  getHello(): string {
    const mylib: MyLib = new MyLib();
    return 'Test: ' + mylib.hello();
  }
}
