import './home.css';
import Form from '../Form/Form';
import Blog from '../Blog/Blog';

export default function Home() {
  return (
    <section className="home">
      <Form />
      <Blog postsPerPage="4" loadMoreButton="true" />
    </section>
  );
}
