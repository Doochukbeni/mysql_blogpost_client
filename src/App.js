import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Routes,
} from "react-router-dom";
import Register from "./pages/Register";
import Single from "./pages/Single";
import RequireAuth from "./pages/RequireAuth.js";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles.scss";
import {
  selectCurrentToken,
  selectCurrentUser,
} from "./features/auth/authSlice";
import { useSelector } from "react-redux";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/single/:id",
//         element: <Single />,
//       },
//       {
//         path: "/create",
//         element: <CreatePost />,
//       },
//     ],
//   },
//   {
//     path: "/register",
//     element: (
//       <div>
//         <Register />
//       </div>
//     ),
//   },
//   {
//     path: "/login",
//     element: (
//       <div>
//         <Login />
//       </div>
//     ),
//   },
// ]);

function App() {
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);
  console.log({ user, token });
  return (
    <div className="app">
      <div className="container">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* protected routes  */}

            <Route element={<RequireAuth />}>
              <Route path="/create" element={<CreatePost />} />
              <Route path="/single/:id" element={<Single />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
