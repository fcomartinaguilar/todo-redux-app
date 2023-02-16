import { createReducer, on, Action } from '@ngrx/store';
import { crear, toogle, editar, borrar, toogleAll, limpiarTodos } from './todo.actions';
import { Todo } from './models/todo.model';

export const estadoInicial: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Vencer a Thanos'),
  new Todo('Comprar traje de IronMan'),
  new Todo('Robar escudo de Capitan America'),
];

const _todoReducer = createReducer(
  estadoInicial,
  on(crear, (state, {texto}) => [...state, new Todo( texto )]),
  on(toogle, (state, {id}) => {
    return state.map( todo => {
      if (todo.id === id ) {
        return {
          ...todo,
          completado: !todo.completado
        }
      }
      else {
        return todo;
      }
    } );
  }),
  on(editar, (state, {id, texto}) => {
    return state.map( todo => {
      if (todo.id === id ) {
        return {
          ...todo,
          texto: texto
        }
      }
      else {
        return todo;
      }
    } );
  }),
  on(borrar, (state, {id}) => state.filter( todo => todo.id != id ) ),
  on(toogleAll, (state, {completado}) => {
    return state.map( todo => {
      if (todo.completado !== completado) {
        return {
          ...todo,
          completado: completado
        }
      }
      else {
        return todo;
      }
    })

  }),
  on(limpiarTodos, (state) => state.filter( todo => !todo.completado ))

);

export function todoReducer(state: Todo[]=estadoInicial, action: Action) {
  return _todoReducer(state, action);
}
