import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onSelectFile: File = null;
}
//http://www.fabricadecodigo.com/rest-api-ionic/
//https://www.youtube.com/watch?v=YkvqLNcJz3Y