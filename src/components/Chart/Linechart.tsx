import { Chart, LineElement } from "chart.js/auto";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

Chart.register(LineElement);

interface DataSets {
  label: string;
  data: string[];
  tension: number;
  borderColor: string;
  pointBorderColor: string;
  backgroundColor: CanvasGradient;
  fill: boolean;
  spanGaps: boolean;
}

interface ChartData {
  labels: string[];
  datasets: DataSets[];
}

const LineChartComponent = () => {
  const dataList = [
    { day: "1", amount: "2500" },
    { day: "2", amount: "3200" },
    { day: "3", amount: "3100" },
    { day: "4", amount: "3300" },
    { day: "5", amount: "3200" },
    { day: "6", amount: "2900" },
    { day: "7", amount: "3000" },
    { day: "8", amount: "2800" },
    { day: "9", amount: "3000" },
    { day: "10", amount: "3100" },
    { day: "11", amount: "3000" },
    { day: "12", amount: "3200" },
  ];

  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
        tension: 0.5,
        borderColor: "",
        pointBorderColor: "",
        backgroundColor: {} as CanvasGradient,
        fill: true,
        spanGaps: true,
      },
    ],
  });

  useEffect(() => {
    setChartData({
      labels: dataList.map((month) => month.day),
      datasets: [
        {
          label: "",
          data: dataList.map((month) => month.amount),
          tension: 0.5,
          borderColor: "#5185F7",
          pointBorderColor: "transparent",
          backgroundColor: createLinearGradient(),
          fill: true,
          spanGaps: true,
        },
      ],
    });
  }, []);

  const createLinearGradient = () => {
    const ctx = document.createElement("canvas").getContext("2d");
    if (ctx) {
      const gradient = ctx.createLinearGradient(0, 0, 0, 350);
      gradient.addColorStop(0, "#CEDDFF");
      gradient.addColorStop(1, "#CEDDFF00");
      return gradient;
    }
    return {} as CanvasGradient;
  };

  const options = {
    scales: {
      y: {
        ticks: {
          stepSize: 40,
        },
      },
      x: {
        grid: {
          display: false,
          drawOnChartArea: false,
          drawTicks: false,
          drawBorder: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Line width={400} data={chartData} height={180} options={options} />;
};

export default LineChartComponent;
