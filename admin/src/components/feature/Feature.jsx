import "./feature.scss";
import { MdMoreVert } from "react-icons/md";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useEffect, useState } from "react";
import { revenu } from "../../utils/apiCalls";
import { FaLongArrowAltUp } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";
const Feature = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchDta = async () => {
      const res = await revenu();
      setData(res);
    };
    fetchDta();
  }, []);
  const target = 12000;
  const incomeThisMonth = data?.reduce((n, { total }) => n + total, 0);
  const percentage = (
    Math.round(((100 * incomeThisMonth) / target) * 100) / 100
  ).toFixed(2);

  return (
    <div className="feature">
      <div className="top">
        <h1 className="title">Revenue</h1>
        <MdMoreVert />
      </div>
      <div className="bottom">
        <div className="fChart">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            strokeWidth={5}
          />
        </div>
        <p className="title">Total sales made this Month</p>
        <p
          className={`amount ${
            target > incomeThisMonth ? "negative" : "positive"
          }`}
        >
          ₹{incomeThisMonth}
          {target > incomeThisMonth ? (
            <FaLongArrowAltDown fontSize="large" style={{ color: "red" }} />
          ) : (
            <FaLongArrowAltUp fontSize="large" style={{ color: "green" }} />
          )}
        </p>
        <p className="desc">
          Previous transaction processing. Last payments may not be included
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className={`itemResult `}>
              <div className="resultAmount">₹{target}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
