import { Component, OnInit } from '@angular/core';
import { TestService, Advice } from '../api/test.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-chiffres',
  templateUrl: './chiffres.component.html',
  styleUrls: ['./chiffres.component.css']
})
export class ChiffresComponent implements OnInit {
  advices : Array<Advice> = []

  constructor(
    public apiTruc : TestService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.apiTruc.getAdvice()
    // .then((result : News[])=>{
      .then((result : any)=>{
        console.log('advice result' ,result.slip.advice)
        // this.news.push(result.articles)
      // console.log(result)
      this.advices = result.slip.advice
        console.log(this.advices)
      // console.log(result)
    })
    .catch((err)=>{
      console.log("News list error")
      console.log(err)
    })
  }

}
