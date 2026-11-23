import { Link } from 'react-router-dom';

export default function UserCard({ user }) {
  return (
    <li className="card">
      <Link to={`/users/${user.id}`}>{user.name}</Link>
      <span className="muted">{user.email}</span>
      <span className="badge">{user.role}</span>
    </li>
  );
}
