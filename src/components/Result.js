import Ocr from "./Ocr";
import Image from "./Image";

const Result = ({ imagePath, text, percent, status }) => {
  return (
    <div className="flex">
      <div>
        <Image imagePath={imagePath} />
      </div>
      <div style={{ width: "50%" }}>
        <Ocr text={text} percent={percent} status={status} />
      </div>
    </div>
  );
};

export default Result;
