import React, { Component } from "react";
import MessageForm from './MessageForm';

class Contact extends Component {
  render() {
    return (
      <section id="three">
        <h2>Get In Touch</h2>
        <div className="row">
          {/* <div className="8u 12u$(small)">
            <MessageForm />
          </div> */}
          <div className="4u 12u$(small)">
            <ul className="labeled-icons">
              {/* <li>
                <h3 className="icon fa-home">
                  <span className="label">Address</span>
                </h3>
                Somewhere
                <br />
                near Seattle, WA
                <br />
                United States
                <br/>
              </li> */}
              <li>
                <h3 className="icon fa-twitter">
                  <span className="label">Twitter</span>
                </h3>
                <a href="https://twitter.com/tiagosomda/" target="_blank">twitter.com/tiagosomda</a>
              </li>
              <li>
                <h3 className="icon fa-envelope-o">
                  <span className="label">Email</span>
                </h3>
                <a href="mailto:hello@unfoldingdragon.com">hello@unfoldingdragon.com</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
