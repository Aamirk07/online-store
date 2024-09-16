import React, { useEffect, useState } from "react";
import "./tableChart.scss";
import { getOrders } from "../../utils/apiCalls";
import {Link} from "react-router-dom"

const TableChart = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getOrders();
      setData(res);
    };
    fetchData();
  }, []);

  const [sortField, setSortField] = useState(null); // Track sorting state
  const [sortOrder, setSortOrder] = useState("asc"); // Track sort order

  const handleSort = (field) => {
    setSortField(field);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc"); // Toggle sort order
  };

  const sortedData = React.useMemo(() => {
    if (!sortField) return data;

    return [...data].sort((a, b) => {
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
  }, [data, sortField, sortOrder]);

  return (
    <div className="data-table">
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort("name")}>
              TRACKING ID{" "}
              {sortField === "name" && (
                <span className={`sort-icon ${sortOrder}`}>&#8593;</span>
              )}
            </th>
            <th className="smallScreen" onClick={() => handleSort("price")}>
              STATUS{" "}
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
              <td className="brief-container">
                <span>{index + 1}.</span>
                <span>SV{row?._id?.replace(/\D/g, "")}</span>
              </td>
              <td className="smallScreen" style={{ color: "blue" }}>
                {row?.status}
              </td>
              <td>
                <div>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`find/${row?._id}`}
                  >
                    <span className="view">view</span>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableChart;
