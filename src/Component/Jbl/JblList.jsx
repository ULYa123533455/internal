import React, { useState } from "react";
import JblCard from "./JblCard";
import JblForm from "./JblForm";

const JblList = ({ GpuJbl, onSave, onDelete }) => {
  const [projectBeingEdited, setProjectBeingEdited] = useState({});

  const handleEdit = (Jbl) => {
    setProjectBeingEdited(Jbl);
  };
  const handleDelete = (Jbl) => {
    onDelete(Jbl);
  };

  const cancelEditing = () => {
    setProjectBeingEdited({});
  };

  return (
    <div className="row">
      {GpuJbl.map((Jbl) => (
        <div key={Jbl.id} className="col-row">
          {Jbl === projectBeingEdited ? (
            <JblForm onSave={onSave} onCancel={cancelEditing} Jbl={Jbl} />
          ) : (
            <JblCard Jbl={Jbl} onEdit={handleEdit} onDelete={handleDelete} />
          )}
        </div>
      ))}
    </div>
  );
};

export default JblList;
