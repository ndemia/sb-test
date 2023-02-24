import './button.css';

export default function Button({ context, postsPerPage }) {
  let buttonText = '';

  switch (context) {
    case 'form':
      buttonText = 'Bericht aanmaken';
      break;
    case 'bloglist':
      buttonText = 'Meer laden';
      break;
    default:
      buttonText = 'Button';
      break;
  }

  return (
    <div className="button__wrapper">
      <button className="btn btn--primary">{buttonText}</button>
    </div>
  );
}
