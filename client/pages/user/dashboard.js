import { useContext } from "react";
import { UserContext } from "../../context";
import UserRoute from "../../components/routes/UserRoute";

const Dashboard = () => {
  const [state, setState] = useContext(UserContext);

  return (
    <UserRoute>
      <div className="container-fluid py-5">
        <div className="row py-5 bg-default-image">
          <div className="display-1 text-center">
            <h1 className="text-light">Dashboard page</h1>
          </div>
        </div>
      </div>
    </UserRoute>
  );
};

export default Dashboard;
