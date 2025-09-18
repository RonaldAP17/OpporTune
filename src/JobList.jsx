import JobListItem from "./JobListItem";

function JobList() {
  let applications = [
    { company: "Amazon",
      position: "CEO", 
      date: "12/02/12", 
      state: "Closed" },
    {
      company: "Netflix",
      position: "Product Owner",
      date: "12/04/24",
      state: "Applied",
    },
    {
      company: "Facebook",
      position: "Jr Frontend",
      date: "06/07/25",
      state: "Interview",
    },
  ];
  return (
    <section className="job-list px-6 lg:px-2 md:col-span-1 space-y-4">
      <h2
        id="title"
        className="text-3xl font-medium font-sans text-center mt-3"
      >
        My applications
      </h2>
      {applications.map((application) => (
          <JobListItem
            company={application.company}
            position={application.position}
            date={application.date}
            state={application.state}
          />
        ))}
    </section>
  );
}

export default JobList;
