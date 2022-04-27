interface Task {
  id: string;
  content: string;
  completed: boolean;
}

interface UserLogin {
  email: string;
  password: string;
}

interface UserSignUp {
  username: string;
  email: string;
  password: string;
}
