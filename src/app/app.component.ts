import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title:string = 'Hello App';
  hello:string = 'Hello from BrideLabzz';
  ImageURL:string = 'https://iili.io/3F8DupV.jpg';
  redirectt:string = 'https://vinayjadaun-com.vercel.app/';


  // This method is called when the image is clicked
  onImageClick(event:Event):void {
    console.log("helloworld");
    window.open(this.redirectt,"_blank"); // Navigate to the new URL
  }

  
}
