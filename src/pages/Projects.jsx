import { Link, Outlet } from "react-router-dom";

const Projects = () => {
  return (
    <section className="container max-w-[780px] mx-auto text-white">
      <h2 className="mb-8 text-red-700 text-2xl font-semibold">Projects</h2>
      <nav>
        <ul className="mb-4 flex gap-4 ">
          <li>
            <Link
              to="/projects/frontend"
              className="text-orange-600 text-lg hover:text-orange-400 transition-colors"
            >
              Frontend
            </Link>
          </li>
          <li>
            <Link
              to="/projects/backend"
              className="text-orange-600 text-lg hover:text-orange-400 transition-colors"
            >
              Backend
            </Link>
          </li>
        </ul>
      </nav>
      <article className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
        maxime aut ipsum sequi inventore voluptatem quia. Sint!
      </article>
      <Outlet />
    </section>
  );
};

export default Projects;
