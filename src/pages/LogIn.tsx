import { useState } from 'react';
import '../styles/user.css';

const LogIn: React.FC<Record<string, never>> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLog = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="login-wrapper">
      <h1 className="presentation">Log in and start to manage your ToDos</h1>
      <form action="log" onSubmit={handleLog} className="form-login">
        <div>
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-secondary" type="submit">
          Log In
        </button>
      </form>
      <h4 className="signup">
        Don't have an account yet? <a href="#">Sign Up</a>
      </h4>
    </div>
  );
};

export default LogIn;
