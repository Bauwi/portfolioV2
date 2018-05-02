export const filterProjects = (filter, projects) => {
  if (filter === 'TOP') {
    return projects.filter(project => project.top);
  } else if (filter === 'MORE') {
    return projects.filter(project => !project.top);
  }
  return projects;
};
