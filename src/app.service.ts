import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  
  data = [
    {
      id: 1,
      title: "Mieszko",
      year: 2019
    },
    {
      id: 2,
      title: "Rafal",
      year: 2019
    }
  ];

  
  getHello(): string {
    return 'Hello World!';
  }

  getAll(): string {
    return JSON.stringify(this.data);
    
  }
}
