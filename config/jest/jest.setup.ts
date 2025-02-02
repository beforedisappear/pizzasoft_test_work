import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

window.console = {
  ...window.console,
  error: jest.fn(),
};
