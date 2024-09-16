import React, { useEffect, useState } from "react";
import "./dataTable.scss"; // Import your SCSS file
import { fetchRowData } from "../../utils/apiCalls";
import { useNavigate } from "react-router-dom";

const DataTable = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchRowData("/users");
      setUsers(res);
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
    if (!sortField) return users;

    return [...users]?.sort((a, b) => {
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
  }, [users, sortField, sortOrder]);

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
            <th>NUMBER</th>
            <th>EDIT</th>
          </tr>
        </thead>
        <tbody>
          {sortedData?.map((row, index) => (
            <tr key={row?._id}>
              <td className="smallScreen">{row?._id}</td>
              <td>{row?.number}</td>
              <td>
                <div className="coustom">
                  <span
                    className="view"
                    onClick={async () => {
                      navigate(`/users/find/${row?._id}`);
                    }}
                  >
                    view
                  </span>
                  <span className="delete">delete</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
