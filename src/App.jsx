import JobForm from "./JobForm";
import JobList from "./JobList";
import Nav from "./Nav";

function App() {
  return (
    <>
    <Nav/>
    <div className="main-container flex justify-center">
      <JobForm/>
      <JobList/>
    </div>
    </>

  );
}

export default App
