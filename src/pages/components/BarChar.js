import {useEffect, useState} from "react";
import {Chart} from "chart.js";
import {Bar} from "react-chartjs-2";
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    Tooltip,
    Legend
} from "chart.js"

ChartJS.register(
    BarElement,
    CategoryScale,
    Tooltip,
    Legend
)
function Barchart({props})
{   
    const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};
   return(
       <Bar data={data}/>
    )
}
export default Barchart;
