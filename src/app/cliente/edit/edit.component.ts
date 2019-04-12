import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

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
    private storage: AngularFireStorage
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
    console.log(event);
  }

  onUpload() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name)
    //const file = event.target.files[0];
    const filePath = '/img/'+ this.selectedFile.name;
    const ref = this.storage.ref(filePath);
    const task = ref.put(fd);
  }
}