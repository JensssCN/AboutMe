import React from "react";
import "./Contact.css";
import { connect } from "react-redux";

function Contact({ selectedFont }) {
  return (
    <div className={`font-${selectedFont}`}>
      <article className="ContactMeApp">
        <div className="MySocials">
          <h2>
            My <span>Socials</span>
          </h2>
          <p>
            <span className="SpanSocial">Adress:</span> _ Lorem Ipsum v. 23, 809
            15 Sthlm
          </p>
          <p>
            <span className="SpanSocial">Tel Nr:</span> _ 070 234 56 78
          </p>
          <p>
            <span className="SpanSocial">Mail:</span> _ J.Javasson@gmail.com
          </p>
          <p>
            <span className="SpanSocial">Insta:</span> _ @Je.Lorem
          </p>
          <p>
            <span className="SpanSocial">Facebook:</span> _ Je Ipsum
          </p>
        </div>
        <div className="ContactMe">
          <h2>
            Contact <span>Me</span>
          </h2>
          <form action="/submit">
            <input
              className="InputName"
              type="text"
              name="username"
              required
              placeholder="Name"
            ></input>{" "}
            <br />
            <input
              className="InputMail"
              type="text"
              name="mail"
              required
              placeholder="Mail"
            ></input>{" "}
            <br />
            <textarea
              name="textarea"
              cols="40"
              rows="6"
              placeholder="Message"
            ></textarea>
            <br />
            <button className="Submit">SUBMIT</button>
          </form>
        </div>
      </article>
    </div>
  );
}

const mapStateToProps = (state) => ({
  selectedFont: state.selectedFont,
});

export default connect(mapStateToProps)(Contact);
