import { solutionHeader, summary } from "../constants";

const Agenda = () => {
  return (
    <div className="flex flex-col gap-7 mt-7 mb-2">
      <p>{summary}</p>
      <p>{solutionHeader}</p>
    </div>
  );
};

export default Agenda;
