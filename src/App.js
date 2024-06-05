
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState } from 'react';

import Form from "./Components/Form";
import Table from './Components/Tables';

function App() {

  useEffect(() => {
    //get data fun call
  }, [])


  const [data, setData] = useState({
    name: "",
    value: "",
  });

  const [dataSet, setDataSet] = useState([{
    "name": "Maryanne",
    "value": "0382597494"
  }, {
    "name": "Nessi",
    "value": "2754979980"
  }, {
    "name": "Pippa",
    "value": "2462169067"
  }, {
    "name": "Bette-ann",
    "value": "9437205477"
  }, {
    "name": "Ethan",
    "value": "2846190070"
  }, {
    "name": "Shanta",
    "value": "3364600058"
  }, {
    "name": "Celle",
    "value": "6151023722"
  }, {
    "name": "Carolus",
    "value": "7075132164"
  }])


  async function getEmployees() {
    return fetch("/employees").then(response => response.json());
  }

  async function createEmployee(name, value) {
    return fetch("/employees", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name, value: value })
    });
  }

  async function updateEmployee(name, value) {
    return fetch("/employees", {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name, value: value })
    });
  }

  const onChangeOrEdit = (val) => {
    setData({ ...val });
  };


  const addEmployee = async () => {
    // await createEmployee(data);
    // await getEmployees()
    // console.log(data)
    setData({ name: "", value: "" })
  }


  const editEmployee = async () => {
    // await updateEmployee(data);
    // await getEmployees()
    // console.log(data)
    setData({ name: "", value: "" })
  }

  return (
    <div className="App">
      <div className="container p-5 bg-light border rounded-3">
        <div className="row">
          <Form data={data} addEmployee={addEmployee} editEmployee={editEmployee}></Form>
          <Table handleEdit={onChangeOrEdit} dataSet={dataSet}></Table>
        </div>
      </div>
    </div>
  );
}

export default App;
