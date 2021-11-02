import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import ReactDOM from "react-dom";
import Post from "./Post";
import Form from "./components/Form";
import InputData from "./components/InputData";
import CsvReader from "./components/CsvReader";
import Papaparse from "./components/Papaparse";
import { CSVReader } from "react-papaparse";

function Navigasi() {
  return (
    <Router>
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Belajar-React</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Reqres</Nav.Link>
                <Nav.Link href="/csv">CSV</Nav.Link>
                <Nav.Link href="/input">Input Data</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/pdfreader">PDFReader</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Switch>
          <Route path="/csv">
            <CSV />
          </Route>
          <Route path="/input">
            <Input />
          </Route>
          <Route path="/pdfreader">
            <PDFReader />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <Post />
    </div>
  );
}
function CSV() {
  return (
    <div>
      <Papaparse />
    </div>
  );
}
function Input() {
  return (
    <div>
      <InputData />
    </div>
  );
}

function PDFReader() {
  return (
    <div>
      <CsvReader />
    </div>
  );
}
ReactDOM.render(<Papaparse />, document.getElementById("root"));
export default Navigasi;
