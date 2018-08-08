import { Injectable } from '@angular/core';
import 'rxjs/operator/toPromise';

import { HttpClient} from '@angular/common/http'

@Injectable()
export class TestService {

  constructor(
    private ajaxTruc : HttpClient

  ) { }


  getNews(){
    return this.ajaxTruc.get('https://newsapi.org/v2/top-headlines?sources=national-geographic&apiKey=17ff854720b449c6bbd72574e7a18d9e')
    .toPromise();
  }

  getNumber(){
    return this.ajaxTruc.get('http://numbersapi.com/42')
    .toPromise();
  }
  getAdvice(){
    return this.ajaxTruc.get('http://api.adviceslip.com/advice')
    .toPromise();
  }
  getCountry(){
    return this.ajaxTruc.get('https://restcountries.eu/rest/v2/all')
    .toPromise();
  }
 
}

export class Advice {
  
  slip: {
    advice: string,
    slip_id: number
};
}

export class News {
  
  source: {
    id: number,
    name: string
};
author: string;
title: string;
description: string;
url: string;
urlToImage: string;
publishedAt: Date;
}

export class Chiffre {
text: string;
// number: number;
// // found: true;
// type: string;
}

