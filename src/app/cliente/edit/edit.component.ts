import { Component, OnInit } from '@angular/core';
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

  constructor(private clienteService: ClienteService) { }

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