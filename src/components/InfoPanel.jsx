import React from "react";
function InfoPanel({ algorithm }) {

  const info = {
    "Bubble Sort": {
      time: "O(n²)",
      space: "O(1)",
      stable: "Yes"
    },
    "Selection Sort": {
      time: "O(n²)",
      space: "O(1)",
      stable: "No"
    },
    "Merge Sort": {
      time: "O(n log n)",
      space: "O(n)",
      stable: "Yes"
    },
    "Quick Sort": {
      time: "O(n log n)",
      space: "O(log n)",
      stable: "No"
    }
  };

  const data = info[algorithm];

  if (!data) {
    return <div className="info-panel">Select an algorithm to begin.</div>;
  }

  return (
    <div className="info-panel">

      <h2>{algorithm}</h2>

      <p><strong>Time Complexity:</strong> {data.time}</p>
      <p><strong>Space Complexity:</strong> {data.space}</p>
      <p><strong>Stable:</strong> {data.stable}</p>

    </div>
  );
}

export default InfoPanel;