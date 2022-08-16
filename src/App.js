import "./App.css";
import Table from "./Table/Table";
import { useState } from "react";

function App() {
  const myCustomersJson = {
    customers: [
      {
        name: "Jane Doe",
        age: 12,
        address: "13th street in Maadi",
        date: "2012-04-23T18:25:43.511Z",
        email: "jane@halanchallenge.com",
      },
      {
        name: "Justin Doe",
        age: 12,
        address: "15 Salah Salem street in Nasr city",
        date: "2012-04-23T18:25:43.511Z",
        email: "Justin@halanchallenge.com",
      },
    ],
  };
  const myCustomers = JSON.stringify(myCustomersJson);
  const myCustomersObject = JSON.parse(myCustomers);
  const [state, setState] = useState(myCustomersObject.customers);
  return (
    <div className="App">
      <Table customers={state} />
      
    </div>
  );
}

export default App;
