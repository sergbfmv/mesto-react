function PopupWithForm(props) {
  return(
    <section className={props.isOpen ? `popup popup_type_${props.name} popup_opened` : `popup popup_type_${props.name}`}>
    <div className="popup__container">
      <button className={`popup__close-button popup__close-button_type_${props.name}`} type="button" onClick={props.onClose}></button>
      <h2 className="popup__title">{props.title}</h2>
      <form className={`popup__form popup__form_type_${props.name}`} name={props.name} novalidate>
        {props.children}
      </form>
    </div>
  </section>
  )
}

export default PopupWithForm