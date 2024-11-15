import React, { useEffect } from "react";
import data from "../../db.json";
import SkillCard from "../SkillCard/SkillCard";
import "./features.css";
import FeatureCard from "../SkillCard/SkillCard";

function Features() {
  console.log(data);

  return (
    <>
      <section className="container-fluid features  py-5  " id="skills">
        <h1 className="text-white text-center">Features</h1>
        <div className="row">
          <FeatureCard
          img="\Images\My image\12e8a6a547e317524121f7a5d6084036.gif"
            title="Face Search"
            description="Search anyone using their Face and get all the corresponding
              websites over which person's image is getting used"
          />
          <FeatureCard
            img="\Images\My image\12e8a6a547e317524121f7a5d6084036.gif"
            title="Contact Details"
            description="Get Email and Phone Number of an Individual using Name"
          />
          <FeatureCard
            img="\Images\My image\12e8a6a547e317524121f7a5d6084036.gif"
            title="GPT Research"
            description="Get to Know about someone their Name, Topics to Discuss with an customized poem"
          />
        </div>
      </section>
    </>
  );
}

export default Features;
