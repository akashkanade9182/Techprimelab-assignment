import React, { useEffect } from 'react'
import "../Styles/Dashboard.css"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { getChartData } from '../Redux/ChartReducer/action';
import {useSelector,useDispatch} from "react-redux"


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



const Dashboard = () => {
const dispatch=useDispatch();
const headdata=useSelector(store=>store.ChartReducer.data)
const datasetOne=useSelector(store=>store.ChartReducer.datasetOne)
const datasetTwo=useSelector(store=>store.ChartReducer.datasetTwo)

  const labels = ['QLT', 'MAN', 'STO', 'HR', 'FIN', 'STR'];

let percentage=[];
labels.forEach((ele,index)=>{
let per=datasetTwo[index]/datasetOne[index]
percentage.push([`${(per*100).toFixed(2)}%`,labels[index]])
})

 const data = {
    labels:percentage,
    datasets: [
      {
        label: 'total ',
        data: datasetOne,
        backgroundColor: '#025aab',
        barPercentage: 0.4, 
        categoryPercentage: 0.8, 
      },
      
      {
        label: 'Closed',
        data: datasetTwo,
        backgroundColor: '#5aa647',
        barThickness: 10,
      },
    ],
  };


  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' ,
      },
      title: {
        display: false,
        text: 'Chart.js Bar Chart',
      },
    },
    datalabels: {
      anchor: 'end',
      align: 'top',
      formatter: (value, context) => {
        const datasetIndex = context.datasetIndex;
        const dataset = context.chart.data.datasets[datasetIndex];
        const totalProjects = dataset.data[context.dataIndex];
        const completedProjects = data.datasets[1].data[context.dataIndex];
        const percentage = ((completedProjects / totalProjects) * 100).toFixed(1);
        return percentage + '%';
      },
    },
  
    scales: {
      x: {
        ticks: {
          font: {
            weight: 'bold',
          },
        },
        grid: {
          display: false,
        },
      },
      y: {
      
        grid: {
          display: false, 
        },
        font: {
          weight: 'bold',
        },
        beginAtZero: true,
      },
    },
  };

  useEffect(()=>{
    console.log("fethc start")
dispatch(getChartData())
  },[])

  return (
    <div className="dashboard">
      <div className="dashboard-head">
        <div className="head-card">
          <h1 className="head-card-title">Tototal Projects</h1>
          <h1 className="head-card-value">{headdata.totalProject}</h1>
        </div>
        <div className="head-card">
          <h1 className="head-card-title">Closed</h1>
          <h1 className="head-card-value">{headdata.closeProject}</h1>
        </div>
        <div className="head-card">
          <h1 className="head-card-title">Running</h1>
          <h1 className="head-card-value">{headdata.runningProject}</h1>
        </div>
        <div className="head-card">
          <h1 className="head-card-title">Clousure Delay</h1>
          <h1 className="head-card-value">{headdata.delayProject}</h1>
        </div>
        <div className="head-card">
          <h1 className="head-card-title">Cancelled</h1>
          <h1 className="head-card-value">{headdata.cancelProject}</h1>
        </div>
      </div>
      <h1 className='chart-title'>
        Department wise -Total Vs Closed
      </h1>
      <div className="chart-box">
      <Bar options={options} data={data} height={500} width={500} />
      </div>

    </div>

  )
}

export default Dashboard