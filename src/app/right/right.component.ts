import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {

  
  private daysArray = ["Domingo","Lunes", "Martes", "Miercoles", "Jueves" ,"Viernes", "Sabado"];
  private date = new Date();

  public hour: any;
  public minute: string;
  public second:string;
  public ampm: string;
  public day:string
  constructor() { }

  ngOnInit(): void {

    setInterval(()=> {
      const date = new Date();
      this.updateDate(date);
    }, 1000);  // this will call the update Date method in each second


    this.day = this.daysArray[this.date.getDay()];
    //getDAY() retuns the day in integer format, from 0 to 6 then takes the correspondent day from the daysArray
  }


  private updateDate(date:Date){
    const hours = date.getHours(); // gets the hours from the date


    this.ampm = hours >= 12 ? "pm" : "am";

    this.hour = hours % 12; // makes the hour in 12 hours format

    this.hour = this.hour ? this.hour : 12; // if the hour is 0 then 12 is assignes to it.

    this.hour = this.hour < 10 ? "0" + this.hour : this.hour; // if the hour is single digit, then adds 0 infront ofit.

    const minutes = date.getMinutes();

    this.minute = minutes< 10 ? "0" + minutes : minutes. toString();

    const seconds = date.getSeconds();

    this.second = seconds < 10 ? "0" + seconds: seconds.toString();

}

}
