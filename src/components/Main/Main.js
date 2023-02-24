import './main.css';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Blog from '../Blog/Blog';

export default function Main() {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog postsPerPage="8" />} />
      </Routes>
    </main>
  );
}
