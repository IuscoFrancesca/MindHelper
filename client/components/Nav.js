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
      className="nav p-2  d-flex justify-content-center fixed-top"
      style={{ backgroundColor: "#3c5153" }}
    >
      <Link href="/">
        <a
          className={`nav-link logo ${currentUser === "/" && "active"}`}
          style={{ color: "#cbd1d4" }}
        >
          Mind helper
        </a>
      </Link>

      {state !== null ? (
        <>
          <Link href="/user/dashboard">
            <a
              className={`nav-link ${
                currentUser === "/user/dashboard" && "active"
              }`}
              style={{ color: "#cbd1d4" }}
            >
              {state && state.user && state.user.name}
            </a>
          </Link>
          <a onClick={logout} className="nav-link" style={{ color: "#bb8a52" }}>
            Logout
          </a>
        </>
      ) : (
        <>
          <Link href="/login">
            <a
              className={`nav-link ${currentUser === "/login" && "active"}`}
              style={{ color: "#cbd1d4" }}
            >
              Login
            </a>
          </Link>
          <Link href="/register">
            <a
              className={`nav-link  ${currentUser === "/register" && "active"}`}
              style={{ color: "#cbd1d4" }}
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
