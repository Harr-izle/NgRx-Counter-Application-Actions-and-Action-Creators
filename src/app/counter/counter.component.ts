import { initialCounterState } from './../states/counter/counter.reducer';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppState } from '../states/app.state';
import { selectCount } from '../states/counter/counter.selector';
import { increment, decrement, reset, setCount, incrementBy, decrementBy, multiply } from '../states/counter/counter.action';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AsyncPipe, FormsModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count$: Observable<number>;
  initialCount!: number;

  constructor(private store: Store<AppState>) {
    this.count$ = this.store.select(selectCount);
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
    this.initialCount = 0;
  }
  onSetCount() {
    this.store.dispatch(setCount({ count: this.initialCount }));
  }

  onIncrementBy() {
    this.store.dispatch(incrementBy({ amount: this.initialCount }));
  }

  onDecrementBy() {
    this.store.dispatch(decrementBy({ amount: this.initialCount }));
  }

  onMultiply() {
    this.store.dispatch(multiply({ factor: this.initialCount }));
  }
}