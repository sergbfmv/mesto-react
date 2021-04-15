function Card(props) {
  function handleClick() {
    props.onCardClick(props.card.link);
  }  

    return(
    <div className="element">
    <button type="button" className="element__delete-button"></button>
    <div src="#" alt="Фотография" className="element__photo" style={{ backgroundImage: `url(${props.card.link})`}} onClick={handleClick}></div>
    <div className="element__label">
      <h2 className="element__title">{props.card.name}</h2>
      <div className="element__like">
        <button type="button" className="element__like-button"></button>
        <p className="element__like-counter">{props.card.likes.length}</p>
      </div>
    </div>
  </div>
)}

export default Card