import { createAction, props } from "@ngrx/store";

export type filtrosValidos = 'todos' | 'completados' | 'pendientes';

// export enum filtrosValidos {
//   TODOS = 'todos',
//   COMPLETADOS = 'completados',
//   PENDIENTES = 'pendientes'
// }

export const setFiltro = createAction(
  '[Filtro] Set Filtro',
  props<{filtro: filtrosValidos}>()
);

