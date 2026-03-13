import React from "react";
function Controls({generateArray , bubbleSort ,selectionSort,mergeSort,quickSort, isSorting ,speed, setSpeed ,arraySize,
  setArraySize} ){
    return(
        <div className="controls">
            <button onClick={generateArray} disabled={isSorting}>Generate Array</button>

            <button onClick={bubbleSort} disabled={isSorting}>Bubble sort </button>
            <button onClick={selectionSort} disabled={isSorting}>Selection sort </button>
            <button onClick={mergeSort} disabled={isSorting}>Merge sort</button>
            <button onClick={quickSort} disabled={isSorting}>Quick Sort</button>
            <div className="slider-container">

              <label>Speed:</label>

              <input
                  type="range"
                  min="50"
                  max="500"
                  value={speed}
                 disabled={isSorting}
                 onChange={(e) => setSpeed(Number(e.target.value))}
              />

               <label>Array Size:{arraySize}</label>

              <input
                 type="range"
                 min="10"
                 max="120"
                 value={arraySize}
                 disabled={isSorting}
                 onChange={(e) => setArraySize(Number(e.target.value))}
               />

            </div>

        </div>
    )
}
export default Controls;
