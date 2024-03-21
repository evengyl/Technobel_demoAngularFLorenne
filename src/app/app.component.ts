import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title : string = 'demoAngularFLorenne'
  nb1 : number = 42
  bool : boolean = false
  uneDate : Date = new Date()
  
}
