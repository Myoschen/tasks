import { useState, MouseEvent, ChangeEvent } from 'react';

function SignUpForm() {
  const [userSignUp, setUserSignUp] = useState<UserSignUp>({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserSignUp({
      ...userSignUp,
      [e.target.name]: [e.target.value],
    });
  };

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <form className="flex flex-col p-6 mt-6 gap-y-6">
      <label className="form-label" htmlFor="username">
        <span>Username</span>
        <input id="username" className="form-input" type="text" name="username" onChange={handleChange} />
      </label>

      <label className="form-label" htmlFor="email">
        <span>Email</span>
        <input id="email" className="form-input" type="email" name="email" onChange={handleChange} />
      </label>

      <label className="form-label" htmlFor="password">
        <span>Password</span>
        <input id="password" className="form-input" type="password" name="password" onChange={handleChange} />
      </label>

      <button className="mt-2 button" type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default SignUpForm;
