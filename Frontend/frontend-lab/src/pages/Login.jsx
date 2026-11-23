import { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

export default function Login() {
  const { user, login } = useAuth();
  const location = useLocation();
  const [email, setEmail] = useState('');

  // Where the visitor was trying to go before being sent here (default: home).
  const from = location.state?.from?.pathname ?? '/';

  if (user) return <Navigate to={from} replace />;

  async function handleSubmit(event) {
    event.preventDefault();
    await login(email.trim());
  }

  return (
    <section>
      <h1>Login</h1>
      <p className="muted">This is a stub: any email works. A real backend arrives in Unit 2.</p>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <button type="submit">Log in</button>
      </form>
    </section>
  );
}
