import ExperienceEntry from "./Experience";

const Experiences = () => {
  return (
    <div className="bg-gray-200 py-10">
      <h2 className="text-3xl text-center font-mono">Experiences</h2>
      <div className="">
        <ExperienceEntry
          dateRange="September 2015 - September 2016"
          employerName="Employer Name"
          jobTitle="Job Title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in lacus ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam laoreet placerat."
        />
        <ExperienceEntry
          dateRange="September 2015 - September 2016"
          employerName="Employer Name"
          jobTitle="Job Title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in lacus ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam laoreet placerat."
        />
      </div>
    </div>
  );
};

export default Experiences;
