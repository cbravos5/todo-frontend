import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import '../styles/user.css';

const LogIn: React.FC<RouteComponentProps<void>> = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLog = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    history.push('/');
  };

  return (
    <motion.div exit={{ opacity: 0 }} className="login-wrapper">
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
        Don't have an account yet?
        <Link to="/signup">
          <span>Sign Up</span>
        </Link>
      </h4>
    </motion.div>
  );
};

export default withRouter(LogIn);
