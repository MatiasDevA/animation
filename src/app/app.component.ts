import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router"
import   {fader, slider, transformer,stepper} from "../app/route-animation"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    //fader,
    //slider,
    //transformer,
    stepper
  ]
})
export class AppComponent {
  
  prepareRoute(outlet:RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData["animation"]
  }

}
