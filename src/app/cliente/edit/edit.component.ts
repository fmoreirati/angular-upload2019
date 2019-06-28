import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {
  private cliente: Cliente;
  private clientes: Cliente[];
  private selectedFile: File = null;


  constructor(
    private clienteService: ClienteService,
    private storage: AngularFireStorage,
    private task: AngularFireUploadTask
  ) { }

  ngOnInit() {
    this.cliente = new Cliente();
    // this.clienteService.getClientes().subscribe(data => {
    //   this.clientes = data;
    // });
  }



  logForm(form) {
    if (form.valid) {
      this.clienteService.addCliente(this.cliente);
      console.log(this.cliente);
      form.reset();
    }
  }


  onFileSelected(event) {
    this.cliente.foto = event.target.files[0].name;
    this.selectedFile = event.target.files[0];
  }


  onUpload() {
    const filePath = '/img/' + this.selectedFile.name;
    const ref = this.storage.ref(filePath);
    const task = ref.put(this.selectedFile);
    console.log(task);
  }

  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;

  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = 'name-your-file-path-here';
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
      finalize(() => this.downloadURL = fileRef.getDownloadURL())
    )
      .subscribe()
  }
}