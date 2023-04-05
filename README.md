# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

<!-- incomplete redux login authentication  -->

import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../features/auth/authSlice";
import { useLoginMutation } from "../features/auth/authApiSlice";
import axiosRequest from "../axios/axios";

const Login = () => {
const userRef = useRef();
const errorRef = useRef();
const [errMsg, setErrMsg] = useState("");
const navigate = useNavigate();

const [login, { isLoading }] = useLoginMutation();
const dispatch = useDispatch();

const [user, setUser] = useState("");
const [pwd, setPwd] = useState("");

useEffect(() => {
userRef.current.focus();
}, []);

useEffect(() => {
setErrMsg("");
}, [user, pwd]);

// const handleChange = (e) => {
// setUser((prev) => ({
// ...prev,
// [e.target.name]: e.target.value,
// }));
// };
const handleUserInput = (e) => setUser(e.target.value);
const handlePwdInput = (e) => setPwd(e.target.value);

const handleSubmit = async (e) => {
e.preventDefault();

    try {
      const userData = await login({ user, pwd }).unwrap();
      dispatch(setCredentials({ ...userData, user }));
      await axiosRequest.post("/auth/login", user, pwd);
      setUser(" ");
      setPwd(" ");
      navigate("/");
    } catch (error) {
      if (!error?.originalStatus) {
        setErrMsg("No Server Response");
      } else if (error.originalStatus?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (error.originalStatus?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login failed");
      }
      errorRef.current.focus();
    }

};

console.log(user);
console.log(pwd);

const content = isLoading ? (
<h1>Loading ...</h1>
) : (
<div className="auth">
<h1>Login</h1>
<form action="">
<label htmlFor="username">Username</label>
<input
          type="text"
          name="username"
          id="username"
          ref={userRef}
          value={user}
          required
          autoComplete="off"
          placeholder="username"
          onChange={handleUserInput}
        />
<label htmlFor="password">Password</label>
<input
          type="password"
          id="password"
          value={pwd}
          required
          name="password"
          placeholder="password"
          onChange={handlePwdInput}
        />
<button type="submit" onClick={handleSubmit}>
Login
</button>
{/_ {err && <p>{err}</p>} _/}
<p ref={errorRef} className={errMsg ? "errmsg" : "offscreen"}>
{errMsg}
</p>
<span>
Don't have an account? <Link to="/register">sign up</Link>{" "}
</span>
</form>
</div>
);
return content;
};

export default Login;
