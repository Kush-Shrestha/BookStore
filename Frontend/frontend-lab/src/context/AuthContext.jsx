import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // TODO Unit 2: replace with POST /auth/login on users-api
  const login = async (email) => setUser({ id: 1, name: email.split('@')[0], email });
  const logout = () => setUser(null);

  return <AuthContext value={{ user, login, logout }}>{children}</AuthContext>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside <AuthProvider>');
  return ctx;
}
