import Navbar from "./components/Navbar";
import Textbox from "./components/Textbox";
import Chatbox from "./components/ChatBox";
import Chats from "./components/Chats";

const App = () =>{

  return (
    <>
      <Navbar />
      <Chats />
      <Chatbox />
      <Textbox />
    </>
  );
}
export default App;