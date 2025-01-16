import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import "./projects.css";

const Projects = () => {
    console.log('Projects component rendered!');
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    Swal.fire({
      title: 'Loading projects...',
      text: 'Please wait while I fetch my projects.',
      didOpen: () => {
        Swal.showLoading();
      },
    });
    fetch('https://api.github.com/users/Tshegohtml/repos')
      .then(response => {
        if (!response.ok) {
          return response.json().then(err => {
            throw new Error(err.message || 'Failed to fetch repositories');
          });
        }
        return response.json();
      })
      .then(data => {
        setRepos(data);
        Swal.close();
        Swal.fire({
          icon: 'success',
          title: 'Projects fetched!',
          text: 'My GitHub projects have been loaded successfully.',
        });
      })
      .catch(err => {
        Swal.close();
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.message || 'Something went wrong!',
        });
      });
  }, []);
    return(
        <section id="projects" className="projects">
            <h1>My projects</h1>
            <p>Here are my works hosted on Github</p>
            <div className="project-grid">
             {repos.map(repo => (
             <div key={repo.id} className="project-card">
                <h2>{repo.name}</h2>
                <p>{repo.description || 'I have not given a description for this project yet.'}</p>
              <div className="project-actions">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="btn-primary">
                 View on <b>Github</b>
                </a>
                {repo.homepage && (
                    <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                      Live Demo
                    </a>
                )}
                </div>
             </div>
             ))}
            </div>
        </section>
    );
};
export default Projects;