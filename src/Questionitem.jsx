import React, { useState } from "react";
import "./Dashboard.css";

const Questionitem = ({ item, togglestatus }) => {
  const [show, setshow] = useState(false);
  return (
    <div>
      <div className="question-card">
        <p
          onClick={() => {
            setshow(!show);
            // check if already clicked
          }}
          style={{ cursor: "pointer" }}
        >
          {item.question}
        </p>
      </div>
      {show && (
        <div>
          <p className="question-answer">{item.answer}</p>
          <button className="btn" onClick={() => togglestatus(item.id)}>
            {item.completed ? "completed✅" : "pending❌"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Questionitem;
