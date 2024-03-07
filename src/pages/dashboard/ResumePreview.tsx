import BreadHeader from "../../components/dashboard/BreadHeader";
import MainDashboard from "../../components/dashboard/MainDashboard";

const ResumePreview = () => {
  return (
    <MainDashboard>
      <div>
        <BreadHeader
          home="Job Tracker"
          title="RELEVANCY SCORE"
          description="Here's What We have today"
        />
        <div className="flex justify-between items-start">
          <div className="flex flex-col w-1/2 space-y-8 pr-4">
            <div>
              <h2 className="text-lg font-semibold mb-2">RELEVANCY SCORE</h2>
              <div className="flex items-center justify-between">
                <div className="w-32 h-32 rounded-full border-4 border-green-500 flex items-center justify-center font-bold text-2xl">
                  69
                </div>
                <div className="flex-1 ml-4">
                  <p className="text-sm text-gray-600">
                    Needs improvement. Your resume is missing keywords and is
                    not well targeted to the job description. This could result
                    in your resume not getting past automated screening software
                    and recruiters.
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    But don't worry! We've outlined the important skills below
                    to include into your resume. You should aim for a score of
                    at least 70.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex space-x-2 mb-4">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-purple-500 border-purple-500">
                  MISSING KEYWORDS
                </button>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                  FOUND KEYWORDS
                </button>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                We found the following keywords and skills in the job
                description that were not found on your resume. If you have
                these skills, add them into your resume to increase your
                relevancy score. For example, you can add them to your work
                experiences or skills section. They've been highlighted on the
                right so you can understand the context. You can also exclude
                skills that you know aren't relevant to the job.
              </p>
              <div className="mt-4">
                <div className="relative w-full overflow-auto">
                  <table className="w-full caption-bottom text-sm">
                    <tbody className="[&_tr:last-child]:border-0">
                      <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">
                          Design
                        </td>
                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                          3
                        </td>
                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5 text-yellow-400"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </td>
                      </tr>
                      <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">
                          Languages
                        </td>
                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                          3
                        </td>
                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0" />
                      </tr>
                      <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">
                          Software Development
                        </td>
                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                          2
                        </td>
                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0" />
                      </tr>
                      <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">
                          Information Retrieval
                        </td>
                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                          2
                        </td>
                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0" />
                      </tr>
                      <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">
                          Web
                        </td>
                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                          2
                        </td>
                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0" />
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 bg-white p-4 rounded-lg shadow-lg">
            <div className="flex justify-between mb-4">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                Home
              </button>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                Re-upload resume
              </button>
            </div>
            <div className="flex space-x-4 mb-4">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                JOB DESCRIPTION
              </button>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                YOUR RESUME
              </button>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                CHANGES
              </button>
            </div>
            <div className="overflow-y-auto h-[500px]">
              <h3 className="font-bold mb-2">"Software Engineer"</h3>
              <p className="text-sm text-gray-600 mb-2">
                Google Palo Alto, CA, USA
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Qualifications:</h4>
                  <p className="text-sm text-gray-600">
                    Minimum qualifications:
                  </p>
                  <p className="text-sm text-gray-600">
                    BS degree in{" "}
                    <span className="bg-lime-200">Computer Science</span>,
                    similar technical field of study or equivalent practical
                    experience.
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="bg-lime-200">Software</span> development
                    experience in one or more{" "}
                    <span className="bg-lime-200">general</span> purpose{" "}
                    <span className="bg-lime-200">programming</span> languages.
                  </p>
                  <p className="text-sm text-gray-600">
                    Experience working with two or more from the following:{" "}
                    <span className="bg-lime-200">web</span> application{" "}
                    <span className="bg-lime-200">development</span>, Unix/Linux
                    environments, <span className="bg-lime-200">mobile</span>{" "}
                    application <span className="bg-lime-200">development</span>
                    , distributed and parallel systems, machine learning,
                    information retrieval, natural language processing,
                    networking, developing large{" "}
                    <span className="bg-lime-200">software</span> systems,
                    and/or security
                  </p>
                  <p className="text-sm text-gray-600">
                    Working proficiency and communication skills in verbal and
                    written <span className="bg-lime-200">English</span>.
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">
                    Preferred qualifications:
                  </p>
                  <p className="text-sm text-gray-600">
                    Master's, PhD degree, further education or experience in{" "}
                    <span className="bg-lime-200">engineering</span>,{" "}
                    <span className="bg-lime-200">computer</span> science or
                    other technical related field.
                  </p>
                  <p className="text-sm text-gray-600">
                    Experience with one or more{" "}
                    <span className="bg-lime-200">general</span> purpose{" "}
                    <span className="bg-lime-200">programming</span> languages
                    including but not limited to: Java, C/C++, C#, Objective C,
                    Python, JavaScript, or Go.
                  </p>
                  <p className="text-sm text-gray-600">
                    Experience developing accessible{" "}
                    <span className="bg-lime-200">technologies</span>.
                  </p>
                  <p className="text-sm text-gray-600">
                    Interest and ability to learn other{" "}
                    <span className="bg-lime-200">coding</span> languages as
                    needed.
                  </p>
                </div>
                <p className="text-sm text-gray-600">About the job</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainDashboard>
  );
};
export default ResumePreview;
