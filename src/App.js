import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  const [tableData, setTableData] = useState([]);

  const handleSubmit = (data) => {
    setTableData([...tableData, data]);
  };
  console.log(tableData);

  return (
    <div>
      <Form onSubmit={handleSubmit} />
      <Table tableData={tableData} />
    </div>
  );
}

export default App;
