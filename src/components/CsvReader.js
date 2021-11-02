import React, { useState } from "react";
import { Table } from "react-bootstrap";

function CsvReader() {
  const [csvFile, setCsvFile] = useState();
  const [csvArray, setCsvArray] = useState([]);
  const processCSV = (str, delim = ",") => {
    const headers = str.slice(0, str.indexOf("\n")).split(delim);
    console.log(headers);
    const rows = str.slice(str.indexOf("\n") + 1).split("\n");
    console.log(rows);

    const newArray = rows.map((row) => {
      const values = row.split(delim);
      const eachObject = headers.reduce((obj, header, i) => {
        obj[header] = values[i];
        return obj;
      }, {});
      return eachObject;
    });

    setCsvArray(newArray);
  };
  const submit = () => {
    const file = csvFile;
    const reader = new FileReader();

    reader.onload = function (e) {
      const text = e.target.result;
      console.log(text);
      processCSV(text);
    };

    reader.readAsText(file);
  };

  return (
    <form id="csv-form">
      <input
        type="file"
        accept=".csv"
        id="csvFile"
        onChange={(e) => {
          setCsvFile(e.target.files[0]);
        }}
      ></input>
      <br />
      <button
        onClick={(e) => {
          e.preventDefault();
          if (csvFile) submit();
        }}
      >
        Submit
      </button>
      <br />
      <br />
      {csvArray.length > 0 ? null : null}
      <>
        <Table striped bordered hover>
          <thead>
            <th>orderid</th>
            <th>ordernumber</th>
            <th>seller</th>
            <th>finisheddate</th>
            <th>created_at</th>
            <th>userid</th>
            <th>productname</th>
            <th>quantity</th>
            <th>productprice</th>
            <th>productdiscount</th>
            <th>totalproductprice</th>
            <th>sellerdeposit</th>
            <th>servicefee</th>
          </thead>
          <tbody>
            {csvArray.map((item, i) => (
              <tr key={i}>
                <td>{item.orderid}</td>
                <td>{item.ordernumber}</td>
                <td>{item.seller}</td>
                <td>{item.finisheddate}</td>
                <td>{item.created_at}</td>
                <td>{item.userid}</td>
                <td>{item.productname}</td>
                <td>{item.quantity}</td>
                <td>{item.productprice}</td>
                <td>{item.productdiscount}</td>
                <td>{item.totalproductprice}</td>
                <td>{item.sellerdeposit}</td>
                <td>{item.servicefee}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    </form>
  );
}

export default CsvReader;
