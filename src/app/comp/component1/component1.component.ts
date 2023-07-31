import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Type1 } from 'src/app/interface/type';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css'],
})
export class Component1Component implements OnInit {
  tododonetasks: any;
  constructor(private store: Store<{ tasks: Type1 }>) {}

  ngOnInit(): void {
    this.store
      .select((state) => {
        return state.tasks;
      })
      .subscribe((tasks) => {
        this.tododonetasks = tasks;
      });
  }
}
