import React from "react";
import { GpuJbllink } from './Data';
import "./List.css";

const Jbllink = () => {
    return(
        <div>
        <h1>Jbllink </h1>
        <ul className="ul">
            {Jbllink.map(item =>(
                <li className="li">
                    <p>{item.nama}</p>
                    <img src={item.image} alt="" />
                    <p>kapasitas baterai: {item.kb}</p>
                    <p> versi bluetooth: {item.vb}</p>
                    <p>deksripsi: {item.core}</p>
                    <p>lama pengisian: {item.tu}</p>
                    <p>waktu bermain musik: {item.tc}</p>
                    <p>tahan air: {item.vr}</p>
                    <p>kedap debu: {item.bw}</p>
                    <p>kabel type: {item.pc}</p>
                </li>
            ))}
        </ul>
    </div>
    )
}

export default Jbllink