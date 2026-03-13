function Legend() {
  return (
    <div className="legend">

      <div className="legend-item">
        <div className="legend-color unsorted"></div>
        <span>Unsorted</span>
      </div>

      <div className="legend-item">
        <div className="legend-color comparing"></div>
        <span>Comparing</span>
      </div>

      <div className="legend-item">
        <div className="legend-color sorted"></div>
        <span>Sorted</span>
      </div>

    </div>
  );
}


export default Legend;