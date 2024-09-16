import React, { useEffect, useState } from "react";
import "./productTable.scss";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, fetchRowData } from "../../utils/apiCalls";
import { useNavigate } from "react-router-dom";
import { getProductStart, getProductSucess } from "../../redux/productSlice";

const ProductTable = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [sortField, setSortField] = useState(null); // Track sorting state
  const [sortOrder, setSortOrder] = useState("asc"); // Track sort order
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(getProductStart());
      const res = await fetchRowData("/products");
      dispatch(getProductSucess(res));
    };
    fetchData();
  },[dispatch]);

  const handleSort = (field) => {
    setSortField(field);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc"); // Toggle sort order
  };

  const sortedData = React.useMemo(() => {
    if (!sortField) return products;

    return [...products].sort((a, b) => {
      const sortValueA = a[sortField];
      const sortValueB = b[sortField];

      if (typeof sortValueA === "string") {
        return sortOrder === "asc"
          ? sortValueA.localeCompare(sortValueB)
          : sortValueB.localeCompare(sortValueA);
      } else {
        return sortOrder === "asc"
          ? sortValueA - sortValueB
          : sortValueB - sortValueA;
      }
    });
  }, [products, sortField, sortOrder]);
  return (
    <div className="data-table">
      <table>
        <thead>
          <tr>
            <th className="smallScreen" onClick={() => handleSort("id")}>
              ID{" "}
              {sortField === "id" && (
                <span className={`sort-icon ${sortOrder}`}>&#8593;</span>
              )}
            </th>
            <th onClick={() => handleSort("name")}>
              DETAIL{" "}
              {sortField === "name" && (
                <span className={`sort-icon ${sortOrder}`}>&#8593;</span>
              )}
            </th>
            <th className="smallScreen" onClick={() => handleSort("price")}>
              PRICE{" "}
              {sortField === "price" && (
                <span className={`sort-icon ${sortOrder}`}>&#8593;</span>
              )}
            </th>
            <th>EDIT</th>
          </tr>
        </thead>
        <tbody>
          {sortedData?.map((row, index) => (
            <tr key={row?._id}>
              <td className="smallScreen">{row?._id}</td>
              <td className="brief-container">
                <span className="index">{index + 1}.</span>
                <img src={row?.imgs[0]} alt={row?.title} />
                <span>{row?.title}</span>
              </td>
              <td className="smallScreen">₹{row?.price?.toFixed(2)}</td>
              <td>
                <div className="coustom">
                  <span
                    className="view"
                    onClick={async () => {
                      navigate(`find/${row?._id}`);
                    }}
                  >
                    view
                  </span>
                  <span
                    className="delete"
                    onClick={async () => {
                      await deleteProduct(row?._id, dispatch);
                    }}
                  >
                    delete
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
