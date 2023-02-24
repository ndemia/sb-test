import './blog.css';
import Bloglist from '../Bloglist/Bloglist';
import Button from '../Button/Button';
import BlogPagination from '../BlogPagination/BlogPagination';
import Loading from '../Loading/Loading';
import useFetch from '../useFetch/useFetch';

export default function Blog({ postsPerPage, loadMoreButton }) {
  // Convert to a number since it arrives as a string
  postsPerPage = Number(postsPerPage);
  let { data: blogs, isPending, error } = useFetch('https://frontend-case-api.sbdev.nl/api', 'fetchBlogposts', postsPerPage);
  blogs = blogs.data;

  return (
    <main className="blog">
      {error && <div>{error}</div>}
      {isPending && <Loading />}
      {blogs && <Bloglist blogs={blogs} loadMoreButton={loadMoreButton} postsPerPage={postsPerPage} />}
      {loadMoreButton ? <Button context="bloglist" postsPerPage={postsPerPage} /> : <BlogPagination />}
    </main>
  );
}
