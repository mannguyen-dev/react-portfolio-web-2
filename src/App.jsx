import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio";
import Navbar from "./components/Navbar";
import Contact from "./pages/contact/Contact";
import Themes from "./components/Themes";
import Login from "./pages/login/Login";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import userService from "./services/UserService";
import { userActions } from "./store/user-slice";
import Cookies from "universal-cookie";
import Logout from "./pages/logout/Logout";
import { Toaster } from "react-hot-toast";

const cookies = new Cookies();

function App() {
  const [isLogin, setIsLogin] = useState(false);

  const dispatch = useDispatch();
  // const navigate = useNavigate();
  useEffect(() => {
    const loginByToken = async () => {
      try {
        const token = cookies.get("Auth");

        const response = userService.loginByToken(token);

        const responseData = await Promise.resolve(response);

        const user = responseData.data.user;

        if (user) {
          dispatch(userActions.login({ user: user, authToken: responseData.data.token }));
          setIsLogin(true);
        } else {
          setIsLogin(false);
        }
      } catch (error) {
        console.log(error.response.status);
        setIsLogin(false);
      }
    };

    if (cookies.get("Auth")) {
      loginByToken();
    } else {
      // navigate("/login");
      setIsLogin(false);
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <Themes />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="logout" element={<Logout />} />
      </Routes>
      <Toaster
        position="top right"
        toastOptions={{
          style: {
            fontSize: "1.4rem",
          },
        }}
      ></Toaster>
    </BrowserRouter>
  );
}

export default App;
