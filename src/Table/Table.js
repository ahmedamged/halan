import React, { useRef, useEffect } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const Table = ({ customers }) => {
  const customersTable = customers.map(
    ({ name, age, address, date, email }, idx) => (
      <tr key={idx}>
        <td>{name}</td>
        <td>{age}</td>
        <td>{address}</td>
        <td>{date}</td>
        <td>{email}</td>
      </tr>
    )
  );

  const divEl = useRef('null');

  const printHandler = () => {
    html2canvas(divEl.current, {
        scale:1
      }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.save("download.pdf");
    });
  };

  return (
    <div ref={divEl}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Date</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody data-testid="customersTable">{customersTable}</tbody>
      </table>
      <button onClick={printHandler}>Print</button>
    </div>
  );
};

export default Table;
