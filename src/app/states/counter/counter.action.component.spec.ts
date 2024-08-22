import * as CounterActions from '../counter/counter.action';


describe('Counter Actions', () => {
  it('should create an increment action', () => {
    const action = CounterActions.increment();
    expect(action).toEqual({ type: CounterActions.INCREMENT });
  });

  it('should create a decrement action', () => {
    const action = CounterActions.decrement();
    expect(action).toEqual({ type: CounterActions.DECREMENT });
  });

  it('should create a reset action', () => {
    const action = CounterActions.reset();
    expect(action).toEqual({ type: CounterActions.RESET });
  });

  it('should create a setCount action with a count', () => {
    const count = 10;
    const action = CounterActions.setCount({ count });
    expect(action).toEqual({
      type: CounterActions.SET_COUNT,
      count,
    });
  });

  it('should create an incrementBy action with an amount', () => {
    const amount = 5;
    const action = CounterActions.incrementBy({ amount });
    expect(action).toEqual({
      type: CounterActions.INCREMENT_BY,
      amount,
    });
  });

  it('should create a decrementBy action with an amount', () => {
    const amount = 3;
    const action = CounterActions.decrementBy({ amount });
    expect(action).toEqual({
      type: CounterActions.DECREMENT_BY,
      amount,
    });
  });

  it('should create a multiply action with a factor', () => {
    const factor = 2;
    const action = CounterActions.multiply({ factor });
    expect(action).toEqual({
      type: CounterActions.MULTIPLY,
      factor,
    });
  });
});
