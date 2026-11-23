import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section>
      <h1>King's World</h1>
      <p>Welcome to the world of Kush where every dream becomes a reality. Explore the wonders of this magical place.</p>
      <Link to="/users">See the users</Link>
    </section>
  );
}
