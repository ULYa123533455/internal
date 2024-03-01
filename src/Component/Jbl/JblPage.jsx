import React, {useEffect, useState} from "react";
import { JblAPI } from "./JblAPI";
import { useParams } from "react-router-dom";
import JblDetail from "./JblDetail";

const JblPage = (props) => {
    const [loading, setLoading] = useState(false)
    const [Jbl, setProject] = useState(null)
    const [error, setError] = useState(null)
    const params = useParams();
    const id = Number(params.id)

    useEffect(()=>{
        setLoading(true)
        JblAPI.find(id).then(data =>{
            setProject(data);
            setLoading(false);
        }).catch(e =>{
            setError(e);            
            setLoading(false);
        });
    }, [id]);

    return(
        <div>
            <h1 data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine"> Specification Detail</h1>
            {loading &&(
                <div className="center-page">
                    <span className="spinner primary"></span>
                    </div>
            )}

            {error &&(
                <div className="row">
                    <div className="card large error">
                        <section>
                            <p>
                                <span className="icon-alert inverse"></span>
                                {error}
                            </p>
                        </section>
                    </div>
                </div>
            )}
            {Jbl && <JblDetail Jbl={Jbl}/>}
        </div>
    )
}

export default JblPage