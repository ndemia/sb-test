import './blogpost.css';

export default function Blogpost(blog) {
  let blogpost = blog.blog;
  let blogpostDate = new Date(blogpost.created_at);
  const storageURL = `https://frontend-case-api.sbdev.nl/storage/`;

  function generateReadableDate() {
    let readableDate = blogpostDate.toISOString().slice(0, 10).split('-').reverse().join('-');
    return readableDate;
  }

  return (
    <article className="blogpost">
      <header className="blogpost__header">
        <figure className="blogpost__figure">
          <img src={storageURL + blogpost.img_url} className="blogpost__image" alt=""></img>
        </figure>
        <div className="blogpost__info">
          <span className="blogpost__date">{generateReadableDate()}</span>
          <span className="blogpost__category">{blogpost.category.name}</span>
        </div>
      </header>
      <div className="blogpost__body">
        <h2 className="blogpost__title">{blogpost.title}</h2>
        <p className="blogpost__text">{blogpost.content}</p>
      </div>
    </article>
  );
}
