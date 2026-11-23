import { Link, useParams } from 'react-router-dom';
import { USERS } from '../data/users.js';

export default function UserDetail() {
  const { id } = useParams();
  const user = USERS.find((u) => String(u.id) === id);

  if (!user) {
    return (
      <section>
        <h1>User not found</h1>
        <p>There is no user with id {id}.</p>
        <Link to="/users">Back to users</Link>
      </section>
    );
  }

  return (
    <section>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>City: {user.city}</p>
      <p>Role: {user.role}</p>
      <Link to="/users">Back to users</Link>
    </section>
  );
}
