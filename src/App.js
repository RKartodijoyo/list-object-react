import React from "react";
import "./styles.css";

class First extends React.Component {
  render() {
    const person = [
      { nama: "Rizaldi", pekerjaan: "Teknisi Listrik", hobi: "Basket" },
      { nama: "Irsan", pekerjaan: "Cleaning Services", hobi: "Futsal" },
      { nama: "Tukijo", pekerjaan: "Senior Technician", hobi: "Tidur" },
      { nama: "Bayu", pekerjaan: "Technician", hobi: "Main Game" }
    ];

    const listItems2 = person.map(d => (
      <h2>
        <pre>
          <li>
            {" "}
            Nama :&nbsp;{d.nama}
            &nbsp;&nbsp;&nbsp;&nbsp; Pekerjaan :&nbsp;{d.pekerjaan}
            &nbsp;&nbsp;&nbsp;&nbsp; Hobi :&nbsp;{d.hobi}
          </li>
        </pre>
      </h2>
    ));

    return <div>{listItems2}</div>;
  }
}
export default First;
