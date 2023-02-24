import './form.css';
import { useState, useRef, useEffect } from 'react';
import useFetch from '../useFetch/useFetch';
import Button from '../Button/Button';

export default function Form() {
  const [title, setTitle] = useState('');
  const [category_id, setCategoryID] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState([]);
  const inputImage = useRef();
  const form = document.querySelector('.form');

  let categoriesList = useFetch('https://frontend-case-api.sbdev.nl/api', 'fetchCategories');
  categoriesList = categoriesList.data;

  useEffect(() => {
    categoriesList.forEach((category) => {
      document
        .querySelector('#categorie')
        .insertAdjacentHTML('afterbegin', `<option value="${category.id}" name="${category.name}">${category.name}</option>`);
    });
  }, [categoriesList]);

  function handleSubmit(e) {
    e.preventDefault();

    let blogpost = new FormData();
    blogpost.append('title', title);
    blogpost.append('content', content);
    blogpost.append('category_id', category_id);
    blogpost.append('image', image, image.name);

    fetch('https://frontend-case-api.sbdev.nl/api/posts', {
      method: 'POST',
      headers: {
        token: 'pj11daaQRz7zUIH56B9Z',
      },
      body: blogpost,
      redirect: 'follow',
    })
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));

    form.reset();
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="form__title">Plaats een blog bericht</h2>

      <fieldset className="form__group">
        <label htmlFor="berichtnaam" className="form__label">
          Berichtnaam
        </label>
        <input
          type="text"
          id="berichtnaam"
          name="berichtnaam"
          placeholder="Geen naam"
          className="form__input"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          required
        ></input>
      </fieldset>

      <fieldset className="form__group">
        <label htmlFor="categorie" className="form__label">
          Categorie
        </label>
        <select id="categorie" className="form__select" value={category_id} onChange={(e) => setCategoryID(e.target.value)} required>
          <option value="geen">Geen categorie</option>
        </select>
      </fieldset>

      <fieldset className="form__group">
        <label htmlFor="afbeelding" className="form__label form__label--file">
          Header afbeelding
        </label>
        <div className="form__input__wrapper">
          <button className="form__button--file" onClick={() => inputImage.current.click()}>
            Kies bestand
          </button>
          <input
            tabIndex="-1"
            type="file"
            id="afbeelding"
            name="afbeelding"
            accept="image/*"
            className="form__input form__input--file"
            ref={inputImage}
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          ></input>
          {image && <span className="form__filename">{image.name}</span>}
        </div>
      </fieldset>

      <fieldset className="form__group">
        <label htmlFor="bericht" className="form__label">
          Bericht
        </label>
        <textarea
          type="text"
          id="bericht"
          name="bericht"
          className="form__textarea"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          required
        ></textarea>
      </fieldset>

      <Button context="form" />
    </form>
  );
}
