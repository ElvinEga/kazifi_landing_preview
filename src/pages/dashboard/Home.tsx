import BreadHeader from "../../components/dashboard/BreadHeader";
import MainDashboard from "../../components/dashboard/MainDashboard";

const HomeDashboard = () => {
  return (
    <MainDashboard>
      <div>
        <BreadHeader
          home="Home"
          title="Hello John Doe"
          description="Here's What We have today"
        />
        <div className="bg-white p-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
              <div className="mb-6">
                <h2 className="text-lg font-semibold">
                  Next Career Goal: Land a new job
                </h2>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-sm">
                  Edit Goals
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="rounded-lg border bg-card text-card-foreground shadow-sm col-span-1"
                  data-v0-t="card"
                >
                  <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                      Job Applications
                    </h3>
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
                      className="text-gray-400"
                    >
                      <circle cx={12} cy={12} r={10} />
                      <path d="M12 16v-4" />
                      <path d="M12 8h.01" />
                    </svg>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-center">
                      <div className="w-32 h-32">
                        <div style={{ width: "100%", height: "100%" }}>
                          <div style={{ position: "relative" }}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={128}
                              height={128}
                              role="application"
                              aria-label="A grouped bar chart"
                              focusable="false"
                            >
                              <rect
                                width={128}
                                height={128}
                                fill="transparent"
                              />
                              <g transform="translate(40,0)">
                                <g>
                                  <line
                                    opacity={1}
                                    x1={0}
                                    x2={88}
                                    y1={88}
                                    y2={88}
                                    stroke="#f3f4f6"
                                    strokeWidth={1}
                                  />
                                  <line
                                    opacity={1}
                                    x1={0}
                                    x2={88}
                                    y1={64}
                                    y2={64}
                                    stroke="#f3f4f6"
                                    strokeWidth={1}
                                  />
                                  <line
                                    opacity={1}
                                    x1={0}
                                    x2={88}
                                    y1={41}
                                    y2={41}
                                    stroke="#f3f4f6"
                                    strokeWidth={1}
                                  />
                                  <line
                                    opacity={1}
                                    x1={0}
                                    x2={88}
                                    y1={17}
                                    y2={17}
                                    stroke="#f3f4f6"
                                    strokeWidth={1}
                                  />
                                </g>
                                <g transform="translate(0,88)">
                                  <g
                                    transform="translate(12,0)"
                                    style={{ opacity: 1 }}
                                  >
                                    <line
                                      x1={0}
                                      x2={0}
                                      y1={0}
                                      y2={0}
                                      style={{
                                        stroke: "rgb(119, 119, 119)",
                                        strokeWidth: 1,
                                      }}
                                    />
                                    <text
                                      dominantBaseline="text-before-edge"
                                      textAnchor="middle"
                                      transform="translate(0,16) rotate(0)"
                                      style={{
                                        fontFamily: "sans-serif",
                                        fontSize: 11,
                                        fill: "rgb(51, 51, 51)",
                                        outlineWidth: 0,
                                        outlineColor: "transparent",
                                      }}
                                    >
                                      Jan
                                    </text>
                                  </g>
                                  <g
                                    transform="translate(25,0)"
                                    style={{ opacity: 1 }}
                                  >
                                    <line
                                      x1={0}
                                      x2={0}
                                      y1={0}
                                      y2={0}
                                      style={{
                                        stroke: "rgb(119, 119, 119)",
                                        strokeWidth: 1,
                                      }}
                                    />
                                    <text
                                      dominantBaseline="text-before-edge"
                                      textAnchor="middle"
                                      transform="translate(0,16) rotate(0)"
                                      style={{
                                        fontFamily: "sans-serif",
                                        fontSize: 11,
                                        fill: "rgb(51, 51, 51)",
                                        outlineWidth: 0,
                                        outlineColor: "transparent",
                                      }}
                                    >
                                      Feb
                                    </text>
                                  </g>
                                  <g
                                    transform="translate(38,0)"
                                    style={{ opacity: 1 }}
                                  >
                                    <line
                                      x1={0}
                                      x2={0}
                                      y1={0}
                                      y2={0}
                                      style={{
                                        stroke: "rgb(119, 119, 119)",
                                        strokeWidth: 1,
                                      }}
                                    />
                                    <text
                                      dominantBaseline="text-before-edge"
                                      textAnchor="middle"
                                      transform="translate(0,16) rotate(0)"
                                      style={{
                                        fontFamily: "sans-serif",
                                        fontSize: 11,
                                        fill: "rgb(51, 51, 51)",
                                        outlineWidth: 0,
                                        outlineColor: "transparent",
                                      }}
                                    >
                                      Mar
                                    </text>
                                  </g>
                                  <g
                                    transform="translate(51,0)"
                                    style={{ opacity: 1 }}
                                  >
                                    <line
                                      x1={0}
                                      x2={0}
                                      y1={0}
                                      y2={0}
                                      style={{
                                        stroke: "rgb(119, 119, 119)",
                                        strokeWidth: 1,
                                      }}
                                    />
                                    <text
                                      dominantBaseline="text-before-edge"
                                      textAnchor="middle"
                                      transform="translate(0,16) rotate(0)"
                                      style={{
                                        fontFamily: "sans-serif",
                                        fontSize: 11,
                                        fill: "rgb(51, 51, 51)",
                                        outlineWidth: 0,
                                        outlineColor: "transparent",
                                      }}
                                    >
                                      Apr
                                    </text>
                                  </g>
                                  <g
                                    transform="translate(64,0)"
                                    style={{ opacity: 1 }}
                                  >
                                    <line
                                      x1={0}
                                      x2={0}
                                      y1={0}
                                      y2={0}
                                      style={{
                                        stroke: "rgb(119, 119, 119)",
                                        strokeWidth: 1,
                                      }}
                                    />
                                    <text
                                      dominantBaseline="text-before-edge"
                                      textAnchor="middle"
                                      transform="translate(0,16) rotate(0)"
                                      style={{
                                        fontFamily: "sans-serif",
                                        fontSize: 11,
                                        fill: "rgb(51, 51, 51)",
                                        outlineWidth: 0,
                                        outlineColor: "transparent",
                                      }}
                                    >
                                      May
                                    </text>
                                  </g>
                                  <g
                                    transform="translate(77,0)"
                                    style={{ opacity: 1 }}
                                  >
                                    <line
                                      x1={0}
                                      x2={0}
                                      y1={0}
                                      y2={0}
                                      style={{
                                        stroke: "rgb(119, 119, 119)",
                                        strokeWidth: 1,
                                      }}
                                    />
                                    <text
                                      dominantBaseline="text-before-edge"
                                      textAnchor="middle"
                                      transform="translate(0,16) rotate(0)"
                                      style={{
                                        fontFamily: "sans-serif",
                                        fontSize: 11,
                                        fill: "rgb(51, 51, 51)",
                                        outlineWidth: 0,
                                        outlineColor: "transparent",
                                      }}
                                    >
                                      Jun
                                    </text>
                                  </g>
                                  <line
                                    style={{
                                      stroke: "transparent",
                                      strokeWidth: 1,
                                    }}
                                    x1={0}
                                    x2={88}
                                    y1={0}
                                    y2={0}
                                  />
                                </g>
                                <g transform="translate(0,0)">
                                  <g
                                    transform="translate(0,88)"
                                    style={{ opacity: 1 }}
                                  >
                                    <line
                                      x1={0}
                                      x2={0}
                                      y1={0}
                                      y2={0}
                                      style={{
                                        stroke: "rgb(119, 119, 119)",
                                        strokeWidth: 1,
                                      }}
                                    />
                                    <text
                                      dominantBaseline="central"
                                      textAnchor="end"
                                      transform="translate(-16,0) rotate(0)"
                                      style={{
                                        fontFamily: "sans-serif",
                                        fontSize: 11,
                                        fill: "rgb(51, 51, 51)",
                                        outlineWidth: 0,
                                        outlineColor: "transparent",
                                      }}
                                    >
                                      0
                                    </text>
                                  </g>
                                  <g
                                    transform="translate(0,64)"
                                    style={{ opacity: 1 }}
                                  >
                                    <line
                                      x1={0}
                                      x2={0}
                                      y1={0}
                                      y2={0}
                                      style={{
                                        stroke: "rgb(119, 119, 119)",
                                        strokeWidth: 1,
                                      }}
                                    />
                                    <text
                                      dominantBaseline="central"
                                      textAnchor="end"
                                      transform="translate(-16,0) rotate(0)"
                                      style={{
                                        fontFamily: "sans-serif",
                                        fontSize: 11,
                                        fill: "rgb(51, 51, 51)",
                                        outlineWidth: 0,
                                        outlineColor: "transparent",
                                      }}
                                    >
                                      50
                                    </text>
                                  </g>
                                  <g
                                    transform="translate(0,41)"
                                    style={{ opacity: 1 }}
                                  >
                                    <line
                                      x1={0}
                                      x2={0}
                                      y1={0}
                                      y2={0}
                                      style={{
                                        stroke: "rgb(119, 119, 119)",
                                        strokeWidth: 1,
                                      }}
                                    />
                                    <text
                                      dominantBaseline="central"
                                      textAnchor="end"
                                      transform="translate(-16,0) rotate(0)"
                                      style={{
                                        fontFamily: "sans-serif",
                                        fontSize: 11,
                                        fill: "rgb(51, 51, 51)",
                                        outlineWidth: 0,
                                        outlineColor: "transparent",
                                      }}
                                    >
                                      100
                                    </text>
                                  </g>
                                  <g
                                    transform="translate(0,17)"
                                    style={{ opacity: 1 }}
                                  >
                                    <line
                                      x1={0}
                                      x2={0}
                                      y1={0}
                                      y2={0}
                                      style={{
                                        stroke: "rgb(119, 119, 119)",
                                        strokeWidth: 1,
                                      }}
                                    />
                                    <text
                                      dominantBaseline="central"
                                      textAnchor="end"
                                      transform="translate(-16,0) rotate(0)"
                                      style={{
                                        fontFamily: "sans-serif",
                                        fontSize: 11,
                                        fill: "rgb(51, 51, 51)",
                                        outlineWidth: 0,
                                        outlineColor: "transparent",
                                      }}
                                    >
                                      150
                                    </text>
                                  </g>
                                  <line
                                    style={{
                                      stroke: "transparent",
                                      strokeWidth: 1,
                                    }}
                                    x1={0}
                                    x2={0}
                                    y1={0}
                                    y2={88}
                                  />
                                </g>
                                <g transform="translate(7, 36)">
                                  <rect
                                    width="0.10185679488536094"
                                    height={52}
                                    rx={0}
                                    ry={0}
                                    fill="#2563eb"
                                    strokeWidth={0}
                                    stroke="#2563eb"
                                    focusable="false"
                                  />
                                </g>
                                <g transform="translate(20, 14)">
                                  <rect
                                    width="0.10185679488536094"
                                    height={74}
                                    rx={0}
                                    ry={0}
                                    fill="#2563eb"
                                    strokeWidth={0}
                                    stroke="#2563eb"
                                    focusable="false"
                                  />
                                </g>
                                <g transform="translate(33, 27)">
                                  <rect
                                    width="0.10185679488536094"
                                    height={61}
                                    rx={0}
                                    ry={0}
                                    fill="#2563eb"
                                    strokeWidth={0}
                                    stroke="#2563eb"
                                    focusable="false"
                                  />
                                </g>
                                <g transform="translate(46, 0)">
                                  <rect
                                    width="0.10185679488536094"
                                    height={88}
                                    rx={0}
                                    ry={0}
                                    fill="#2563eb"
                                    strokeWidth={0}
                                    stroke="#2563eb"
                                    focusable="false"
                                  />
                                </g>
                                <g transform="translate(59, 32)">
                                  <rect
                                    width="0.10185679488536094"
                                    height={56}
                                    rx={0}
                                    ry={0}
                                    fill="#2563eb"
                                    strokeWidth={0}
                                    stroke="#2563eb"
                                    focusable="false"
                                  />
                                </g>
                                <g transform="translate(72, 79)">
                                  <rect
                                    width="0.10185679488536094"
                                    height={9}
                                    rx={0}
                                    ry={0}
                                    fill="#2563eb"
                                    strokeWidth={0}
                                    stroke="#2563eb"
                                    focusable="false"
                                  />
                                </g>
                                <g transform="translate(11.5, 41)">
                                  <rect
                                    width="0.10185679488536094"
                                    height={47}
                                    rx={0}
                                    ry={0}
                                    fill="#e11d48"
                                    strokeWidth={0}
                                    stroke="#e11d48"
                                    focusable="false"
                                  />
                                </g>
                                <g transform="translate(24.5, 47)">
                                  <rect
                                    width="0.10185679488536094"
                                    height={41}
                                    rx={0}
                                    ry={0}
                                    fill="#e11d48"
                                    strokeWidth={0}
                                    stroke="#e11d48"
                                    focusable="false"
                                  />
                                </g>
                                <g transform="translate(37.5, 46)">
                                  <rect
                                    width="0.10185679488536094"
                                    height={42}
                                    rx={0}
                                    ry={0}
                                    fill="#e11d48"
                                    strokeWidth={0}
                                    stroke="#e11d48"
                                    focusable="false"
                                  />
                                </g>
                                <g transform="translate(50.5, 17)">
                                  <rect
                                    width="0.10185679488536094"
                                    height={71}
                                    rx={0}
                                    ry={0}
                                    fill="#e11d48"
                                    strokeWidth={0}
                                    stroke="#e11d48"
                                    focusable="false"
                                  />
                                </g>
                                <g transform="translate(63.5, 28)">
                                  <rect
                                    width="0.10185679488536094"
                                    height={60}
                                    rx={0}
                                    ry={0}
                                    fill="#e11d48"
                                    strokeWidth={0}
                                    stroke="#e11d48"
                                    focusable="false"
                                  />
                                </g>
                                <g transform="translate(76.5, 31)">
                                  <rect
                                    width="0.10185679488536094"
                                    height={57}
                                    rx={0}
                                    ry={0}
                                    fill="#e11d48"
                                    strokeWidth={0}
                                    stroke="#e11d48"
                                    focusable="false"
                                  />
                                </g>
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-center text-sm text-gray-500">
                      1 application remaining to meet your weekly goal of 2
                    </p>
                  </div>
                </div>
                <div className="col-span-1">
                  <h3 className="text-lg font-semibold mb-2">
                    Job Search Pipeline
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Displaying results: 01/04/2023 - 01/17/2023
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Bookmarked</span>
                      <div className="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                        12
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Applied</span>
                      <div className="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                        2
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Interviewing</span>
                      <div className="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                        1
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Negotiating</span>
                      <div className="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                        0
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Priorities</h3>
                <div className="bg-gray-100 p-4 rounded-md">
                  <p className="text-sm">Content Marketing Manager (remote)</p>
                  <p className="text-sm text-gray-500">SUSE</p>
                  <div
                    aria-valuemax={100}
                    aria-valuemin={0}
                    role="progressbar"
                    data-state="indeterminate"
                    data-max={100}
                    className="relative h-2 overflow-hidden rounded-full bg-primary/20 w-full mt-2"
                  >
                    <div
                      data-state="indeterminate"
                      data-max={100}
                      className="h-full w-full flex-1 bg-primary transition-all"
                      style={{ transform: "translateX(-100%)" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold">Dates</h3>
                <div className="rdp p-3 rounded-md border mt-2">
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0">
                    <div className="space-y-4 rdp-caption_start rdp-caption_end">
                      <div className="flex justify-center pt-1 relative items-center">
                        <div
                          className="text-sm font-medium"
                          aria-live="polite"
                          role="presentation"
                          id="react-day-picker-13"
                        >
                          March 2024
                        </div>
                        <div className="space-x-1 flex items-center">
                          <button
                            name="previous-month"
                            aria-label="Go to previous month"
                            className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute left-1"
                            type="button"
                          >
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
                              className="h-4 w-4"
                            >
                              <path d="m15 18-6-6 6-6" />
                            </svg>
                          </button>
                          <button
                            name="next-month"
                            aria-label="Go to next month"
                            className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute right-1"
                            type="button"
                          >
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
                              className="h-4 w-4"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <table
                        className="w-full border-collapse space-y-1"
                        role="grid"
                        aria-labelledby="react-day-picker-13"
                      >
                        <thead className="rdp-head">
                          <tr className="flex">
                            <th
                              scope="col"
                              className="text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]"
                              aria-label="Sunday"
                            >
                              Su
                            </th>
                            <th
                              scope="col"
                              className="text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]"
                              aria-label="Monday"
                            >
                              Mo
                            </th>
                            <th
                              scope="col"
                              className="text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]"
                              aria-label="Tuesday"
                            >
                              Tu
                            </th>
                            <th
                              scope="col"
                              className="text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]"
                              aria-label="Wednesday"
                            >
                              We
                            </th>
                            <th
                              scope="col"
                              className="text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]"
                              aria-label="Thursday"
                            >
                              Th
                            </th>
                            <th
                              scope="col"
                              className="text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]"
                              aria-label="Friday"
                            >
                              Fr
                            </th>
                            <th
                              scope="col"
                              className="text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]"
                              aria-label="Saturday"
                            >
                              Sa
                            </th>
                          </tr>
                        </thead>
                        <tbody className="rdp-tbody">
                          <tr className="flex w-full mt-2">
                            <td
                              className="text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100 text-muted-foreground opacity-50"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                25
                              </button>
                            </td>
                            <td
                              className="text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100 text-muted-foreground opacity-50"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                26
                              </button>
                            </td>
                            <td
                              className="text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100 text-muted-foreground opacity-50"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                27
                              </button>
                            </td>
                            <td
                              className="text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100 text-muted-foreground opacity-50"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                28
                              </button>
                            </td>
                            <td
                              className="text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100 text-muted-foreground opacity-50"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                29
                              </button>
                            </td>
                            <td
                              className="text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100 bg-accent text-accent-foreground"
                                role="gridcell"
                                tabIndex={0}
                                type="button"
                              >
                                1
                              </button>
                            </td>
                            <td
                              className="text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                2
                              </button>
                            </td>
                          </tr>
                          <tr className="flex w-full mt-2">
                            <td
                              className="text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                3
                              </button>
                            </td>
                            <td
                              className="text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                4
                              </button>
                            </td>
                            <td
                              className="text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                5
                              </button>
                            </td>
                            <td
                              className="text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                6
                              </button>
                            </td>
                            <td
                              className="text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                7
                              </button>
                            </td>
                            <td
                              className="text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                8
                              </button>
                            </td>
                            <td
                              className="text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                9
                              </button>
                            </td>
                          </tr>
                          <tr className="flex w-full mt-2">
                            <td
                              className="text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                10
                              </button>
                            </td>
                            <td
                              className="text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                11
                              </button>
                            </td>
                            <td
                              className="text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                12
                              </button>
                            </td>
                            <td
                              className="text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                13
                              </button>
                            </td>
                            <td
                              className="text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                14
                              </button>
                            </td>
                            <td
                              className="text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                15
                              </button>
                            </td>
                            <td
                              className="text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                16
                              </button>
                            </td>
                          </tr>
                          <tr className="flex w-full mt-2">
                            <td
                              className="text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                17
                              </button>
                            </td>
                            <td
                              className="text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                18
                              </button>
                            </td>
                            <td
                              className="text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                19
                              </button>
                            </td>
                            <td
                              className="text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                20
                              </button>
                            </td>
                            <td
                              className="text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                21
                              </button>
                            </td>
                            <td
                              className="text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                22
                              </button>
                            </td>
                            <td
                              className="text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                23
                              </button>
                            </td>
                          </tr>
                          <tr className="flex w-full mt-2">
                            <td
                              className="text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                24
                              </button>
                            </td>
                            <td
                              className="text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                25
                              </button>
                            </td>
                            <td
                              className="text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                26
                              </button>
                            </td>
                            <td
                              className="text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                27
                              </button>
                            </td>
                            <td
                              className="text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                28
                              </button>
                            </td>
                            <td
                              className="text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                29
                              </button>
                            </td>
                            <td
                              className="text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                30
                              </button>
                            </td>
                          </tr>
                          <tr className="flex w-full mt-2">
                            <td
                              className="text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                31
                              </button>
                            </td>
                            <td
                              className="text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100 text-muted-foreground opacity-50"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                1
                              </button>
                            </td>
                            <td
                              className="text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100 text-muted-foreground opacity-50"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                2
                              </button>
                            </td>
                            <td
                              className="text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100 text-muted-foreground opacity-50"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                3
                              </button>
                            </td>
                            <td
                              className="text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100 text-muted-foreground opacity-50"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                4
                              </button>
                            </td>
                            <td
                              className="text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100 text-muted-foreground opacity-50"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                5
                              </button>
                            </td>
                            <td
                              className="text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100 text-muted-foreground opacity-50"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                6
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold">Top 10 Skills in Jobs</h3>
                <div className="space-y-2 mt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Marketing</span>
                    <div className="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                      107
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">SEO</span>
                    <div className="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                      92
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Content Marketing</span>
                    <div className="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                      87
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Social</span>
                    <div className="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                      85
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Social Media</span>
                    <div className="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                      78
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Ads</span>
                    <div className="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                      77
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Strategy</span>
                    <div className="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                      76
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Blog</span>
                    <div className="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                      70
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Engagement</span>
                    <div className="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                      65
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainDashboard>
  );
};
export default HomeDashboard;
