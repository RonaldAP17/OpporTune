function JobForm() {
  return (
    <section className="job-form md:col-span-1 flex flex-col items-center space-y-6 w-4/5 lg:w-1/2">
      <h2
        id="title"
        className="text-3xl font-medium font-sans text-center mt-3"
      >
        Add new application
      </h2>
      <div className="application-form-container border shadow-lg border-gray-300 rounded-md px-9 py-6 w-full lg:w-4/5">
        <form className="flex flex-col space-y-4" action="">
          <div className="space-y-2">
            <label className="font-medium text-xl" htmlFor="company">
              Company
            </label>
            <input
              className="block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 focus:ring-blue-500"
              id="company"
              type="text"
            />
          </div>

          <div className="space-y-2">
            <label className="font-medium text-xl" htmlFor="position">
              
              Position
            </label>
            <input
              className="block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 focus:ring-blue-500"
              id="position"
              type="text"
            />
          </div>

          <div className="space-y-2">
            <label className="font-medium text-xl" htmlFor="state">
              
              State
            </label>

            <select
              className="block w-full rounded-md border border-gray-300 py-2 pl-3 pr-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              id="state"
            >
              <option value="Applied">Applied</option>
              <option value="Interview">Interview</option>
              <option value="Closed">Closed</option>
            </select>
          </div>

          <button
            type="submit"
            id="changeTextButton"
            className="px-4 py-2 bg-blue-600 rounded-md font-bold text-white hover:bg-blue-700 w-full focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Add application
          </button>
        </form>
      </div>
    </section>
  );
}

export default JobForm;
