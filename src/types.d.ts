interface Task {
  id: string;
  content: string;
  completed: boolean;
}

interface IUser {
  username: string;
  email: string;
  password: string;
}

declare function assertIsError(error: unknown): asserts error is Error {
  // if you have nodejs assert:
  // assert(error instanceof Error);
  // otherwise
  if (!(error instanceof Error)) {
    throw error;
  }
}

type RemoveReadOnlyProperty<T> = {
  -readonly [K in keyof T]: T[K];
};
