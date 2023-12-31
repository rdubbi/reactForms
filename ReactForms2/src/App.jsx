import SignUpForm from "./components/SignUpForm";
import Authenticate from "./components/Authenticate";
import {useState} from "react"

export default function App() {
  const [token, setToken] = useState(null)
  return (
    <>
      <Authenticate token = {token} setToken={setToken} />
      <SignUpForm token = {token}  setToken={setToken}/>
    </>
  );
}
