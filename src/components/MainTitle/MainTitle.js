import './maintitle.css';

export default function MainTitle({ title }) {
  return (
    <div className="title-wrapper">
      <h1 className="header__title">{title}</h1>
    </div>
  );
}
