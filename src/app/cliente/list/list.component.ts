import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs'
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private cliente: Cliente;
  private clientes$: Observable<any[]>;
  private selectedFile: File = null;

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.cliente = new Cliente();
    this.clientes$ = this.clienteService.getClientes();
    // this.items = db.collection('items').valueChanges();
  }



}