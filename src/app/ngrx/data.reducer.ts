import { createReducer, on } from '@ngrx/store';
import { initialstate } from './data.state';
import { addtask, donetask, edittask, removetask } from './data.actions';
import { state } from '@angular/animations';
import { Type1 } from '../interface/type';
import { compileNgModule } from '@angular/compiler';

export const taskreducer = createReducer(
  initialstate,
  on(addtask, (state, payload): Type1[] => {
    const task: Type1 = {
      id: state.length + 1, // Use the current state's length as the new task's ID
      name: payload.taskname,
      status: false,
    };
    return [...state, task];
  }),
  on(donetask, (state, payload): any => {
    state = state.map((obj) => {
      if (obj.id === payload.taskid) {
        return { ...obj, status: true };
      }
      return obj;
    });
    return state;
  }),

  on(removetask, (state, payload): any => {
    state = state.filter((e) => {
      return e.id != payload.taskid;
    });
    console.log(state);
    return state;
  }),
  on(edittask, (state, payload): any => {
    state = state.map((obj) => {
      if (obj.id === payload.taskid) {
        obj = { ...obj, name: '' };
      }
      return obj;
    });
    return state;
  })
);
