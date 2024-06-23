import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import userService from "../../services/UserService";
import { userActions } from "../../store/user-slice";
import toast from "react-hot-toast";

let isLoggedOut = false;

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.authToken);
  useEffect(() => {
    const logoutHandler = async () => {
      console.log(i);
      if (isLoggedOut) {
        return;
      }
      await userService.logout(token);

      dispatch(userActions.logout());

      console.log("Đăng xuất thành công!");
      toast.success("Đăng xuất thành công!");
      navigate("/");
    };

    logoutHandler();
    isLoggedOut = !isLoggedOut;
  });
  return <div>Logout</div>;
};

export default Logout;
