import React from "react";
import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import Profile from "./Profilee";
import Profileview from "./Profileviews";

function AddProf() {
  const form = {
    nama: "",
    email: "",
    pekerjaan: "",
    project: "",
    status: "",
    listProfile: [],
  };

  const [{ nama, email, pekerjaan, project, status, listProfile }, setForm] =
    React.useState(form);

  const toggle = (data) => {
    setForm({
      nama: "",
      email: "",
      pekerjaan: "",
      project: "",
      status: "",
      listProfile: data,
    });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prevState) => ({ ...prevState, [id]: value }));
  };

  return (
    <div className="App">
      <div className="container">
        <div className="tasks">
          <Row>
            <Col sm="6" className="card">
              <h1>Profile Input</h1>
              <Form id="formBiodata">
                <FormGroup>
                  <Label for="nimaaa">
                    <b>Name</b>
                  </Label>
                  <Input
                    type="text"
                    id="nama"
                    className="form-control"
                    autoComplete="off"
                    placeholder="Name..."
                    value={nama}
                    required
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="email">
                    <b>Email</b>
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    autoComplete="off"
                    placeholder="Email..."
                    value={email}
                    required
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="pekerjaan">
                    <b>Pekerjaan</b>
                  </Label>
                  <Input
                    type="text"
                    name="pekerjaan"
                    id="pekerjaan"
                    className="form-control"
                    autoComplete="off"
                    placeholder="Pekerjaan..."
                    value={pekerjaan}
                    required
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="project">
                    <b>Project</b>
                  </Label>
                  <Input
                    type="text"
                    name="project"
                    id="project"
                    className="form-control"
                    autoComplete="off"
                    placeholder="project..."
                    value={project}
                    required
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="status">
                    <b>Status</b>
                  </Label>
                  <Input
                    type="text"
                    name="status"
                    id="status"
                    className="form-control"
                    autoComplete="off"
                    placeholder="Status..."
                    value={status}
                    required
                    onChange={handleChange}
                  />
                </FormGroup>
              </Form>
            </Col>
            <Col sm="6">
              <Profile
                nama={nama}
                email={email}
                pekerjaan={pekerjaan}
                project={project}
                status={status}
                reset={(data) => {
                  toggle(data);
                }}
              />
            </Col>
          </Row>

          <hr></hr>
          <Profileview listProfile={listProfile} key={listProfile.length} />
        </div>
      </div>
    </div>
  );
}

export default AddProf;
