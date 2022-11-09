import { ChatEngine } from "react-chat-engine";

import './App.css';
import ChatFeed from './Components/ChatFeed';
import LoginForm from './Components/LoginForm';

const App = ()=>{
    if (!localStorage.getItem('username')) return <LoginForm />
    return(
        <ChatEngine 
           height="100vh"
           projectID="1c234cf0-cb6f-43b8-b7fe-b129183b22cf"
           userName={localStorage.getItem('username')}
           userSecret={localStorage.getItem('password')}
           renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    )
}

export default App;