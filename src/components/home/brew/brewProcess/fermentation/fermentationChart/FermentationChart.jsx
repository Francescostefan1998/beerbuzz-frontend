import React, { useState } from "react";
import "./fermentationChart.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addChartRecipeAction } from "../../../../../../redux/actions/recipe";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useSelector } from "react-redux";

const Chart = () => {
  const chartData = useSelector((state) => state.createRecipe.chart);

  const [data, setData] = useState([
    { day: "Day 1", temperature: 25 },
    { day: "Day 2", temperature: 28 },
    { day: "Day 3", temperature: 24 },
    { day: "Day 4", temperature: 22 },
    { day: "Day 5", temperature: 27 },
  ]);

  const [newChartData, setNewChartData] = useState([]);
  const [newDayNumber, setNewDayNumber] = useState("");
  const [newTemperature, setNewTemperature] = useState(0);
  const dispatch = useDispatch();
  const handleTemperatureChange = (event, index) => {
    const newData = [...data];
    newData[index] = {
      ...newData[index],
      temperature: parseFloat(event.target.value),
    };
    setData(newData);
  };
  useEffect(() => {
    if (chartData && chartData.length > 1) {
      setData(chartData);
    }
  }, []);

  useEffect(() => {
    console.log(data);

    setTimeout(
      () => setTimeout(() => dispatch(addChartRecipeAction(data)), 1000),
      1000
    );
  }, [data]);
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
    setNewTemperature(0);
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
    setNewTemperature(parseFloat(event.target.value));
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
            <tr key={index} className="table-row-chart">
              <td>
                <button className="button-chart-none">{entry.day}</button>
              </td>
              <td>
                <input
                  className="input-chart-number"
                  type="number"
                  value={entry.temperature}
                  onChange={(event) => handleTemperatureChange(event, index)}
                />
              </td>
              <td>
                <button
                  onClick={() => handleRemoveDay(index)}
                  className="button-chart-pink"
                >
                  Remove
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
            className="input-chart-number-widher"
            type="number"
            value={newDayNumber}
            onChange={handleNewDayNumberChange}
          />
        </div>
        <div>
          <label>New Temperature:</label>
          <input
            className="input-chart-number-widher"
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
