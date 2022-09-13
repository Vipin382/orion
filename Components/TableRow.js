import React from "react";

const TableRow = ({ data1, data2, data3, data4, data5, data6, data7 }) => {
  return (
    <tr>
      <td>{data1}</td>
      <td>{data2}</td>
      <td>{data3}</td>
      <td>{data4}</td>
      <td>{data5}</td>
      <td>{data6}</td>
      <td>{data7}</td>
    </tr>
  );
};

export default TableRow;
