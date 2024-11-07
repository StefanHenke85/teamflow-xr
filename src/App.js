import React, { useEffect, useState } from 'react';
import { fetchProjects } from './services/api';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects().then(data => setProjects(data));
  }, []);

  return (
    <div>
      <h1>TeamFlow XR - Projekte</h1>
      <ul>
        {projects.map(project => (
          <li key={project._id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
