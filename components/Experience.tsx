type ExperienceEntryProps = {
  dateRange: string;
  employerName: string;
  jobTitle: string;
  description: string;
};

const ExperienceEntry = ({ dateRange, employerName, jobTitle, description }: ExperienceEntryProps) => (
  <div className="grid grid-cols-12 p-10 gap-8">
    <div className="col-start-2 col-span-4">
      <div className="text-right font-sans pt-1">{dateRange}</div>
    </div>
    <div className="col-span-6 font-sans space-y-2">
      <div className="font-semibold text-lg">{employerName}</div>
      <div className="font-semibold italic">{jobTitle}</div>
      <p className="text-sm leading-snug tracking-wide">{description}</p>
    </div>
  </div>
);

export default ExperienceEntry;
