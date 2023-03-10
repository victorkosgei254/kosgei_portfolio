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

    const options = {
        indexAxis: 'y',
        barPercentage: 0.25,
        cartegoryPercentage: 0.25,
        maintainAspectRatio:false,
        borderRadius: "50",
        scales:{
            x:{
                grid:{
                    display:false
                },
                ticks:{
                    display:false
                }
            },
            y:{
                grid:{
                    display:false
                }
            },
        }
    }
    return(
        <div className="tech-info">
            <div className="tech-info_header">
            <h3>Techstack</h3>
            </div>
            <b>Programming Languages</b>
            <div className="tech-info_languages">
                <Bar data={data} options={options}/>
            </div>
            <div className="tech-info_project_dist">
            <b>Project distribution</b>
            <Bar data={data_techs} options={options}/>
            </div>
        </div>
    )
}
export default TechInfo;
