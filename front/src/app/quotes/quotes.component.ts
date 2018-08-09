import { Component, OnInit } from '@angular/core';
import { TestService, Advice } from '../api/test.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quote : Array<Advice> = [];
  ok = Math.floor(Math.random()*20);
  author : Array<Advice> = [];

  constructor(
    public apiTruc : TestService,
    private router: Router,
  ) { }

  ngOnInit() {

    this.apiTruc.getQuotes()
    // .then((result : News[])=>{
      .then((result : any)=>{
        console.log('quotes result' ,result)

        // this.news.push(result.articles)
      // console.log(result)
      this.quote = result[0].content
      this.author = result[0].title

    })
    .catch((err)=>{
      console.log("News list error")
      console.log(err)
    })

  }

}
