import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Cliente } from './cliente.model';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
  }

  //FireBase
  getClientes() {
    return this.firestore.collection('clientes').snapshotChanges();
  }

  addCliente(cliente: Cliente) {
    return this.firestore.collection('clientes').add(cliente);
  }

  updateCliente(cliente: Cliente, id: number) {
    delete cliente.id;
    this.firestore.doc('clientes/' + id).update(cliente);
  }

  deleteCliente(cliente: Cliente) {
    this.firestore.doc('clientes/' + cliente.id).delete();
  }
};