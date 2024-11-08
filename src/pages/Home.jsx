import React, { useState } from "react";
import { FiEdit, FiLogOut, FiMoon, FiPlus, FiSun } from "react-icons/fi";

const Home = ({ openDMAction }) => {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    document.body.classList.toggle("dark-scheme");
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <section className="main">
      <div className="header">
        <div className="info">
          <img src="/pfp.jpeg" alt="" />
          <div className="user-summary">
            <h1 className="title">Krishan</h1>
            <p className="bio">example@gmail.com</p>
          </div>
          <div className="theme-change-section">
            <span className="theme-icon" onClick={toggleTheme}>
              {theme === "light" ? <FiSun /> : <FiMoon />}
            </span>
          </div>
        </div>

        <div className="actions">
          <div className="action edit">
            <span>
              <FiEdit />
            </span>
            <p className="title">Edit</p>
          </div>

          <div className="action">
            <span>
              <FiPlus />
            </span>
            <p className="title">New Chat</p>
          </div>

          <div className="action dangerous">
            <span>
              <FiLogOut />
            </span>
            <p className="title">LogOut</p>
          </div>
        </div>
      </div>

      <div class="dm-list">
        <div
          class="dm"
          onClick={() =>
            openDMAction({
              name: "Harry",
              username: "harry",
              status: "Offline",
              image: "/user1.jpeg",
            })
          }
        >
          <div class="left">
            <img src="/user1.jpeg" alt="loading..." />
            <div className="detail">
              <h1 class="username">Harry</h1>
              <p className="last-msg received unseen">
                Hello Bro, I Have A Question
              </p>
            </div>
          </div>
          <div class="right">
            <p className="unseen-msg-count">4</p>
          </div>
        </div>

        <div
          class="dm"
          onClick={() =>
            openDMAction({
              name: "Black Devil",
              username: "bl4ckd3vil",
              status: "Offline",
              image: "/user2.jpeg",
            })
          }
        >
          <div class="left">
            <img src="/user2.jpeg" alt="loading..." />
            <div className="detail">
              <h1 class="username">Black Devil</h1>
              <p className="last-msg received seen">How Are You Bro?</p>
            </div>
          </div>
          <div class="right">{/* <p className='unseen-msg-count'>4</p> */}</div>
        </div>

        <div
          class="dm"
          onClick={() =>
            openDMAction({
              name: "Mr. Solo Dev",
              username: "mrsolodev",
              status: "Online",
              image: "/avatar.png",
            })
          }
        >
          <div class="left">
            <img src="/avatar.png" alt="loading..." />
            <div className="detail">
              <h1 class="username">Mr. Solo Dev</h1>
              <p className="last-msg ">You: Hello</p>
            </div>
          </div>
          <div class="right">{/* <p className='unseen-msg-count'>4</p> */}</div>
        </div>
      </div>
    </section>
  );
};

export default Home;
