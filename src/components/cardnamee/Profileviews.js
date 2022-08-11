import React from "react";
// import { Card, CardBody, CardHeader, Table} from 'reactstrap';
import "../../commons/index.css";
import me from "../../immg/Foto.png";
// import me2 from "../../immg/gbr.png";

function Profileviews(props) {
  return (
    <div className="container ">
      {props.listProfile.length ? (
        props.listProfile.map((data) => (
          <div className="row">
            <div className="col-sm-6">
              <div className="cards">
                <div className="upper">
                  <img
                    src="https://i.imgur.com/Qtrsrk5.jpg"
                    className="img-fluid"
                  />
                </div>

                <div className="user text-center">
                  <div className="profile">
                    <img
                      src={me}
                      className="rounded-circle"
                      width={100}
                      max-width={"400px"}
                      height={100}
                    />
                  </div>
                </div>

                <div className="mt-5 text-center">
                  {/* {props.listProfile.length ?
                props.listProfile.map(data => ( */}
                  {/* // <div key={data.id}> */}

                  <h4 className="mb-0">{data.nama}</h4>
                  <span className="text-muted d-block mb-2">{data.email}</span>

                  <a href="https://trias-githubporto.netlify.app/">
                    <button className="btn btn-primary btn-sm follow">
                      Portfolio
                    </button>
                  </a>

                  <div className="d-flex justify-content-between align-items-center mt-4 px-5">
                    <div className="stats">
                      <h6 className="mb-2">Pekerjaan</h6>
                      <span>{data.pekerjaan}</span>
                    </div>

                    <div className="stats">
                      <h6 className="mb-2">Project</h6>
                      <span>{data.project}</span>
                    </div>

                    <div className="stats">
                      <h6 className="mb-2">Status</h6>
                      <span>{data.status}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  );
}

export default Profileviews;
