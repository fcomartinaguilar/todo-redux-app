import { createAction, props } from "@ngrx/store";

export const crear = createAction(
  '[TODO] Crear Tarea',
  props<{texto: string}>()
);

export const toogle = createAction(
  '[TODO] Toogle Tarea',
  props<{id: number}>()
);

export const editar = createAction(
  '[TODO] Editar Tarea',
  props<{id: number, texto: string}>()
);

export const borrar = createAction(
  '[TODO] Borrar Tarea',
  props<{id: number}>()
);

export const toogleAll = createAction(
  '[TODO] ToogleAll Tarea',
  props<{completado: boolean}>()
);

export const limpiarTodos = createAction(
  '[TODO] LimpiarTodos Tarea'
);
