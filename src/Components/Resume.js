import React from 'react';

const Resume = ({data}) => {
  if (data) {
    var skillmessage = data.skillmessage;

    var skills = data.skills.map (function (skills) {
      var className = 'bar-expand ' + skills.name.toLowerCase ();
      return (
        <li key={skills.name}>
          <span style={{width: skills.level}} className={className} />
          <em>{skills.name}</em>
        </li>
      );
    });
  }

  return (
    <section id="resume">
      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{skillmessage}</p>

          <div className="bars">
            <ul className="skills">{skills}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
