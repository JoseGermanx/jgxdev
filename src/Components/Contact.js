import React, { Component } from 'react';


class Contact extends Component {
  render() {
    if(this.props.data){
   var name = this.props.data.name;
   var street = this.props.data.address.street;
   var city = this.props.data.address.city;
   var state = this.props.data.address.state;
   var zip = this.props.data.address.zip;
   var phone = this.props.data.phone;
   var email = this.props.data.email;
 }
    return (
      <section id="contact">
        <div className="row section-head">
           <div className="two columns header-col">
              <h1><span>Mantente en contacto.</span></h1>
           </div>
           <div className="ten columns">
                 <p className="lead">Puedes dejarme un mensaje con tu consulta.
                 </p>
           </div>
        </div>
        <div className="row">
           <div className="eight columns">
              <form action="" method="post" id="contactForm" name="contactForm">
                   <fieldset>
                           <div>
                        <label htmlFor="contactName">Nombre<span className="required">*</span></label>
                        <input type="text" value="" size="35" id="contactName" name="contactName" />
                           </div>
                           <div>
                        <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                        <input type="text" value="" size="35" id="contactEmail" name="contactEmail" />
                           </div>
                           <div>
                        <label htmlFor="contactSubject">Asunto</label>
                        <input type="text" value="" size="35" id="contactSubject" name="contactSubject" />
                           </div>
                           <div>
                              <label htmlFor="contactMessage">Mensaje <span className="required">*</span></label>
                              <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                           </div>
                           <div>
                              <button className="submit">Enviar</button>
                              <span id="image-loader">
                                 <img alt="" src="images/loader.gif" />
                              </span>
                           </div>
                   </fieldset>
          </form>
              <div id="message-warning">Ocurrió un error!!</div>
          <div id="message-success">
                 <i className="fa fa-check"></i>Tu mensaje ha sido enviado, gracias!<br />
          </div>
           </div>
     <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
            <h4>Dirección y teléfono</h4>
            <p className="address">
              {name}<br />
              {street} <br />
              {city}, {state} {zip}<br />
              <span>{phone}</span>
            </p>
          </div>
              {/* <div className="widget widget_tweets">
                 <h4 className="widget-title">Últimos tweets</h4>
                 <ul id="twitter">
                    <li>
                       <span>
                      User experience iPhone pivot growth hacking technology focus low hanging
                      </span>
                    </li>
                    <li>
                       <span>
                       market learning curve release ecosystem fruit non-disclosure agreement branding .
                     </span>
                    </li>
                 </ul>
            </div> */}
           </aside>
     </div>

  </section>
    );
  }
}

export default Contact;
