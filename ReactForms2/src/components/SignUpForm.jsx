import { useState } from "react";

export default function SignUpForm(props) {
  const setToken = props.setToken;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        }
      );

      const result = await response.json();
      setToken(result.token);
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <>
      <h2>Sign Up!</h2>
      {/* Almost got this right. What are these && operators doing here? */}
      {/* <p> {error ? setError : null}</p> */}
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            type={"text"}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            minLength={8}
            required
          />
        </label>
        <label>
          Password:{" "}
          <input
            type={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}
