import React, { useEffect, useState } from "react";
import JblList from "./JblList";
import { JblAPI } from "./JblAPI";
import Project from "../Project";
import "../List.css"
import "./Jbl.css"

const JblPages = () => {
  const [GpuJbl, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [currentPage, setCurrentPage] = useState(1);

  const handleMoreClick = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  useEffect(() => {
    const loadProjects = async () => {
      setLoading(true);
      try {
        const data = await JblAPI.get(currentPage);
        if (currentPage === 1) {
          setProjects(data);
        } else {
          setProjects((GpuJbl) => [...GpuJbl, ...data]);
        }
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }
      } finally {
        setLoading(false);
      }
    };
    loadProjects();
  }, [currentPage]);

  const saveProject = (Jbl) => {
    JblAPI.put(Jbl).then((updatedProject) => {
      let updatedProjects = GpuJbl.map((p) =>
        p.id === Jbl.id ? new Project(updatedProject) : p
      );
      setProjects(updatedProjects);
    }).catch((e) => {
      if (e instanceof Error) {
        setError(e.message);
      }
    });
  };

  const deleteProject = (id) =>{
    JblAPI.delete(id)
    .then(() =>{
        setProjects(GpuJbl.filter((project) => project.id !== id))
    })
    .catch((error) => {
        setError(error.message)
    });
}
  return (
    <div className="Jbl">
      

      {error && (
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
      <div className="containerJbl">
        <h1 data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine">JBL WIRELESS</h1>
        <JblList onSave={saveProject} onDelete={deleteProject} GpuJbl={GpuJbl} />

        {!loading && !error && (
          <div className="row">
            <div className="col-sm-12">
              <div className="button-group fluid">
                <button className="button default" onClick={handleMoreClick}>
                  More...
                </button>
              </div>
            </div>
          </div>
        )}

        {loading && (
          <div className="center-page">
            <span className="spinner primary"></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default JblPages;