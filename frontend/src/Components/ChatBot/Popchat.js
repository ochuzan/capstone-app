import React, { useState } from "react";
import "./Popchat.css";

function Popchat(props) {
  let hide = {
    display: "none",
  };
  let show = {
    display: "block",
  };

  const { messages } = props;

  const [chatopen, setChatopen] = useState(false);
  const toggle = (e) => {
    setChatopen(!chatopen);
  };

  return (
    <div id="chatCon">
      <div className="chat-box" style={chatopen ? show : hide}>
        <div className="header">Chat with me</div>
        <div className="msg-area">
            message area
          {/* {messages.map((msg, i) =>
            i % 2 ? (
              <p className="right">
                <span>{msg}</span>
              </p>
            ) : (
              <p className="left">
                <span>{msg}</span>
              </p>
            )
          )} */}
        </div>
        <div className="footer">
          <input type="text" />
          <button>
            <i className="fa fa-paper-plane">SEND</i>
          </button>
        </div>
      </div>
      <div className="pop">
        <p>
          <img
            onClick={toggle}
            src="https://p7.hiclipart.com/preview/151/758/442/iphone-imessage-messages-logo-computer-icons-message.jpg"
            alt=""
          />
        </p>
      </div>
    </div>
  );
}

export default Popchat;
