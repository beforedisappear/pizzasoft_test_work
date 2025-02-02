import { AsyncThunkAction } from '@reduxjs/toolkit';
import { DeepPartial } from '../utility-types';

import fetchMock, { type FetchMock } from 'jest-fetch-mock';

type ActionCreatorType<Return, Arg, RejectedValue> = (
  arg: Arg,
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: jest.MockedFn<any>;

  getState: () => RootState;

  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

  api: FetchMock;

  constructor(
    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>,
    state?: DeepPartial<RootState>,
  ) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn(() => state as RootState);

    this.api = fetchMock.mockOnce();
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(this.dispatch, this.getState, {
      api: this.api,
    });

    return result;
  }
}
