import React from "react";
import { Card, CardBody, CardHeader, Button } from "reactstrap";

function Profilee(props) {
  const [data, setData] = React.useState([]);
  const [cekData, setCek] = React.useState(false);

  const saveHandle = async (nama, email, pekerjaan, project, status) => {
    setData((prevState) => [
      ...prevState,
      {
        id: data.length + 1,
        nama: nama,
        email: email,
        pekerjaan: pekerjaan,
        project: project,
        status: status,
      },
    ]);
    setCek(true);
  };
  const dataTable = (data) => {
    props.reset(data);
    setCek(false);
  };
  React.useEffect(() => {
    if (cekData) {
      dataTable(data);
    }
  }, [cekData]);

  return (
    <>
      <Card bg="primary" style={{ height: "300px" }}>
        <CardHeader style={{ backgroundColor: "#47CDF1" }}>
          <h1>Profile</h1>
        </CardHeader>
        <CardBody>
          Nama = {props.nama}
          <br />
          Email = {props.email}
          <br />
          Pekerjaan = {props.pekerjaan}
          <br />
          Project = {props.project}
          <br />
          Status = {props.status}
        </CardBody>
        <div style={{ float: "right" }}>
          <Button
            className="btn-pill btn-lg float-right"
            style={{ background: "#9ACD32", border: "none", width: "100px" }}
            onClick={() => {
              saveHandle(
                props.nama,
                props.email,
                props.pekerjaan,
                props.project,
                props.status
              );
            }}
          >
            Save
          </Button>
        </div>
      </Card>
    </>
  );
}

export default Profilee;
