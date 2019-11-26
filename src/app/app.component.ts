import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements AfterViewInit{
  name = 'Angular 8 by Example: ElementRef';
  // DOM query, myDiv = template ref
  @ViewChild("myDiv", {static: true}) divView: ElementRef;

  //after view is initialized this is called
  ngAfterViewInit(){

    console.log(this.divView);
    this.divView.nativeElement.innerHTML = "Hello Angular 8!";

  }

}
