import { useContext } from "react";
import { UserContext } from "../context";
import Link from "next/link";

const Home = () => {
  const [state, setState] = useContext(UserContext);

  return (
    <div className="container-fluid py-5 ">
      <div className="row py-5 bg-default-image height-page">
        <div className="display-1 py-5 text-center">
          <h1 style={{ color: "#000000" }}>Meriti sa fii fericit!</h1>
        </div>
      </div>
      <div className="row">
        <div className="col py-5">
          <button className="btn bg-stress-image mx-3">
            <Link href="/info/stress">
              <a>
                <div className="py-5 text-center text-color-square fw-bold fs-2">
                  Stres
                </div>
              </a>
            </Link>
          </button>
        </div>
        <div className="col py-5">
          <button className="btn bg-depression-image mx-3">
            <Link href="/info/depression">
              <a>
                <div className="col py-5 text-center text-color-square fw-bold fs-2">
                  Depresie
                </div>
              </a>
            </Link>
          </button>
        </div>
        <div className="col py-5">
          <button className="btn bg-anxiety-image mx-3">
            <Link href="/info/anxiety">
              <a>
                <div className=" py-5 text-center text-color-square fw-bold fs-2">
                  Anxietate
                </div>
              </a>
            </Link>
          </button>
        </div>
        <div className="col py-5">
          <button className="btn bg-angry-image mx-3">
            <Link href="/info/angry">
              <a>
                <div className=" py-5 text-center text-color-square fw-bold fs-2">
                  Furie
                </div>
              </a>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
