import { Component } from '@angular/core';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import * as actions  from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent {
  completado: boolean = false;

  constructor(
    private store: Store<AppState>
  ){

  }

  toogleAll() {
    this.completado = !this.completado;
    this.store.dispatch( actions.toogleAll({ completado: this.completado }));
  }
}
