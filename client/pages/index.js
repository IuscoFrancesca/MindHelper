import { useContext } from "react";
import { UserContext } from "../context";

const Home = () => {
  const [state, setState] = useContext(UserContext);

  return (
    <div className="container-fluid">
      <div className="row py-5 bg-default-image">
        <div className="display-1 text-center">
          <h1>Home page</h1>
        </div>
      </div>
      {JSON.stringify(state)}
    </div>
  );
};

export default Home;
