import { useState, MouseEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useState<UserLogin>({
    email: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserLogin({
      ...userLogin,
      [e.target.name]: [e.target.value],
    });
  };

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate('/tasks/dashboard');
  };

  return (
    <form className="flex flex-col p-6 mt-6 gap-y-6">
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

export default LoginForm;
