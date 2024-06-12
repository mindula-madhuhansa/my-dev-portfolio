import { ChevronRightIcon } from "lucide-react";
import PropTypes from "prop-types";

const ProjectCard = ({ name, description, url, imgUrl }) => {
  return (
    <a
      href={url}
      className="flex items-center border-b py-8 px-2 rounded-md gap-4 group/item hover:bg-slate-100 mt-1"
    >
      <img
        src={imgUrl}
        alt={name}
        height={50}
        width={50}
        className="object-contain"
      />
      <div className="flex flex-col flex-grow">
        <p className="text-xl font-semibold group-hover/item:text-primary">
          {name}
        </p>
        <p className="text-secondary-foreground">{description}</p>
      </div>

      <ChevronRightIcon />
    </a>
  );
};

export default ProjectCard;

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};
