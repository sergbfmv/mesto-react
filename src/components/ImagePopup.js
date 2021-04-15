function ImagePopup(props) {

  return (
    <section className={props.card  ? `popup popup_type_image popup_opened` : `popup popup_type_imaage`}>
      <div className="popup__wrap">
        <button className="popup__close-button popup__close-button_type_image" type="button" onClick={props.onClose}></button>
        <img src={props.card} alt="Фотография" className="popup__photo"/>
        <h2 className="popup__title-image">Название</h2>
      </div>
    </section>
  )
}

export default ImagePopup