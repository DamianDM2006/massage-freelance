import { useAuth } from "./AuthContext.jsx";

const LoginPage = () => {
  const { login } = useAuth();

  const tryLogin = async(formData) => {
    const userName = formData.get("userName");
    const password = formData.get("password");

    try {
      await login({ userName, password })
    } catch(err) {
      console.log(err);
    }
  };

  return (
    <div className="login">
      <h2>Login to Full Moon Massage.</h2>
      <form className="credsForm" action={tryLogin}>
        <label className="credsLabl">
          Username:{" "}
          <input type="text" name="userName" maxLength="30" size="30"/>
        </label>
        <label className="credsLabl">
          Password:{"  "}
          <input
            type="text"
            name="password"
            maxLength="30"
            size="30"
            minLength="6"
            placeholder="6 character minimum"
          />
        </label>
        <button className="credsBtn">
          Login
        </button>
      </form>
    </div>
  )
};

export default LoginPage;