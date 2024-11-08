
import { useState } from 'react';
import './App.css';
import ChatBox from './pages/ChatBox';
import Home from './pages/Home';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const [isChatOpen, setChatOpen] = useState(false)
  const [userData,setUserData] = useState({
    name: "",
    username: "",
    status: "",
    image: ""
  })

  function closeChat() {
    setChatOpen(false)
  }

  function openChat(data) {
    setChatOpen(true)
    setUserData(data)
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return (
    <div className="App">
      <Home openDMAction={openChat}/>

      {/* <RouterProvider router={router}/> */}
      <ChatBox open={isChatOpen} closeAction={closeChat} data={userData}/>
    </div>
  );
}

export default App;
