import { createAction, props } from '@ngrx/store';
import { Type1 } from '../interface/type';

export const addtask = createAction(
  '[Todo Task] addtask',
  props<{ taskname: string }>()
);
export const donetask = createAction(
  '[Todo Task] donetask',
  props<{ taskid: number }>()
);
export const removetask = createAction(
  '[Todo Task] removetask',
  props<{ taskid: number }>()
);
export const edittask = createAction(
  '[Todo Task] edittask',
  props<{ taskid: number }>()
);
