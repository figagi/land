import { Route, Routes, Link, Outlet } from 'react-router-dom';


export default function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the about!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}