import React, { useState } from "react";
import Project from "../Project";

const JblForm = ({ Jbl: initialProject, onSave, onCancel }) => {
  const [Jbl, setProject] = useState(initialProject);
  const [errors, setErrors] = useState({
    nama: "",
    cu: "",
    bf: "",
    core: "",
    tu: "",
    tc: "",
    vr: "",
    bw: "",
    pc: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValid()) return;
    onSave(Jbl);
  };

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;

    const updatedValue = type === "checkbox" ? checked : value;

    setProject((p) => new Project({ ...p, [name]: updatedValue }));
    setErrors(validate({ ...Jbl, [name]: updatedValue }));
  };

  const validate = (values) => {
    let newErrors = {};
    if (values.nama.trim() === "") {
      newErrors.nama = "Name is required";
    } else if (values.nama.length < 3) {
      newErrors.nama = "Name needs to be more than 3 characters";
    }



    return newErrors;
  };

  const isValid = () => {
    return Object.values(errors).every((error) => error === "");
  };

  return (
    <form className="input-group vertical" onSubmit={handleSubmit}>
      <label htmlFor="nama"> JBL Name </label>
      <input
        type="text"
        name="nama"
        placeholder="Enter Name"
        value={Jbl.nama}
        onChange={handleChange}
      />
      <span className="error">{errors.nama}</span>

      <label htmlFor="bf"> ketahanan baterai </label>
      <input
        type="text"
        name="bf"
        placeholder="Enter"
        value={Jbl.bf}
        onChange={handleChange}
      />
      <span className="error">{errors.bf}</span>

      <label htmlFor="tc">  </label>
      <input
        type="text"
        name="tc"
        placeholder="Enter versi bluetooth "
        value={Jbl.tc}
        onChange={handleChange}
      />
      <span className="error">{errors.tc}</span>

      <label htmlFor="vr"> deksripsi </label>
      <input
        type="text"
        name="vr"
        placeholder="Enter "
        value={Jbl.vr}
        onChange={handleChange}
      />
      <span className="error">{errors.vr}</span>

      <label htmlFor="bw"> lama pengisian </label>
      <input
        type="text"
        name="bw"
        placeholder="Enter lama pengisian"
        value={Jbl.bw}
        onChange={handleChange}
      />
      <span className="error">{errors.bw}</span>

      <label htmlFor="pc"> waktu bermain musik </label>
      <input
        type="text"
        name="pc"
        placeholder="Enter waktu bermain musik Version"
        value={Jbl.pc}
        onChange={handleChange}
      />
      <span className="error">{errors.pc}</span>

      <label htmlFor="cu"> kabel type</label>
      <input
        type="text"
        name="cu"
        placeholder="Enter "
        value={Jbl.cu}
        onChange={handleChange}
      />
      <span className="error">{errors.cu}</span>

      <label htmlFor="core">kelebihan </label>
      <input
        type="text"
        name="core"
        placeholder="Enter "
        value={Jbl.core}
        onChange={handleChange}
      />
      <span className="error">{errors.core}</span>

      <label htmlFor="tu"> jumlah unit</label>
      <input
        type="text"
        name="tu"
        placeholder="Enter jumlah unit"
        value={Jbl.tu}
        onChange={handleChange}
      />
      <span className="error">{errors.tu}</span>

      {/* Add similar blocks for other form inputs */}

      <div className="input-group">
        <button className="primary bordered medium">Save</button>
        <span />
        <button
          type="button"
          className="danger bordered medium"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default JblForm;
