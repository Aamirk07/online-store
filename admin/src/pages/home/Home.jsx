import { useSelector } from "react-redux";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import Feature from "../../components/feature/Feature";
import Chart from "../../components/chart/Chart";
import "./home.scss";
import Login from "../login/Login";

const Home = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <>
      {currentUser ? (
        <div className="home">
          <Sidebar />
          <div className="homeContainter">
            <h1>DASHBOARD</h1>
            <div className="widgets">
              <Widget type="users" />
              <Widget type="orders" />
              <Widget type="income" />
              <Widget type="products" />
            </div>
            <div className="charts">
              <Feature />
              <Chart aspect={2 / 1} title="Last 6 Months (Revenue)" />
            </div>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Home;
