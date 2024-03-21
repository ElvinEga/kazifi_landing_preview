import React from "react";

const ProfilePage: React.FC = () => {
  const extract = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      // @ts-ignore
      chrome.tabs.sendMessage(activeTab.id, { message: "extract" });
    });
    console.log("Extract");
    const jobDetailsContainer = document.querySelector(
      ".job-details-jobs-unified-top-card__container--two-pane"
    );
    const titleElement = jobDetailsContainer?.querySelector(
      ".job-details-jobs-unified-top-card__job-title"
    );
    const title = titleElement ? titleElement.textContent?.trim() || "" : "";
    const companyLocationElement = jobDetailsContainer?.querySelector(
      ".job-details-jobs-unified-top-card__primary-description-container"
    );
    const companyLocationText = companyLocationElement
      ? companyLocationElement.textContent?.trim() || ""
      : "";
    const [companyName, location, datePosted] =
      companyLocationText.split(" · ");
    const jobDetailsElement = jobDetailsContainer?.querySelector(
      ".job-details-jobs-unified-top-card__job-insight.job-details-jobs-unified-top-card__job-insight--highlight"
    );
    const jobDetails = jobDetailsElement
      ? jobDetailsElement.textContent?.trim() || ""
      : "";
    const skillsElement = jobDetailsContainer?.querySelector(
      ".job-details-jobs-unified-top-card__job-insight-text-button"
    );
    const jobDescriptionContainer = document.querySelector(
      ".jobs-description__content"
    );
    const jobDescriptionText = jobDescriptionContainer
      ? jobDescriptionContainer.textContent?.trim() || ""
      : "";
    const skills = jobDetailsElement
      ? skillsElement?.textContent?.trim() || ""
      : "";
    const url = window.location.href;

    console.log("Title:", title);
    console.log("Company Name:", companyName);
    console.log("Location:", location);
    console.log("Date Posted:", datePosted);
    console.log("Job Details:", jobDetails);
    console.log("Job Description:\n", jobDescriptionText);

    const rawProfileData = {
      title,
      companyName,
      location,
      datePosted,
      jobDescriptionText,
      skills,
      jobDetails,
      url,
    };

    const profileData = {
      companyName: getCleanText(rawProfileData.companyName),
      title: getCleanText(rawProfileData.title),
      url: rawProfileData.url,
      location: getCleanText(rawProfileData.location),
      datePosted: getCleanText(rawProfileData.datePosted),
      jobDescriptionText: getCleanText(rawProfileData.jobDescriptionText),
      skills: getCleanText(rawProfileData.skills),
      jobDetails: getCleanText(rawProfileData.jobDetails),
    };

    // return profileData;

    console.log(profileData);
  };

  const getCleanText = (text: string) => {
    const regexRemoveMultipleSpaces = / +/g;
    const regexRemoveLineBreaks = /(\r\n\t|\n|\r\t)/gm;

    if (!text) return null;

    const cleanText = text
      .replace(regexRemoveLineBreaks, "")
      .replace(regexRemoveMultipleSpaces, " ")
      .replace("...", "")
      .replace("See more", "")
      .replace("See less", "")
      .trim();

    return cleanText;
  };

  return (
    <>
      <div>
        <div className="flex flex-col items-center bg-white rounded-2xl border border-solid shadow-sm border-stone-20 w-[393px]">
          <div className=" flex flex-col items-center w-full p-8 ">
            <div className="text-2xl font-semibold text-center whitespace-nowrap text-slate-950">
              Scan Linkedin Job
            </div>
            <div className="mt-3 text-sm leading-4 text-center text-slate-600">
              Open the Linkedin tab of the job post you want to scan
            </div>
            <img
              loading="lazy"
              src="/assets/img/icons/illust_home.svg"
              className="mt-7 w-full aspect-[1.49]"
            />
            <button
              onClick={extract}
              className=" px-16 py-4 w-full inline-flex justify-center items-center gap-5 mt-12 text-base font-semibold text-center text-gray-900 shadow-sm is-caribbean-green rounded-full"
            >
              Scan Job
              <i className="fa-solid fa-magnifying-glass text-lg"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
