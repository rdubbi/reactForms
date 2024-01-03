import { useState } from "react";
export default function Authenticate(props) {
  const [userMessage, setUserMessage] = useState(null);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const token = props.token;
  async function handleClick() {
    try {
      console.log(token);
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      setSuccess(result.message);
      setUserMessage(result.data.username);
    } catch (error) {
      setError(
        "Incorrectly Authenticated. We are sorry, your token could not be authenticated. This is most liekly due to a missing or invalid username/password. Please refresh the page and try again ensuring that you complete both fields and click SUBMIT below before trying to authenticate your token again."
      );
      console.log(error.message);
    }
  }
  return (
    <div>
      <h2>Authenticate</h2>
      {success && <p>{success}</p>}
      {error && <p>{error}</p>}
      <button onClick={handleClick}>Authenticate Token!</button>
      {userMessage && <p>Username is: {userMessage}</p>}
    </div>
  );
}
