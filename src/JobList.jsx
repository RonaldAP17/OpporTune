import JobListItem from "./JobListItem";

function JobList() {
  return (
    <section className="job-list px-6 lg:px-2 md:col-span-1 space-y-4">
      <h2
        id="title"
        className="text-3xl font-medium font-sans text-center mt-3"
      >
        Mis postulaciones
      </h2>
        <JobListItem empresa="Amazon" rol="CEO" fecha="12/02/12" estado="Rechazado"/>
        <JobListItem empresa="Amazon" rol="CEO" fecha="12/02/12" estado="Rechazado"/>
        <JobListItem empresa="Amazon" rol="CEO" fecha="12/02/12" estado="Rechazado"/>
    </section>
  );
}

export default JobList;
