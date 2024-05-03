import ReactDOM from 'react-dom';

const Modal = ({ open, title, children, onSave, onClose, hasSave }) => {
  console.log(open)
  if (!open) {
    return <></>
  }

  const modalRoot = document.getElementById('root');

  return ReactDOM.createPortal(
    <div className="sk-modal">
      <article className="sk-modal-container">
        <header className="sk-modal-container-header">
          {title && (
            <h4 className="sk-modal-container-title">{title}</h4>
          )}
          <button className="sk-modal-icon-button" onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="none" d="M0 0h24v24H0z" />
              <path fill="currentColor" d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
            </svg>
          </button>
        </header>
        <section className="sk-modal-container-body">{children}</section>
        <footer className="sk-modal-container-footer">
          <button onClick={onClose} className="sk-button is-ghost">Close</button>
          {hasSave !== false && (
            <button onClick={onSave} className="sk-button is-primary">Ok</button>
          )}
        </footer>
      </article>
    </div>,
    modalRoot
  );
};

export default Modal;