import ChannelContainer from "./Components/ChannelConatiner";
import ChannelListSContainer from "./Components/ChannelListsContainer";
import {StreamChat} from "stream-chat";
import {Chat} from "stream-chat-react";
import Cookie from "universal-cookie";
import "./App.css";
const client = StreamChat.getInstance(process.env.STREAM_API_KEY);
function App() {
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelContainer />
        <ChannelListSContainer/>
      </Chat>
    </div>
  );
}

export default App;
