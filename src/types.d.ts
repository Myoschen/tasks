// utility types
type Nullable<T> = T | null;

// function
declare function assertIsError(error: unknown): asserts error is Error {
  // if you have nodejs assert:
  // assert(error instanceof Error);
  // otherwise
  if (!(error instanceof Error)) {
    throw error;
  }
}

// interface

interface ITask {
  id: string;
  content: string;
  completed: boolean;
}

interface IUser {
  username: string;
  email: string;
  emailVerified: boolean;
  password: string;
  photoURL: string;
  creationTime: string;
}

// redux state
interface UserState {
  status: 'loading' | 'success' | 'error' | undefined;
  user: Omit<IUser, 'password'> | undefined;
  message: string | undefined;
}

interface TaskState {
  taskList: ARray<ITask>;
}

type UserLoginOrRegister = Pick<IUser, 'username' | 'email' | 'password'>;
