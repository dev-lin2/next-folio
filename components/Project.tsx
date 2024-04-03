type ProjectEntryProps = {
  image: string;
  name: string;
  description: string;
  link: string;
  skills: string[];
};

const ProjectEntry = ({ image, name, description, link, skills }: ProjectEntryProps) => (
  <div className="grid grid-cols-12 p-10">
    <div className="grid col-start-2 col-span-6">
      <div className="grid grid-cols-12">
        <img src={image} alt={name} className="w-40 h-40" />
      </div>
    </div>
  </div>
);

export default ProjectEntry;
