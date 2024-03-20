import KeywordExtractor from "../KeywordExtractor";

const JobDescription: React.FC = () => {
  return (
    <div className="w-full">
      <div>
        {/* Body */}
        <div>
          <KeywordExtractor />
        </div>
        {/* End Body */}
      </div>
    </div>
  );
};

export default JobDescription;
