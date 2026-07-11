import React from "react";

const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          we love
        </h1>

        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-3xl font-bold tracking-widest">
              comfy
            </div>
          </div>
        </div>
      </div>

      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam eius
        iusto unde saepe necessitatibus. Dolores, possimus cumque ipsum
        repellendus quo illo autem eaque nihil sunt quibusdam eveniet nobis
        dolorem quaerat quos debitis ad! Deserunt nobis nihil fuga deleniti
        sequi molestias.
      </p>
    </>
  );
};

export default About;
