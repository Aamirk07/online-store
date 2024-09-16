import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DataTable from "../../components/dataGrid/DataTable";
import ProductTable from "../../components/productTable/ProductTable";

const List = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/")[1];

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <div className="top">
          <h1>{path.toUpperCase()}</h1>
          <span
            className={path}
            onClick={() => {
              navigate(`/products/new`);
            }}
          >
            Add New
          </span>
        </div>
        {path === "users" ? <DataTable /> : <ProductTable />}
      </div>
    </div>
  );
};

export default List;
