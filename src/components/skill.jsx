import Tag from "./tag";
import { skills } from "../constants/skills";

const Skills = () => {
  return (
    <section className="bg-white text-left rounded-xl p-2 md:p-5 shadow-md mt-6">
      <h2 className="text-lg md:text-2xl text-secondary-foreground mb-3 font-semibold text-center md:text-left">
        Skills
      </h2>

      <ul className="flex flex-wrap gap-1 leading-10">
        {skills.map((skill, index) => (
          <li key={index} className="mr-2">
            <Tag name={skill} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
