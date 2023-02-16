import { createReducer, on, Action } from '@ngrx/store';
import { setFiltro, filtrosValidos } from './filtro.actions';

// export const initialState: filtrosValidos = filtrosValidos.TODOS;
export const initialState: filtrosValidos = 'todos';

const _filtroReducer = createReducer<filtrosValidos, Action>(initialState,
  on(setFiltro, (state: filtrosValidos, {filtro}) => filtro ),

  );
  export function filtroReducer(state = initialState, action: Action) {
    return _filtroReducer(state, action);
  }
