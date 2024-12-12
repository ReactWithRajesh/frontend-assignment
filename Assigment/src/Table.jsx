import React, { useEffect, useState } from 'react';

const API_URL = 'https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json';

const ProjectsTable = ({ activePage, pageSize }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchProjects();
  }, []);


  const startIndex = (activePage - 1) * pageSize;
  const currentProjects = projects?.slice(startIndex, startIndex + pageSize);

  return (
    <table>
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Percentage funded</th>
          <th>Amount pledged</th>
        </tr>
      </thead>
      <tbody>
        {currentProjects?.map((project, index) => (
          <tr key={index}>
            <td>{project['s.no']}</td>
            <td>{Math.round(project['percentage.funded'])}</td>
            <td>{Math.round(project['amt.pledged'])}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProjectsTable;
