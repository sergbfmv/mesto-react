import React from 'react'
import '../index.css'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'

function App() {
  const [isEditProfilePopupOpen, setProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setAvatarPopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState()

  function handleEditAvatarClick() {
    setAvatarPopupOpen(!isEditAvatarPopupOpen)
  }

  function handleEditProfileClick() {
    setProfilePopupOpen(!isEditProfilePopupOpen)
  }

  function handleAddPlaceClick() {
    setPlacePopupOpen(!isAddPlacePopupOpen)
  }

  function handleCardClick(card) {
    setSelectedCard(card)
  }  

  function closeAllPopups() {
    document.querySelector('.popup').classList.remove('popup_opened')
    setAvatarPopupOpen(false)
    setProfilePopupOpen(false)
    setPlacePopupOpen(false)
    setSelectedCard()
  }
  return (
    <>
  <div className="page">
  <Header />
  <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
  <Footer />
  <PopupWithForm isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} name="edit" title="Редактировать профиль" >
    <label className="popup__form-field">
      <input required id="name-input" type="text" name="name" placeholder="Жак-Ив Кусто" className="popup__placeholder popup__placeholder_type_name" minlength="2" maxlength="40"/>
      <span className="name-input-error popup__placeholder-error"></span>
    </label>
    <label className="popup__form-field">
      <input required id="info-input" type="text" name="info" placeholder="Исследователь океана" className="popup__placeholder popup__placeholder_type_info" minlength="2" maxlength="200"/>
      <span className="info-input-error popup__placeholder-error"></span>
    </label>
    <button type="submit" name="save" className="popup__save-button">Сохранить</button>
  </PopupWithForm>
  <PopupWithForm isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} name="add" title="Новое место">
    <label className="popup__form-field">
      <input required id="place-input" type="text" name="name" placeholder="Название" className="popup__placeholder popup__placeholder_type_title" minlength="2" maxlength="30"/>
      <span className="place-input-error popup__placeholder-error"></span>
    </label>
    <label className="popup__form-field">
      <input required id="link-input" type="url" name="link" placeholder="Ссылка на картинку" className="popup__placeholder popup__placeholder_type_link"/>
      <span className="link-input-error popup__placeholder-error"></span>
    </label>
    <button type="submit" name="save" className="popup__save-button">Создать</button>
  </PopupWithForm>
  <PopupWithForm isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} name="edit-avatar" title="Обновить аватар">
    <label className="popup__form-field">
      <input required id="place-avatar-input" type="url" name="link" placeholder="Ссылка на аватар" className="popup__placeholder popup__placeholder_type_avatar-link" minlength="2" maxlength="200"/>
      <span className="place-avatar-input-error popup__placeholder-error"></span>
    </label>
    <button type="submit" name="save" className="popup__save-button">Сохранить</button>
  </PopupWithForm>
  <ImagePopup card = {selectedCard} onClose = {closeAllPopups}/>
  </div>
    </>
  );
}

export default App;
