import React from "react";
import { Link } from "react-router-dom";
import "../List.css";

const JblCard = (props) => {
  const { Jbl, onEdit, onDelete } = props;

  const handleEditClick = (JblBeingEdited) => {
    onEdit(JblBeingEdited);
  };

  const handleDeleteClick = (Jbl) => {
    onDelete(Jbl.id);
  };

  return (
    <div data-aos="flip-left" data-aos-duration="350" className="whole">
      <div  className="card" id="pagecard">
        <img className="img" src={Jbl.image} alt={Jbl.nama} />
      </div>
      <section className="section">
      <Link className="kard" to={"/Jbl/" + Jbl.id}>
        <h3 className="strong">
          <strong>{Jbl.nama}</strong>
        </h3>
        <p>ketahanan baterai : {Jbl.bf}</p>
        <p>waktu bermain musik: {Jbl.vr}</p>
        <p>kabel type: {Jbl.bw}</p>
      </Link>
      <button className="bordered primary" onClick={() => handleEditClick(Jbl)}>
        <span className="icon-edit inverse"></span>
        Edit
      </button>
      <button className="bordered secondary" onClick={() => handleDeleteClick(Jbl)}>
        <span className="icon-alert inverse"></span>
        Delete
      </button>
    </section>
  </div>
  );
};

export default JblCard;
