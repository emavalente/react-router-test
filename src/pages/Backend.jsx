import CardProject from "../components/CardProject";
import ProjectList from "../components/ProjectList";

const projects = [
  {
    id: 1,
    title: "Project One",
    image:
      "https://kinsta.com/wp-content/uploads/2021/11/back-end-developer-1024x512.png",
  },
  {
    id: 2,
    title: "Project Two",
    image:
      "https://kinsta.com/wp-content/uploads/2021/09/back-end-developer-salary-1024x512.jpg",
  },
  {
    id: 3,
    title: "Project Three",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhf6tQw8Bu8XptVFyAjyfsuJxk2MbFG8e7BiQB81sZY8ncrM3QKhs5x_YgtbJb-qgcp2g&usqp=CAU",
  },
  {
    id: 4,
    title: "Project Four",
    image:
      "https://ict-recruiter.nl/wp-content/uploads/2020/11/Recruitment-Software-Developer-Software-Engineer-werving-ict-vacatures-300x188.png",
  },
  {
    id: 5,
    title: "Project Five",
    image:
      "https://www.guvi.in/blog/wp-content/uploads/2023/02/JavaScript-animated-image-of-a-girl-on-a-laptop.jpeg",
  },
];

const Backend = () => {
  return (
    <>
      <h4>Backend Projects</h4>
      <ProjectList>
        {projects.map((project) => (
          <CardProject
            key={project.id}
            title={project.title}
            image={project.image}
          />
        ))}
      </ProjectList>
    </>
  );
};

export default Backend;
