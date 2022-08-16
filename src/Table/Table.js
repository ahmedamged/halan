import React from "react";

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
  return (
    <div>
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
        <tbody>{customersTable}</tbody>
      </table>
    </div>
  );
};

export default Table;
