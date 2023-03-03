import React, { useState } from "react";
import "./fermentationChart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Chart = () => {
  const [data, setData] = useState([
    { day: "Day 1", temperature: 25 },
    { day: "Day 2", temperature: 28 },
    { day: "Day 3", temperature: 24 },
    { day: "Day 4", temperature: 22 },
    { day: "Day 5", temperature: 27 },
  ]);
  const [newDayNumber, setNewDayNumber] = useState("");
  const [newTemperature, setNewTemperature] = useState("");

  const handleTemperatureChange = (event, index) => {
    const newData = [...data];
    newData[index].temperature = event.target.value;
    setData(newData);
  };

  const handleAddDay = () => {
    const newDay = { day: `Day ${newDayNumber}`, temperature: newTemperature };
    const newData = [...data];
    let insertIndex = data.length;
    for (let i = 0; i < data.length; i++) {
      const dayNumber = parseInt(data[i].day.split(" ")[1]);
      const newDayNumberInt = parseInt(newDayNumber);
      if (dayNumber > newDayNumberInt) {
        insertIndex = i;
        break;
      }
    }
    newData.splice(insertIndex, 0, newDay);
    setData(newData);
    setNewDayNumber("");
    setNewTemperature("");
  };

  const handleRemoveDay = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  const handleNewDayNumberChange = (event) => {
    setNewDayNumber(event.target.value);
  };

  const handleNewTemperatureChange = (event) => {
    setNewTemperature(event.target.value);
  };

  return (
    <div className="fermentationChart">
      <LineChart width={600} height={300} data={data} id="lineChart">
        <XAxis dataKey="day" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
      </LineChart>
      <table id="fermentation-table">
        <thead>
          <tr>
            <th>Day</th>
            <th>Temperature</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index}>
              <td>{entry.day}</td>
              <td>
                <input
                  type="number"
                  value={entry.temperature}
                  onChange={(event) => handleTemperatureChange(event, index)}
                />
              </td>
              <td>
                <button onClick={() => handleRemoveDay(index)}>
                  Remove Day
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="fermentationChart-insert">
        <div>
          <label>New Day Number:</label>
          <input
            type="number"
            value={newDayNumber}
            onChange={handleNewDayNumberChange}
          />
        </div>
        <div>
          <label>New Temperature:</label>
          <input
            type="number"
            value={newTemperature}
            onChange={handleNewTemperatureChange}
          />
        </div>
        <div>
          <button onClick={handleAddDay}>Add Day</button>
        </div>
      </div>
    </div>
  );
};

export default Chart;
