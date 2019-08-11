import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <section id="three">
        <h2>Get In Touch</h2>
        <p>
          Accumsan pellentesque commodo blandit enim arcu non at amet id arcu
          magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem
          vulputate lorem neque lorem ipsum dolor.
        </p>
        <div className="row">
          <div className="8u 12u$(small)">
            <form method="post" action="#">
              <div className="row uniform 50%">
                <div className="6u 12u$(xsmall)">
                  <input type="text" name="name" id="name" placeholder="Name" />
                </div>
                <div className="6u 12u$(xsmall)">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="12u">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Message"
                    rows="4"
                  ></textarea>
                </div>
              </div>
            </form>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" />
              </li>
            </ul>
          </div>
          <div className="4u 12u$(small)">
            <ul className="labeled-icons">
              <li>
                <h3 className="icon fa-home">
                  <span className="label">Address</span>
                </h3>
                Somewhere
                <br />
                near Seattle, WA
                <br />
                United States
                <br/>
              </li>
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
                <a href="#">hello@unfoldingdragon.com</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
