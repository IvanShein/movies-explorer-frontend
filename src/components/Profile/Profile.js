import React, { useEffect, useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import HeaderNavigation from '../Header/HeaderNavigation/HeaderNavigation';
import useFormWithValidation from '../../utils/FormValidation';
// import Footer from '../Footer/Footer';
import './Profile.css';

function Profile(props) {
  const currentUser = useContext(CurrentUserContext);
  const { values, errors, handleChange, isFormValid, resetForm } = useFormWithValidation();

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser);
    }
  }, [currentUser, resetForm]);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("хэндлсабмит в профайл 1: ", values);
    if ((currentUser.name === values.name) && (currentUser.email === values.email)) {
      console.log("хэндлсабмит в профайл ретурн: ", values);
      return;
    }
    else {
      console.log("хэндлсабмит в профайл ОК: ", values);
      props.handleUpdateUserData(values);
    } 
  };
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   console.log("хэндлсабмит в профайл 1: ", values);
  //   props.handleUpdateUserData(values);
  // };

  return (
    <div className="body">
      <Header color={"white"} child={<HeaderNavigation />} />
      <main className="profile">
        <div className="profile__content">
          <h2 className="profile__title">Привет, {currentUser.name}!</h2>
          <form
            className="profile__list"
            onSubmit={handleSubmit}
          >
            <fieldset className="profile__list-element">
              <span className="profile__element">Имя</span>
              <input
                className="profile__input profile__input_type_name"
                type="text"
                name="name"
                required
                minLength="2"
                maxLength="30"
                placeholder="Имя"
                value={values.name}
                onChange={handleChange}
              />
            </fieldset>
            <span className="profile__error">{errors.name}</span>

            <fieldset className="profile__list-element">
              <span className="profile__element">E-mail</span>
              <input
                className="profile__input profile__input_type_email"
                name="email"
                type="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
              />
            </fieldset>
            <span className="profile__error">{errors.email}</span>

            <button
              type="submit"
              className={`${!isFormValid ? "form-inactive" : ""} profile__button profile__button_update-user-data link-decoration`}
              disabled={!isFormValid ? true : false}
            >
              Редактировать
            </button>
          </form>

          <button
            type="button"
            className="profile__button profile__button_sign-out link-decoration"
            onClick={props.handleSignOut}
          >
            Выйти из аккаунта
          </button>
        </div>
      </main>
    </div>


  );
}

export default Profile;



