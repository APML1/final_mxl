import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router ,RouterEvent } from '@angular/router';
import * as $ from 'jquery';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Driver Issue';
  constructor(private activatedRoute:ActivatedRoute ,private http: HttpClient,private router:Router,) { 
  }
  ngOnInit(): void {
  
      
  
}

}
