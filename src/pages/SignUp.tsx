import { useState } from 'react';
import '../styles/user.css';

const SignUp: React.FC<Record<string, never>> = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    name: '',
    password: '',
    passwordConfirmation: '',
  });

  const handleSign = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <div className="login-wrapper">
      <h1 className="presentation">Create Account</h1>
      <form action="signup" onSubmit={handleSign} className="form-login">
        <div>
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={(e) =>
              setFormValues({ ...formValues, email: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label htmlFor="name">name</label>
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={(e) =>
              setFormValues({ ...formValues, name: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            value={formValues.password}
            onChange={(e) =>
              setFormValues({ ...formValues, password: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label htmlFor="passwordConfirmation">password confirmation</label>
          <input
            type="password"
            name="passwordConfirmation"
            value={formValues.passwordConfirmation}
            onChange={(e) =>
              setFormValues({
                ...formValues,
                passwordConfirmation: e.target.value,
              })
            }
            required
          />
        </div>
        <button className="btn btn-secondary" type="submit">
          Log In
        </button>
      </form>
      <h4 className="signup">
        Already have an account? <a href="#">Log in</a>
      </h4>
    </div>
  );
};

export default SignUp;
