import React, { useState , useEffect} from "react";
import Controls from "./components/Controls";
import Visualizer from "./components/Visualizer";
import InfoPanel from "./components/InfoPanel";
import { bubbleSort } from "./algorithms/bubbleSort";
import { selectionSort } from "./algorithms/selectionSort";
import { mergeSort } from "./algorithms/mergeSort";
import { quickSort } from "./algorithms/quickSort";
import "./App.css";
import Legend from "./components/Legend";

function App() {

  const [array, setArray] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [speed, setSpeed] = useState(250);
  const [arraySize, setArraySize] = useState(30);
  const [algorithm, setAlgorithm] = useState("");
  
  function generateArray() {

      const bars = document.getElementsByClassName("array-bar");
      for (let i = 0; i < bars.length; i++) {
      bars[i].style.backgroundColor = "blue";
      }
     let newArray = [];

     for (let i = 0; i < arraySize; i++) {
      newArray.push(Math.floor(Math.random() * 300) + 20);
       
    }

    setArray(newArray);
  }
   useEffect(() => {
    generateArray();
  }, [arraySize]);


  function runBubbleSort() {
    setAlgorithm("Bubble Sort");
    setIsSorting(true);
    const animations = bubbleSort(array);
    const sortedBars = new Set();
    const bars = document.getElementsByClassName("array-bar");
    animations.forEach((step, i) => {
      const action = step[0];
      const bar1 = step[1];
      const bar2 = step[2];
      setTimeout(() => {

        if (action === "compare") {

          bars[bar1].style.background = "#ff4d4d";
          bars[bar2].style.background = "#ff4d4d";

          setTimeout(() => {
           if (!sortedBars.has(bar1)) {
           bars[bar1].style.background = "linear-gradient(180deg,#5f7cff,#2c3bbf)";
           }

           if (!sortedBars.has(bar2)) {
           bars[bar2].style.background = "linear-gradient(180deg,#5f7cff,#2c3bbf)";
           }
          }, speed);
        }
        if (action === "swap") {
           const bar1 = step[1];
           const height1 = step[2];

        const bar2 = step[3];
        const height2 = step[4];


         bars[bar1].style.height = `${height1}px`;
         bars[bar2].style.height = `${height2}px`;
        }
        if (action === "sorted") {

         const index = step[1];
         bars[index].style.background = "#0f9d58";
         sortedBars.add(index);
        }

      }, i * (550-speed));

    });
    setTimeout(() => {

  const bars = document.getElementsByClassName("array-bar");

  for (let i = 0; i < bars.length; i++) {
    bars[i].style.background = "green";
  }
setIsSorting(false);

}, animations.length * (550-speed)+1000);
  }

  function runSelectionSort() {
    setAlgorithm("Selection Sort");
   setIsSorting(true);
    const sortedBars = new Set();
   const animations = selectionSort(array);
   const bars = document.getElementsByClassName("array-bar");

   animations.forEach((step, i) => {

    const action = step[0];

    setTimeout(() => {

      if (action === "compare") {

        const bar1 = step[1];
        const bar2 = step[2];

        bars[bar1].style.background = "#ff4d4d";
        bars[bar2].style.background = "#ff4d4d";
        setTimeout(() => {
          bars[bar1].style.background = "linear-gradient(180deg,#5f7cff,#2c3bbf)";
          bars[bar2].style.background = "linear-gradient(180deg,#5f7cff,#2c3bbf)";
        }, speed);

      }

      if (action === "swap") {

        const bar1 = step[1];
        const height1 = step[2];

        const bar2 = step[3];
        const height2 = step[4];

        bars[bar1].style.height = `${height1}px`;
        bars[bar2].style.height = `${height2}px`;

      }

      if (action === "sorted") {

        const index = step[1];

        bars[index].style.background = "#0f9d58";

        sortedBars.add(index);

      }

    }, i * (550 - speed));

  });

  setTimeout(() => {

    const bars = document.getElementsByClassName("array-bar");

    for (let i = 0; i < bars.length; i++) {
      bars[i].style.background = "green";
    }

    setIsSorting(false);

  }, animations.length * (550 - speed)+1000);

}
function runMergeSort() {
  setAlgorithm("Merge Sort");
  setIsSorting(true);

  const animations = mergeSort(array);
  const bars = document.getElementsByClassName("array-bar");

  animations.forEach((step, i) => {

    setTimeout(() => {

      if (step[0] === "compare") {

        const bar1 = step[1];
        const bar2 = step[2];

        bars[bar1].style.background = "#ff4d4d";
        bars[bar2].style.background = "#ff4d4d";

        setTimeout(() => {
          bars[bar1].style.background = "linear-gradient(180deg,#5f7cff,#2c3bbf)";
          bars[bar2].style.background = "linear-gradient(180deg,#5f7cff,#2c3bbf)";
        }, speed);
      }

      if (step[0] === "overwrite") {

        const index = step[1];
        const height = step[2];

        bars[index].style.height = `${height}px`;
      }

    }, i * (550 - speed));

  });

  setTimeout(() => {

    const bars = document.getElementsByClassName("array-bar");

    for (let i = 0; i < bars.length; i++) {
      bars[i].style.background = "green";
    }

    setIsSorting(false);

  }, animations.length * (550 - speed) + 1000);
}
function runQuickSort() {
  setAlgorithm("Quick Sort");
  setIsSorting(true);
  const sortedBars = new Set();
  const animations = quickSort(array);
  const bars = document.getElementsByClassName("array-bar");

  animations.forEach((step, i) => {

    const action = step[0];

    setTimeout(() => {

      if (action === "compare") {

        const bar1 = step[1];
        const bar2 = step[2];

        bars[bar1].style.background = "#ff4d4d";
        bars[bar2].style.background = "#ff4d4d";

        setTimeout(() => {
          if (!sortedBars.has(bar1)) {
          bars[bar1].style.background = "linear-gradient(180deg,#5f7cff,#2c3bbf)";
          }

          if (!sortedBars.has(bar2)) {
           bars[bar2].style.background = "linear-gradient(180deg,#5f7cff,#2c3bbf)";
          }
        }, speed);
      }

      if (action === "swap") {

        const bar1 = step[1];
        const height1 = step[2];

        const bar2 = step[3];
        const height2 = step[4];

        bars[bar1].style.height = `${height1}px`;
        bars[bar2].style.height = `${height2}px`;

      }
      if (action === "sorted") {

        const index = step[1];

        bars[index].style.background = "#0f9d58";

        sortedBars.add(index);

      }

    }, i * (550 - speed));

  });

  setTimeout(() => {

    const bars = document.getElementsByClassName("array-bar");

    for (let i = 0; i < bars.length; i++) {
      bars[i].style.background = "green";
    }

    setIsSorting(false);

  }, animations.length * (550 - speed) + 1000);
}
  return (
    <div className="App">

      <h1>Algorithm Visualizer</h1>

      <Controls
        generateArray={generateArray}
        bubbleSort={runBubbleSort}
        selectionSort={runSelectionSort}
        mergeSort={runMergeSort}
        quickSort={runQuickSort}
        isSorting={isSorting}
        speed={speed}
        setSpeed={setSpeed}
        arraySize={arraySize}
        setArraySize={setArraySize}
      />
      <Legend />

      <div className="visualizer-card">
       <Visualizer array={array} />
      </div>

      <InfoPanel algorithm={algorithm} />

    </div>
  );
}

export default App;
