// Importing React Hooks
import { useState, useEffect } from "react";

//import component
import Header from "./Header";
import Tasks from "./Tasks";
import Kartunama from "./Kartunama";

import "../../commons/index.css";

// Importing Packages
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

const Tampildata = () => {
  const [loading, setloading] = useState(true); // melakukan render halaman
  const [tasks, setTasks] = useState([]); // Task State
  const [showAddTask, setShowAddTask] = useState(false); // untuk menambahkan data ke form

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 3500);
  }, []);

  // Mengambil dari Penyimpanan Lokal
  const getTasks = JSON.parse(localStorage.getItem("taskAdded"));

  useEffect(() => {
    if (getTasks == null) {
      setTasks([]);
    } else {
      setTasks(getTasks);
    }
    // eslint-disable-next-line
  }, []);

  // Menambah data
  // Add Task
  const addTask = (task) => {
    const id = uuidv4();
    const newTask = { id, ...task };

    setTasks([...tasks, newTask]);

    Swal.fire({
      icon: "success",
      title: "Yay...",
      text: "You have successfully added a new task!",
    });

    localStorage.setItem("taskAdded", JSON.stringify([...tasks, newTask]));
  };

  // Menghapus data
  const deleteTask = (id) => {
    const deleteTask = tasks.filter((task) => task.id !== id);

    setTasks(deleteTask);

    Swal.fire({
      icon: "success",
      title: "Oops...",
      text: "succes delete data!",
    });

    localStorage.setItem("taskAdded", JSON.stringify(deleteTask));
  };

  // Mengubah data
  const editTask = (id) => {
    const nama = prompt("Your Name");
    const email = prompt("Email");
    const pekerjaan = prompt("Pekerjaan");
    const jabatan = prompt("Jabatan");
    const alamat = prompt("Address");
    const desc = prompt("Description");
    let data = JSON.parse(localStorage.getItem("taskAdded"));

    const myData = data.map((x) => {
      if (x.id === id) {
        return {
          ...x,
          nama: nama,
          email: email,
          pekerjaan: pekerjaan,
          jabatan: jabatan,
          alamat: alamat,
          desc: desc,
          id: uuidv4(),
        };
      }
      return x;
    });

    Swal.fire({
      icon: "success",
      title: "Yay...",
      text: "succes update data!",
    });

    console.log(myData);
    localStorage.setItem("taskAdded", JSON.stringify(myData));
    window.location.reload();
  };
  return (
    <>
      {loading ? (
        <div className="spinnerContainer">
          <div className="spinner-grow text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="container">
          {/* Halaman header */}
          <Header
            showForm={() => setShowAddTask(!showAddTask)}
            changeTextAndColor={showAddTask}
          />

          {/* Menambahkan data*/}
          {showAddTask && <Kartunama onSave={addTask} />}

          {/* menampilkan data */}
          {tasks.length > 0 ? (
            <Tasks tasks={tasks} onEdit={editTask} onDelete={deleteTask} />
          ) : (
            "Tidak ada data!"
          )}
        </div>
      )}
    </>
  );
};

export default Tampildata;
