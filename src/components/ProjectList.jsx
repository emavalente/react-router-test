const ProjectList = ({ children }) => {
  return (
    <div className="mt-8 container grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-4">
      {children}
    </div>
  );
};

export default ProjectList;
