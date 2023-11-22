import React from "react";

const CardProject = ({ title, image }) => {
  return (
    <div className="flex flex-col bg-blue-800 overflow-hidden rounded-md shadow-md">
      <div>
        <img src={image} alt={`${title} image`} />
      </div>
      <div className="p-4">
        <h3 className="mb-2 text-lg font-bold">{title}</h3>
        <p>
          Lorem dolor sit amet consectetur adipisicing elit. Eligendi illo sequi
          earum delectus maxime nisi iste voluptatibus nihil accusamus deserunt
          obcaecati quas ab eaque, omnis dicta nesciunt dolores saepe ipsa!
        </p>
      </div>
    </div>
  );
};

export default CardProject;
