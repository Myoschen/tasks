function LoginForm() {
  return (
    <form className="flex flex-col p-6 mt-6 gap-y-6">
      <label htmlFor="email">
        Email
        <input className="ml-4" type="email" name="email" placeholder="Your email" />
      </label>
      <label htmlFor="password">
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default LoginForm;
