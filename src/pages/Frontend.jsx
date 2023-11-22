import CardProject from "../components/CardProject";
import ProjectList from "../components/ProjectList";

const projects = [
  {
    id: 1,
    title: "Project One",
    image:
      "https://toggl.com/blog/wp-content/uploads/2021/05/how-to-create-a-website-project-plan.jpg",
  },
  {
    id: 2,
    title: "Project Two",
    image:
      "https://toggl.com/blog/wp-content/uploads/2021/05/how-to-create-a-website-project-plan.jpg",
  },
  {
    id: 3,
    title: "Project Three",
    image:
      "https://toggl.com/blog/wp-content/uploads/2021/05/how-to-create-a-website-project-plan.jpg",
  },
  {
    id: 4,
    title: "Project Four",
    image:
      "https://toggl.com/blog/wp-content/uploads/2021/05/how-to-create-a-website-project-plan.jpg",
  },
  {
    id: 5,
    title: "Project Five",
    image:
      "https://toggl.com/blog/wp-content/uploads/2021/05/how-to-create-a-website-project-plan.jpg",
  },
  {
    id: 6,
    title: "Project Six",
    image:
      "https://toggl.com/blog/wp-content/uploads/2021/05/how-to-create-a-website-project-plan.jpg",
  },
];

const Frontend = () => {
  return (
    <>
      <h4>Frontend Projects</h4>
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

export default Frontend;
