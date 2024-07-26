import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import Login from "./components/Login";
import "./App.css";

const App = () => {
  if (!localStorage.getItem("username")) return <Login />;

  return (
    <ChatEngine
      projectID="f21a938a-e741-4805-a989-35f591cfa1d9"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      height="100vh"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() =>
        new Audio(
          "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
        ).play()
      }
    />
  );
};

export default App;