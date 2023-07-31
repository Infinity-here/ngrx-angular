import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { InitialState } from '@ngrx/store/src/models';
import { ApidataService } from 'src/app/apidata.service';
import { Type1 } from 'src/app/interface/type';
import {
  addtask,
  donetask,
  edittask,
  removetask,
} from 'src/app/ngrx/data.actions';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css'],
})
export class ComponentComponent implements OnInit {
  show: boolean = false;

  tasktobedone!: string;
  users: any;
  todotasks: any;
  ngOnInit(): void {
    this.store
      .select((state) => {
        console.log(state);
        return state.tasks;
      })
      .subscribe(
        (tasks) => {
          this.todotasks = tasks;
        }
        // console.log(tasks, 'jb'));
      );
  }

  constructor(
    private data: ApidataService,
    private store: Store<{ tasks: Type1 }>
  ) {
    this.data.users().subscribe((data) => {
      this.users = data;
      this.users = this.users.slice(0, 10);
    });
  }
  addtasks() {
    const taskname = this.tasktobedone;

    this.store.dispatch(addtask({ taskname }));
    this.tasktobedone = '';
  }
  donetasks(e: number) {
    this.store.dispatch(donetask({ taskid: e }));
  }
  removetasks(e: number) {
    this.store.dispatch(removetask({ taskid: e }));
  }
  edittasks(e: number) {
    this.store.dispatch(edittask({ taskid: e }));
  }
}
