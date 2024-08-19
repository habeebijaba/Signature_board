import React, { useEffect, useState } from "react";
import SignatureCanvas from "react-signature-canvas";

const App = () => {
  const [sign, setSign] = useState();
  const [url, setUrl] = useState();

  const handleClear = () => {
    sign.clear();
    setUrl("");
  };
  const handleSave = () => {
    setUrl(sign.getTrimmedCanvas().toDataURL("image/png"));
    console.log(url);
    
  };

  return (
    <>
      <div className="w-full h-[2rem] bg-gray-600 mb-2"></div>
      <div className="flex items-center justify-center flex-col gap-2">
        <div
          className="border border-gray-400"
          style={{ width: 500, height: 300 }}
        >
          <SignatureCanvas
            penColor="black"
            canvasProps={{ width: 500, height: 300, className: "sigCanvas" }}
            ref={(data) => setSign(data)}
          />
        </div>
        <div className="flex items-center gap-5 mt-2 ">
          <button
            className="bg-green-800 rounded-full text-white px-3 py-1"
            onClick={handleClear}
          >
            clear
          </button>
          <button
            className="bg-green-800 rounded-full text-white px-3 py-1"
            onClick={handleSave}
          >
            save
          </button>
        </div>
        <img src={url} alt="" />
      </div>
    </>
  );
};

export default App;
