import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title:string = 'Hello App';
  hello:string = 'Hello from BrideLabzz';
  ImageURL:string = 'https://iili.io/3F8DupV.jpg';
  redirectt:string = 'https://vinayjadaun-com.vercel.app/';
  userName:string = '';
  errorMsg:string = '';


  // This method is called when the image is clicked
  onImageClick(event:Event):void {
    console.log("helloworld");
    window.open(this.redirectt,"_blank"); // Navigate to the new URL
  }
    

  onInput(event:Event) {
    console.log("Change Event Occurred!", event.target);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if (nameRegex.test(this.userName)) {
        this.errorMsg = "";
        return;
    }
    this.errorMsg = "Name is Incorrect!";
}

  
}
