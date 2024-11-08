import React, { useEffect, useRef, useState } from "react";
import { BiArrowBack, BiSend } from "react-icons/bi";
import { FiMic, FiSend } from "react-icons/fi";
import { VscSend } from "react-icons/vsc";
// import { FiEdit, FiLogOut, FiPlus } from "react-icons/fi";

const ChatBox = ({ open, closeAction, data }) => {
  const [allMessages, setAllMessages] = useState([]);
  const inputRef = useRef(null);
  const allMessagesRef = useRef(null);

  function sendMessage(msg) {
    if (msg.trim() == "") return;

    setAllMessages((pre) => [
      ...pre,
      {
        type: "send",
        msg: msg,
      },
    ]);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
    allMessagesRef.current.scrollTo({
      top: allMessagesRef.current.scrollHeight,
      behavior: "smooth",
    });

    setTimeout(() => {
      AIResponse(msg);
    }, 500);
  }

  function AIResponse(msg) {
    let reply = "";

    if (msg == "Hello") reply = "Hii! How can I assist you today?";
    if (msg == "How are you?") reply = "I am fine, and you?";
    if (msg == "Fine") reply = "Good";
    if (msg == "Good Morning") reply = "Good Morning, Have a great day.";
    if (msg == "Good Night") reply = "Good Night, Have sweet dreams.";
    if (msg == "What is your name?") reply = data.name;
    if (msg == "Bye") reply = "Bye, Catch you soon!";

    if (reply == "") return
    
    setAllMessages((pre) => [
      ...pre,
      {
        type: "received",
        msg: reply,
      },
    ]);
  }

  if (open)
    return (
      <section className="chat-box">
        <div className="action-bar">
          <span className="close-ic" onClick={closeAction}>
            <BiArrowBack />
          </span>
          <img src={data.image} alt="" />
          <div className="user-summary">
            <h1 className="title">{data.name}</h1>
            <p className="status">{data.status}</p>
          </div>
        </div>

        <div className="all-msg" ref={allMessagesRef}>
          {allMessages.map((item, index) => (
            <div className={`msg ${item.type}`} key={index}>
              <p className="txt">{item.msg}</p>
            </div>
          ))}
        </div>

        <div className="bottom-action-bar">
          <div className="msg-input">
            <input
              type="text"
              placeholder="Type..."
              ref={inputRef}
              onKeyDownCapture={(e) => {
                if (e.key == "Enter") sendMessage(inputRef.current.value);
              }}
            />
            <ul>
              <li>
                <FiMic />
              </li>
            </ul>
            <button
              className="send-btn"
              onClick={() => sendMessage(inputRef.current.value)}
            >
              <VscSend />
            </button>
          </div>
        </div>
      </section>
    );
};

export default ChatBox;
