import logo from "./logo.svg";
import "./App.css";

function App() {
  function formatUser(user) {
    return user.firstname + " " + user.lastname;
  }

  function getGreetings(user) {
    if (user) {
      return <h1>Hello, {formatUser(user)}</h1>;
    }
    return <h1>Hello, Stranger!</h1>;
  }

  const user = {
    firstname: "Akmal",
    lastname: "Kamarudin",
  };
  // const element = <h1>Hello, World. I'm Akmal.</h1>;
  return <div>{getGreetings(user)}</div>;
}

export default App;
