import { Component, OnInit } from '@angular/core';
import { TestService, Advice } from '../api/test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book : Array<Advice> = [];
  ok = Math.floor(Math.random()*44);
  o = Math.floor(Math.random()*44);

  author : Array<Advice> = [];
  story: Array<Advice> = [];
  url: Array<Advice> = [];

  constructor(
    public apiTruc : TestService,
    private router: Router,
  ) { }

  ngOnInit() {

    this.apiTruc.getBooks()
    // .then((result : News[])=>{
      .then((result : any)=>{
        console.log('books result' ,result)

        // this.news.push(result.articles)
      // console.log(result)
      this.book = result.results[this.ok].title
      this.author = result.results[this.ok].author

    })
    .catch((err)=>{
      console.log("News list error")
      console.log(err)
    })


    this.apiTruc.getStory()
    // .then((result : News[])=>{
      .then((result : any)=>{
        console.log('books result' ,result)

        // this.news.push(result.articles)
      // console.log(result)
      this.story = result.results[this.o].title
      this.url = result.results[this.o].url

    })
    .catch((err)=>{
      console.log("News list error")
      console.log(err)
    })
  }

}
