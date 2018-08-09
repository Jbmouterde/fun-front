import { Component, OnInit } from '@angular/core';
import { TestService, Advice } from '../api/test.service';
import { Router } from '@angular/router';
import { ok } from 'assert';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie : Array<Advice> = [];
  ok = Math.floor(Math.random()*20);
  serie : Array<Advice> = [];
  o= Math.floor(Math.random()*20);
  director : Array<Advice> = [];
  author : Array<Advice> = [];
  poster : Array<Advice> = [];
  photo : Array<Advice> = [];

  constructor(
    public apiTruc : TestService,
    private router: Router,
  ) { }

  ngOnInit() {

    this.apiTruc.getMovies()
    // .then((result : News[])=>{
      .then((result : any)=>{
        console.log('advice result' ,result.results[this.ok].title)
        // this.news.push(result.articles)
      // console.log(result)
      this.movie = result.results[this.ok].title
      this.director = result.results[this.o].vote_average
      // this.poster = result.results[this.o].poster_path

      // console.log(result)
    })
    .catch((err)=>{
      console.log("News list error")
      console.log(err)
    })

    this.apiTruc.getSeries()
    // .then((result : News[])=>{
      .then((result : any)=>{
        console.log('serie result' ,result.results[this.o].name)
        console.log('phot result' ,result.results[this.o].poster_path)

        // this.news.push(result.articles)
      // console.log(result)
      this.serie = result.results[this.o].name
      this.author = result.results[this.o].vote_average
      // this.photo = result.results[this.o].poster_path

      // console.log(result)
    })
    .catch((err)=>{
      console.log("News serie error")
      console.log(err)
    })
  }

}
