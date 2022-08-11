import { useState } from "react";
import Swal from "sweetalert2";

const Kartunama = ({ onSave }) => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pekerjaan, setPekerjaan] = useState("");
  const [jabatan, setJabatan] = useState("");
  const [alamat, setAlamat] = useState("");
  const [desc, setDesc] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!nama && !email && !pekerjaan && !jabatan && !alamat && !desc) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Lengkapi data form!",
      });
    } else if (!nama && email && pekerjaan && jabatan && alamat && desc) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Masukkan Nama!",
      });
    } else if (nama && !email && pekerjaan && jabatan && alamat && desc) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Masukkan Email!",
      });
    } else if (nama && email && !pekerjaan && jabatan && alamat && desc) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Masukan Pekerjaan!",
      });
    } else if (nama && email && pekerjaan && !jabatan && alamat && desc) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Masukkan Jabatan!",
      });
    } else if (nama && email && pekerjaan && jabatan && !alamat && desc) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Masukkan Alamat!",
      });
    } else if (nama && email && pekerjaan && jabatan && alamat && !desc) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Masukkan Desc!",
      });
    } else {
      onSave({ nama, email, pekerjaan, jabatan, alamat, desc });
    }

    setNama("");
    setEmail("");
    setPekerjaan("");
    setJabatan("");
    setAlamat("");
    setDesc("");
  };

  return (
    <selection>
      <div className="">
        <div className="task">
          <div className="row">
            <div className="col-sm-6">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <div className="modal-body">
                      <h3>Data Form</h3>
                      <form
                        tabindex="-1"
                        onSubmit={onSubmit}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-body">
                          <div>
                            <div className="form-group row">
                              <label for="nama ">Nama</label>
                              <input
                                type="text"
                                name="nama"
                                className="form-control"
                                placeholder="nama"
                                value={nama}
                                onChange={(e) => setNama(e.target.value)}
                              />
                            </div>
                            <div className="form-group row">
                              <label for="email">Email </label>
                              <input
                                type="email"
                                name="email"
                                placeholder="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </div>
                            <div className="form-group row">
                              <label for="agama">Pekerjaan</label>
                              <input
                                type="text"
                                name="pekerjaan"
                                placeholder="pekerjaan"
                                className="form-control"
                                value={pekerjaan}
                                onChange={(e) => setPekerjaan(e.target.value)}
                              />
                            </div>
                            <div className="form-group row">
                              <label for="hobi">Jabatan</label>
                              <input
                                type="text"
                                name="jabatan"
                                className="form-control"
                                placeholder="jabatan"
                                value={jabatan}
                                onChange={(e) => setJabatan(e.target.value)}
                              />
                            </div>
                            <div className="form-group row">
                              <label for="alamat">Alamat</label>
                              <input
                                name="alamat"
                                type="text"
                                className="form-control"
                                placeholder="alamat"
                                value={alamat}
                                onChange={(e) => setAlamat(e.target.value)}
                              />
                            </div>
                            <div className="form-group row">
                              <label for="desc">Description</label>
                              <textarea
                                name="desc"
                                className="form-control"
                                cols="30"
                                rows="5"
                                placeholder="description"
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                              ></textarea>
                            </div>
                            <div className="form-group row">
                              <div className="col-md-6">
                                <button
                                  id="add"
                                  type="submit"
                                  value="Save Task"
                                  className="btn btn-primary"
                                >
                                  Submit
                                </button>
                                <button
                                  id="reset"
                                  type="reset"
                                  className="btn btn-danger"
                                >
                                  Reset
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* <Tasks/> */}
            </div>
          </div>
        </div>
      </div>
    </selection>
  );
};

export default Kartunama;
