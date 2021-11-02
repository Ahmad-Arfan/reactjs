import React from "react";
import { Form, Formik, Field } from "formik";
import * as yup from "yup";
import axios from "axios";
import { Container, Col, Row, FormGroup, Button } from "react-bootstrap";

const InputSchema = yup.object().shape({
  name: yup.string().required("Required"),
  job: yup.string().required("Required"),
});

const initialValues = {
  name: "",
  job: "",
};

const url = "https://reqres.in/api/users";
class InputData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      job: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  Tambahdata = () => {
    axios
      .post(url, {
        name: this.state.name,
        job: this.state.job,
      })
      .then((response) => {
        console.log(response.data);
      });
  };

  render() {
    return (
      <div>
        <Formik validationSchema={InputSchema} initialValues={initialValues}>
          {() => (
            <div>
              <Container>
                <h1 className="my-4 font-weight-bold .display-4">Tambah Data</h1>
                <Form className="form" method="POST" autoComplete="off">
                  <Col>
                    <label>Nama</label>
                    <FormGroup>
                      <Row>
                        <Col>
                          <Field type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Masukkan Nama" />
                          {/* {errors.name && touched.name && <p>{errors.name}</p>} */}
                        </Col>
                      </Row>
                    </FormGroup>
                    <label>Job</label>
                    <FormGroup>
                      <Row>
                        <Col>
                          <Field type="text" name="job" value={this.state.job} onChange={this.handleChange} placeholder="Job" />
                          {/* {errors.job && touched.job && <p>{errors.job}</p>} */}
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup>
                      <Row>
                        <Col>
                          <Button className="btn btn-dark mt-3" type="button" onClick={this.Tambahdata}>
                            Submit
                          </Button>
                        </Col>
                      </Row>
                    </FormGroup>
                  </Col>
                </Form>
              </Container>
            </div>
          )}
        </Formik>
      </div>
    );
  }
}
export default InputData;
