import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private selectedFile: File = null;
  private url: string = "https://clientecadteste.firebaseio.com/";

  constructor(
    private http: HttpClient
  ) { }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
    console.log(event);
  }
  onUpload() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name)
    this.http.post(this.url, fd)
      .subscribe(
        res => {
          console.log(res);
        }
      );
  }
}
//http://www.fabricadecodigo.com/rest-api-ionic/
//https://www.youtube.com/watch?v=YkvqLNcJz3Y