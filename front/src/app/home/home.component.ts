import { Component, OnInit } from '@angular/core';
import { TestService, News, Chiffre } from '../api/test.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  news : Array<News> = [];
  chiffres : Array<Chiffre>;

  constructor(
    public apiTruc : TestService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.apiTruc.getNews()
    // .then((result : News[])=>{
      .then((result : any)=>{
        console.log('news result' ,result.articles)
        // this.news.push(result.articles)
      // console.log(result)
      this.news = result.articles
      // console.log(result)
    })
    .catch((err)=>{
      console.log("News list error")
      console.log(err)
    })

    this.apiTruc.getNumber()
    // .then((result : News[])=>{
      .then((test : any)=>{
        console.log('chiffres result' ,test)
        // this.news.push(test.chiffre)
      console.log("r", test)
      this.chiffres = test
      // console.log(result)
    })
    .catch((err)=>{
      console.log("chiffres list error")
      console.log("http://numbersapi.com/42")
      console.log('chiffres result')
      // this.news.push(test.chiffre)
    console.log("r", this.chiffres)
      console.log(err)
    })
  }}
