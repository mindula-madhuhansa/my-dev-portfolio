import { LinkedinIcon, AtSignIcon, GitBranch } from "lucide-react";

const Bio = () => {
  return (
    <section className="bg-white text-center md:text-left rounded-xl p-2 md:p-5 shadow-md">
      <img
        src="/profile-pic.JPG"
        alt="Mindula Madhuhansa"
        className="h-32 w-32 rounded-full object-cover mx-auto md:mx-0"
      />

      <h1 className="text-lg md:text-2xl font-bold mt-3">Mindula Madhuhansa</h1>
      <p className="text-secondary-foreground py-2">I&apos;m a Web Developer</p>

      <div className="flex flex-row justify-center md:justify-start gap-2 mt-2">
        <a
          href="https://www.linkedin.com/in/mindula-madhuhansa/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <LinkedinIcon className="text-blue-400 hover:text-blue-500 cursor-pointer" />
        </a>

        <a
          href="mailto:mimmindula@gmail.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <AtSignIcon className="text-pink-400 hover:text-pink-500 cursor-pointer" />
        </a>

        <a
          href="https://github.com/mindula-madhuhansa"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GitBranch className="text-red-400 hover:text-red-500 cursor-pointer" />
        </a>
      </div>
    </section>
  );
};

export default Bio;
