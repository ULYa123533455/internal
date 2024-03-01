import React from "react";
import "../detail.css"

const JblDetail = (props) => {
  const { Jbl } = props;

  return (
    <div className="row">
      <div className="col-sm-6">
        <div id="card" className="card large">
          <img data-aos="zoom-in-up" data-aos-duration="200" src={Jbl.image} alt={Jbl.nama} className="rounded" />
          <section className="section-dark">
            <h2 data-aos="fade-right" data-aos-duration="200" className="strong">
              <strong>{Jbl.nama}</strong>
            </h2>
            <div data-aos="fade-right" data-aos-duration="300">
              <p>kapasitas baterai : {Jbl.cu}</p>
              <p>versi bluetooth : {Jbl.bf}</p>
              <p>deksripsi : {Jbl.core}</p>
              <p>lama pengisian : {Jbl.tu}</p>
              <p>waktu bermain musik : {Jbl.tc}</p>
              <p> kabel type: {Jbl.bw}</p>
              <p>kelebihan : {Jbl.pc}</p>
              <p>jumlah unit: {Jbl.vr}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default JblDetail;


