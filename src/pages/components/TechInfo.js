import "../css/projects.css"
import {useEffect} from "react";
import {Chart as ChartJS, registerables} from "chart.js"
import {Bar } from "react-chartjs-2"
ChartJS.register(...registerables)

function TechInfo({props})
{
    const labels = ["Javascript", "HTML/CSS", "Python", "Java", "C", "C++", "Go"] 
    const data = {
        labels: labels,
        datasets: [
            {
                label: "Programming Languages",
                backgroundColor: "#454545",
                borderColor: "#454545",
                data: [21,19, 15,12,10,9,7],
            },
        ]};
    const techs = ["Websites", "Web Apps", "Android Apps","Libraries","Frameworks"]
    const data_techs = {
        labels: techs,
        datasets:[
            {
                label:"Project distribution",
                backgroundColor:"#454545",
                borderColor:"#454545",
                data:[113,120,56,67,2]
            }
        ]
    }
    return(
        <div className="tech-info">
            <h3>Techstack</h3>
            <b>Programming Languages</b>
            <div>
                <Bar data={data} options={{indexAxis: 'y'}}/>
            </div>
            <b>Project distribution</b>
            <Bar data={data_techs} options={{indexAxis:'y'}}/>
        </div>
    )
}
export default TechInfo;
