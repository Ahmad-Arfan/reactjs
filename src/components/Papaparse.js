import React from "react";
import ReactDOM from "react-dom";
import { Table, Container, Form, Col, Row, FormGroup } from "react-bootstrap";
import { Page, Text, View, Document, StyleSheet, PDFViewer } from "@react-pdf/renderer";
import Papa from "papaparse";
import Tabel from "./Table";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  laporan: {
    flexDirection: "row",
    marginTop: 36,
    justifyContent: "flex-end",
    fontStyle: "bold",
  },
  table: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 24,
  },
});
const buttonRef = React.createRef();
class Papaparse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      namatoko: "",
      periode: "",
      lists: [],
      parsedCsvData: [],
    };
    this.updateData = this.updateData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  }

  handleOnFileLoad = (data) => {
    this.setState({ parsedCsvData: data.target.files[0] });
  };

  updateData(result) {
    var data = result.data;
    this.setState({
      parsedCsvData: data,
    });
    console.log(data);
    console.log(this.state.parsedCsvData);
  }

  generatePDF = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const { parsedCsvData } = this.state;
    Papa.parse(parsedCsvData, {
      delimiter: "",
      complete: this.updateData,
      header: true,
    });
    reader.readAsText(parsedCsvData);
    // <PDFViewer>
    // <Document>
    //   <Page size="A4" style={styles.page}>
    //     <View style={styles.laporan}>Laporan Penjualan</View>
    //     <View style={styles.section}>
    //       <Text>Nama Toko</Text>
    //       <Text></Text>
    //       <Text>Periode</Text>
    //       <Text></Text>
    //       <Text>Total</Text>
    //       <Text></Text>
    //     </View>
    //     <View style={styles.table}>
    //       <Table striped bordered hover>
    //         <thead>
    //           <th className="font-bold">No.Trx</th>
    //           <th className="font-bold">Produk</th>
    //           <th className="font-bold">Jumlah</th>
    //           <th className="font-bold">Harga</th>
    //           <th className="font-bold">Diskon</th>
    //           <th className="font-bold">Total</th>
    //         </thead>
    //         {this.state.parsedCsvData?.map((data, id) => (
    //           <tbody>
    //             <tr key={id}>
    //               <td>{data.No_Trx}</td>
    //               <td>{data.Produk}</td>
    //               <td>{data.Jumlah}</td>
    //               <td>{data.Harga}</td>
    //               <td>{data.Diskon}</td>
    //               <td>{data.Total}</td>
    //             </tr>
    //           </tbody>
    //         ))}
    //       </Table>
    //     </View>
    //   </Page>
    // </Document>
    //   ;
    // </PDFViewer>;
  };

  render() {
    return (
      <>
        <Container>
          <h1 className="my-4 font-weight-bold .display-4">Sales Report</h1>
          <Form className="form" autoComplete="off">
            <Col>
              <label>Nama Toko</label>
              <FormGroup>
                <Row>
                  <Col>
                    <input type="text" name="namatoko" value={this.state.namatoko} onChange={this.handleChange} />
                  </Col>
                </Row>
              </FormGroup>
              <label>Periode</label>
              <FormGroup>
                <Row>
                  <Col>
                    <input type="text" name="periode" value={this.state.periode} onChange={this.handleChange} />
                  </Col>
                </Row>
              </FormGroup>
              <br />

              <FormGroup>
                <Row>
                  <Col>
                    <label></label>
                    <input type="file" accept=".csv" id="csvFile" onChange={this.handleOnFileLoad} />
                  </Col>
                </Row>
              </FormGroup>
            </Col>
          </Form>
        </Container>
        <br />
        <button
          onClick={this.generatePDF}
          type="button"
          className="btn btn-primary"
          style={{
            marginLeft: 95,
            marginTop: 5,
          }}
        >
          EXPORT TO PDF
        </button>
        <br />
        <br />
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.laporan}>Laporan Penjualan</View>
            <View style={styles.section}>
              <Text>Nama Toko</Text>
              <Text></Text>
              <Text>Periode</Text>
              <Text></Text>
              <Text>Total</Text>
              <Text></Text>
            </View>
            <View style={styles.table}>
              <Table striped bordered hover>
                <thead>
                  <th className="font-bold">No.Trx</th>
                  <th className="font-bold">Produk</th>
                  <th className="font-bold">Jumlah</th>
                  <th className="font-bold">Harga</th>
                  <th className="font-bold">Diskon</th>
                  <th className="font-bold">Total</th>
                </thead>
                {this.state.parsedCsvData?.map((data) => {
                  console.log(data);
                  return (
                    <tbody>
                      <tr>
                        <td>{data.No_Trx}</td>
                        <td>{data.Produk}</td>
                        <td>{data.Jumlah}</td>
                        <td>{data.Harga}</td>
                        <td>{data.Diskon}</td>
                        <td>{data.Total}</td>
                      </tr>
                    </tbody>
                  );
                })}
              </Table>
            </View>
          </Page>
        </Document>
      </>
    );
  }
}
ReactDOM.render(<Papaparse />, document.getElementById("root"));
export default Papaparse;
