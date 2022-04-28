import Link from "next/link";
import { UserContext } from "../context";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

const Nav = () => {
  const [currentUser, setCurrentUser] = useState("");
  const [state, setState] = useContext(UserContext);

  useEffect(() => {
    process.browser && setCurrentUser(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  const router = useRouter();

  const logout = () => {
    window.localStorage.removeItem("auth");
    setState(null);
    router.push("/login");
  };
  return (
    <nav
      className="nav d-flex justify-content-center"
      style={{ backgroundColor: "black" }}
    >
      <Link href="/">
        <a className={`nav-link text-light ${currentUser === "/" && "active"}`}>
          Home
        </a>
      </Link>

      {state !== null ? (
        <>
          <Link href="/user/dashboard">
            <a
              className={`nav-link text-light ${
                currentUser === "/user/dashboard" && "active"
              }`}
            >
              {state && state.user && state.user.name}
            </a>
          </Link>
          <a onClick={logout} className="nav-link text-light">
            Logout
          </a>
        </>
      ) : (
        <>
          <Link href="/login">
            <a
              className={`nav-link text-light ${
                currentUser === "/login" && "active"
              }`}
            >
              Login
            </a>
          </Link>
          <Link href="/register">
            <a
              className={`nav-link text-light ${
                currentUser === "/register" && "active"
              }`}
            >
              Register
            </a>
          </Link>
        </>
      )}
    </nav>
  );
};

export default Nav;
