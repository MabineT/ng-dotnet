import { Component, OnInit } from '@angular/core';
import { CausalHelperService } from '../-services/causal-helper.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: any = [];
  constructor(private http: HttpClient, private causal: CausalHelperService) { 
  }
  
  ngOnInit() {
    this.users = this.getValues();
    console.log(this.users);
  }

  getValues() {
    this.http.get(this.causal.BASE_URI + 'users').subscribe(next => {
      this.users = next;
      console.log("this here now");
      console.log( this.users);
    }, error => {
      console.log(error);
    });
  }

  open(event){
    console.log(event);
  }

}
