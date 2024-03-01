import React, { useState } from "react";
import { JblAPI } from "./Jbl/JblAPI";

const Create = () => {
    const [nama, setNama] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [manufacturer, setManufacturer] = useState("");
    const [cu, setCU] = useState("");
    const [bf, setBF] = useState("");
    const [core, setCore] = useState("");
    const [tu, setTU] = useState("");
    const [tc, setTC] = useState("");
    const [vr, setVR] = useState("");
    const [bw, setBW] = useState("");
    const [pc, setPC] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let api;
            switch (manufacturer) {
              
              
                case "Jbl":
                    api = JblAPI;
                    break;
                default:
                    throw new Error("Invalid manufacturer");
            }

            await api.post({ nama, image, description, cu, bf, core, tu, tc, vr, bw, pc });
            
            switch (manufacturer) {
                case "Jbl":
                    window.location.href = "/Jbl";
                    break;
                default:
                    throw new Error("Invalid manufacturer");
            }
        } catch (error) {
            setError("An error occurred while creating the project. Please try again.");
            console.error(error);
        }
    };

    return (
        <div data-aos="fade-left" data-aos-duration="200">
            <h2 style={{color:'white'}}>Create New JBL</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>notes:</label>
                    <select className="shadowed" value={manufacturer} onChange={(e) => setManufacturer(e.target.value)}>
                        <option value="Jbl">Jbl</option>
                    </select>
                </div>
                <div>
                     <label>Name:</label>
                     <input className="shadowed" type="text" value={nama} onChange={(e) => setNama(e.target.value)} required />
                 </div>
                 <div>
                     <label>img url:</label>
                     <input className="shadowed" type="text" value={image} onChange={(e) => setImage(e.target.value)} required />
                 </div>
                 <div>
                     <label>ukuran:</label>
                     <input className="shadowed" type="number" value={cu} onChange={(e) => setCU(e.target.value)} required />
                 </div>
                 <div>
                     <label>lama pengisian:</label>
                     <input className="shadowed" type="text" value={bf} onChange={(e) => setBF(e.target.value)} required />
                 </div>
                 <div>
                     <label>waktu bermain musik:</label>
                     <input className="shadowed" type="number" value={core} onChange={(e) => setCore(e.target.value)} required />
                 </div>
                 <div>
                     <label>kelebihan:</label>
                     <input className="shadowed" type="number" value={tu} onChange={(e) => setTU(e.target.value)} required />
                 </div>
                 
                 <div>
                     <label>bluetooth profile :</label>
                     <input className="shadowed" type="text" value={vr} onChange={(e) => setVR(e.target.value)} required />
                 </div>
                 <div>
                     <label>fitur:</label>
                     <input className="shadowed" type="text" value={bw} onChange={(e) => setBW(e.target.value)} required />
                 </div>
                 <div>
                     <label>spefikasi audio:</label>
                     <input className="shadowed" type="text" value={pc} onChange={(e) => setPC(e.target.value)} required />
                 </div>
                <button type="submit" className="rounded primary shadowed">Submit</button>
                <button type="button" onClick={() => window.history.back()} className="rounded secondary shadowed">Cancel</button>
            </form>
        </div>
    );
};

export default Create;