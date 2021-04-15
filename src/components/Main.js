import React from 'react'
import api from '../utils/Api'
import Card from '../components/Card'

function Main(props) {
  const [userName, setUserName] = React.useState()
  const [userDescription, setUserDescription] = React.useState()
  const [userAvatar, setUserAvatar] = React.useState()
  const [cards, setCards] = React.useState([])

  React.useEffect(() => {
    function renderUserInfo(name, description, avatar) {
      setUserName(name)
      setUserDescription(description)
      setUserAvatar(avatar)
    }
    api.getProfileInfo()
      .then((data) => {
        renderUserInfo(data.name, data.about, data.avatar)
      })
      .catch(err => Promise.reject(err))

      api.getInitialCards()
        .then((items) => {
          setCards(items)
        })
  }, [])

  return (
    <main>
    <section className="profile-columns">
      <div className="profile">
        <div className="profile__avatar" onClick={props.onEditAvatar} style={{ backgroundImage: `url(${userAvatar})` }}></div>
        <img src="<%=require('../images/edit.svg')%>" alt="Правка" className="profile__edit-icon"/>
        <div className="profile__info">
          <div className="profile__header">
            <h1 className="profile__title">{userName}</h1>
            <button type="button" className="profile__edit-button" aria-label="Редактировать" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
      </div>
      <button type="button" className="profile-columns__add-button" onClick={props.onAddPlace}></button>
    </section>
    <section className="elements">
      {cards.map((card) => {
        return(
          <Card card = {card} onCardClick = {props.onCardClick} />
      )})}
    </section>
  </main>
  )
}
export default Main