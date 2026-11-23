import { useEffect, useState } from 'react';
import UserCard from '../components/UserCard.jsx';
import { USERS } from '../data/users.js';
import { useLocalStorage } from '../hooks/useLocalStorage.js';

export default function Users() {
  const [search, setSearch] = useLocalStorage('users-search', '');
  const [width, setWidth] = useState(window.innerWidth);

  // Effect with cleanup: listen for window resizes while this page is on screen.
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    console.log('resize listener ADDED');

    return () => {
      window.removeEventListener('resize', onResize); // cleanup: runs when the page unmounts
      console.log('resize listener REMOVED');
    };
  }, []);

  const needle = search.trim().toLowerCase();
  const shown = USERS.filter((u) => `${u.name} ${u.email}`.toLowerCase().includes(needle));

  return (
    <section>
      <h1>Users</h1>
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by name or email"
        aria-label="Search users"
      />
      <p className="muted">
        Showing {shown.length} of {USERS.length} | viewport width: {width}px
      </p>
      {shown.length === 0 ? (
        <p>No users match your search.</p>
      ) : (
        <ul className="cards">
          {shown.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </ul>
      )}
    </section>
  );
}
