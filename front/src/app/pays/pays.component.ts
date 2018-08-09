import { Component, OnInit } from '@angular/core';
import { TestService, Advice } from '../api/test.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pays',
  templateUrl: './pays.component.html',
  styleUrls: ['./pays.component.css']
})
export class PaysComponent implements OnInit {
  country : Array<Advice> = [];
  test = Math.floor(Math.random()*100);
  capital : Array<Advice> = [];
  population : Array<Advice>= [];
  constructor(
    public apiTruc : TestService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.apiTruc.getCountry()
    // .then((result : News[])=>{
      .then((result : any)=>{
        console.log('advice result' ,result[0])
        // this.news.push(result.articles)
      // console.log(result)
      this.country = result[this.test].name
      this.capital = result[this.test].capital
      this.population = result[this.test].population
      // console.log(result)
    })
    .catch((err)=>{
      console.log("News list error")
      console.log(err)
    })
  }

}
