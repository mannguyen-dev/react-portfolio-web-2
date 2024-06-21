import React, { useState } from "react";
import classes from "./login.module.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import userService from "../../services/UserService";
import { userActions } from "../../store/user-slice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const onChangeUsernameHandler = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
    setError(null);
  };

  const onChangePasswordHandler = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
    setError(null);
  };

  const loginHandler = async () => {
    console.log({ username, password });
    try {
      const response = userService.login(username, password);

      const responseData = await Promise.resolve(response);

      console.log(responseData.data.user);

      dispatch(userActions.login({ user: responseData.data.user, authToken: responseData.data.token }));
      toast.success("Đăng nhập thành công!");
      navigate("/");
    } catch (error) {
      console.log(error.message);
      setError("Tên đăng nhập hoặc mật khẩu sai vui lòng kiểm tra lại!");
      toast.error("Tên đăng nhập hoặc mật khẩu sai vui lòng kiểm tra lại!");
    }
  };

  return (
    <div className={classes.container}>
      <div className="input">
        <input type="text" placeholder="usename" onChange={onChangeUsernameHandler} />
        <input type="password" placeholder="password" onChange={onChangePasswordHandler} />
        <button type="submit" onClick={loginHandler}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
