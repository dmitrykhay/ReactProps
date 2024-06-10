// import stylesMH from "./components/MessageHistory/MessageHistory.module.css";
import "./components/MessageHistory/MessageHistory.css";
import "./App.css";

import { Stars } from "./components/Stars";
import { Listing } from "./components/Listing";
import { MessageHistory } from "./components/MessageHistory";

import data from "../listing/data/etsy.json";
import { messages } from "./components/MessageHistory/messages";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  const dataList = data.filter((item) => !item.error_messages);

  return (
    <Router>
      <nav>
        <ul className="ul-stars">
          <li className="li-main"><Link to="/">Главная</Link></li>
          <li className="li-main"><Link to="/films">Рейтинг фильмов</Link></li>
          <li className="li-main"><Link to="/listing">Список предложений</Link></li>
          <li className="li-main"><Link to="/chat">История сообщений в чате</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={
          <div className="wrap">
            <h1>Задачи по теме "Props"</h1>
          </div>
        } />
        <Route path="/films" element={
          <>
            <Stars count = {0} />
            <Stars count = {1} />
            <Stars count = {3} />
            <Stars count = {5} />
            <Stars count = {6} />
          </>
        } />
        <Route path="/listing" element={<Listing items={dataList} />} />
        <Route path="/chat" element={
          <div className="clearfix container">
            <div className="chat">
              <div className="chat-history">
                <MessageHistory list={messages} />
              </div>
            </div>  
          </div>
        } />

        {/* <Route path="/chat" element={
          <div className={`${stylesMH.clearfix} ${stylesMH.container}`}>
            <div className={stylesMH["chat"]}>
              <div className={stylesMH["chat-history"]}>
                <MessageHistory list={messages} />
              </div>
            </div>  
          </div>
        } /> */}
      </Routes>
    </Router>
  )
}

export default App
