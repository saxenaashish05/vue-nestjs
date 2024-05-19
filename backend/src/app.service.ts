import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Nestjs ship is ready !   Database connection is ok ! are you ready to embark on the Ship?';
  }

    
}
