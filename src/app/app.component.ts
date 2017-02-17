import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public flexProp:FlexProperties;

  ngOnInit() {
   this.flexProp = {
     display : 'flex',
     flexDirections : 'row',
     alignItems : 'center'
   }
  }



}


export interface FlexProperties{
  display:string;
  flexDirections:string;
  alignItems:string;
}
