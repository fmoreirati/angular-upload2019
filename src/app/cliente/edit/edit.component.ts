import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente.model'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {
  private cliente: Cliente;
  private selectedFile: File = null;
  //private url: string = "https://cadclientes2019.firebaseio.com";
  //private url: string = "gs://cadclientes2019.appspot.com/";

  constructor() { }

  ngOnInit() {
    this.cliente = new Cliente;
    console.log(this.cliente.id);
  }

  onSubmit() {
    console.log(this.cliente);
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
    console.log(event);
  }

  // onUpload() {
  //   const fd = new FormData();
  //   fd.append('image', this.selectedFile, this.selectedFile.name)
  //   this.http.post(this.url, fd)
  //     .subscribe(
  //       res => {
  //         console.log(res);
  //       }
  //     );
  // }
}