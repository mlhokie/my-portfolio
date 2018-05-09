import React from 'react';

class ExampleWorkModal extends React.Component {
  render() {
    let example = this.props.example;
    let modalClass = this.props.open ? 'modal--open' : 'modal--closed';

    return (
      <div className={"background--skyBlue " + modalClass}>
        <span className="color--cloud modal__closeButton"
          onClick={this.props.closeModal}>
          <i className="fa fa-window-close-o"></i>
        </span>
        <img alt={ example.image.desc }
             className="modal__image"
             src={ example.image.src }/>
        <div className="color--cloud modal__text">
          <h2 className="modal__title">
            { example.title }
          </h2>
          <a className="color--skyBlue modal__link"
             href={ example.href }>
            Click for Resume
          </a>
            {( typeof example.desc == 'object') ? example.desc.map((desc, i) => {
              return (<p className="modal__description bubble" key={`${i}-paragraph`}>
                <span>{ desc }</span>
              </p>)
            }) : (<p className="modal__description bubble"><span>{example.desc}</span></p>)}

          <ul className="cert-images">
          { (example.descriptionImages !== undefined)
            ? example.descriptionImages.map((image, i) => {
              return (<li key={i}>
                  <img src={image} />
                </li>)
            }) : null
          }

          </ul>
        </div>
      </div>
    )
  };
};

export default ExampleWorkModal;
