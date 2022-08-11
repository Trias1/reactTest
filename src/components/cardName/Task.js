import { FaPencilAlt, FaTimes } from "react-icons/fa";
import me from "../../immg/Foto.png";

const Task = ({ task, onDelete, onEdit }) => {
  return (
    <div>
      <div className="text-center">
        <div className="task">
          <div className="col-sm-6">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <div className="modal-body">
                    <h5>Tampilan Data</h5>
                    <hr></hr>
                    <div className="task">
                      <div className="text-center">
                        <img
                          src={me}
                          className="rounded-circle"
                          width={100}
                          max-width={"400px"}
                          height={100}
                        />
                      </div>
                      <div className="text-justify mt-3">
                        <p className="mt-2 mb-1">nama : {task.nama}</p>
                        <p className="fonts mb-1">email : {task.email}</p>
                        <p className="fonts mb-1">
                          pekerjaan : {task.pekerjaan}
                        </p>
                        <p className="fonts mb-1">jabatan : {task.jabatan}</p>
                        <p className="fonts mb-1">alamat : {task.alamat}</p>
                        <p className="fonts mb-1">deskripsi : {task.desc}</p>
                        <hr></hr>
                        <div className="form-group row">
                          <div className="col-md-6">
                            <p>
                              <FaTimes
                                onClick={() => onDelete(task.id)}
                                className="delIcon"
                              ></FaTimes>
                            </p>
                            <p>
                              <FaPencilAlt
                                onClick={() => onEdit(task.id)}
                                className="editIcon"
                              ></FaPencilAlt>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
