import { Injectable } from '@angular/core';
import 'rxjs/operator/toPromise';

import { HttpClient} from '@angular/common/http'

@Injectable()
export class TestService {
  // ok = Math.floor(Math.random()*100);

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

  // getMovies(ok){
  //   return this.ajaxTruc.get(`https://api.themoviedb.org/3/movie/${ok}?api_key=248475363bc0dd3c7ba71bde7cfe3115`)
  //   .toPromise();
  // }
  getMovies(){
    return this.ajaxTruc.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=248475363bc0dd3c7ba71bde7cfe3115`)
    .toPromise();
  }
  getSeries(){
    return this.ajaxTruc.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=248475363bc0dd3c7ba71bde7cfe3115`)
    .toPromise();
  }
  getBooks(){
    return this.ajaxTruc.get(`https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=fb8a9ac82c0e4231b0c2d2e30b834719`)
    .toPromise();
  }
  getStory(){
    return this.ajaxTruc.get(`  https://api.nytimes.com/svc/topstories/v2/home.json?api-key=fb8a9ac82c0e4231b0c2d2e30b834719`)
    .toPromise();
  }
  getQuotes(){
    return this.ajaxTruc.get(`http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_json=mycallback`)
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

