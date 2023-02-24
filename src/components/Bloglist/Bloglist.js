import './bloglist.css';
import Blogpost from '../Blogpost/Blogpost';

export default function Bloglist(blogs) {
  let blogpostsArray = blogs.blogs;

  return (
    <div className="bloglist">
      {blogpostsArray.map((blog) => (
        <Blogpost blog={blog} key={blog.id} />
      ))}
    </div>
  );
}
