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
const FermentationChartCheck = () => {
  const chartData = useSelector((state) => state.createRecipe.chart);

  const [data, setData] = useState(chartData);

  const [newChartData, setNewChartData] = useState([]);
  const [newDayNumber, setNewDayNumber] = useState("");
  const [newTemperature, setNewTemperature] = useState("");
  const dispatch = useDispatch();
  const handleTemperatureChange = (event, index) => {
    const newData = [...data];
    newData[index].temperature = event.target.value;
    setData(newData);
  };
  useEffect(() => {
    console.log(data);
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
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index} className="table-row-chart">
              <td>
                <button className="button-chart-none">{entry.day}</button>
              </td>
              <td>
                <button className="button-chart-none">
                  {entry.temperature}
                </button>
              </td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FermentationChartCheck;
