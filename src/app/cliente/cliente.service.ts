import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire'
import { Cliente } from './cliente.model';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  constructor(private firestore: AngularFireDatabase) { }

  ngOnInit() {
  }

  //FireBase
  getClientes() {
    //return this.firestore.collection<Cliente[]>('clientes').snapshotChanges();
    //return this.firestore.collection<Cliente[]>('clientes').valueChanges();
    return this.firestore.list('clientes').valueChanges();
  }

  addCliente(cliente: Cliente) {
    let c = Object.assign({}, cliente)
    return this.firestore.list('clientes').push(c);
  }

  updateCliente(cliente: Cliente, id: number) {
    delete cliente.id;
    //this.firestore.doc('clientes/' + id).update(cliente);
    this.firestore.object('clientes/' + id).update(cliente);
  }

  deleteCliente(cliente: Cliente) {
    //this.firestore.doc('clientes/' + cliente.id).delete();
    this.firestore.object('clientes/' + cliente.id).remove();
  }

};