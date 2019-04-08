import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { Cliente } from './cliente.model';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  constructor(
    private db: AngularFireDatabase,
    private firestore: AngularFirestore,
    ) { }

  ngOnInit() {
  }

  //FireBase
  getClientes() {
    //return this.firestore.collection<Cliente[]>('clientes').snapshotChanges();
    //return this.firestore.collection<Cliente[]>('clientes').valueChanges();
    return this.db.list('clientes').valueChanges();
  }

  addCliente(cliente: Cliente) {
    let c = Object.assign({}, cliente)
    return this.db.list('clientes').push(c);
  }

  updateCliente(cliente: Cliente, id: number) {
    delete cliente.id;
    //this.firestore.doc('clientes/' + id).update(cliente);
    this.db.object('clientes/' + id).update(cliente);
  }

  deleteCliente(cliente: Cliente) {
    //this.firestore.doc('clientes/' + cliente.id).delete();
    this.db.object('clientes/' + cliente.id).remove();
  }

};