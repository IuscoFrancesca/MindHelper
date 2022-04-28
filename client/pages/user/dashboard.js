import { useContext } from "react";
import { UserContext } from "../../context";
import UserRoute from "../../components/routes/UserRoute";

const Home = () => {
  const [state, setState] = useContext(UserContext);

  return (
    <UserRoute>
      <div className="container-fluid">
        <div className="row py-5 bg-default-image">
          <div className="display-1 text-center">
            <h1>Dashboard page</h1>
          </div>
        </div>
      </div>
    </UserRoute>
  );
};

export default Home;
