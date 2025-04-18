import React from "react";
import COE1 from "./COE1";
import COE2 from "./COE2";
import COE3 from "./COE3";
import { useEffect } from "react";

function CenterofExce() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mt-40 mb-8">
      <COE1 />
      <COE2 />
      <COE3 />
    </div>
  );
}
export default CenterofExce;
