import { Chart, LineElement } from "chart.js/auto";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { parse, getISOWeek } from "date-fns";
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

interface chartProps {
  typeChart: string;
}

const LineChartComponent: React.FC<chartProps> = ({ typeChart }) => {
  console.log(typeChart);

  const dispatch: AppDispatch = useDispatch();
  const data = useSelector((state: RootState) => state.Provide.dataProvide);

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();

  const dataList: { time: string; amount: string }[] = [];
  let timeUnit: "Date" | "ISOWeek" | "Month" = "Date";

  if (typeChart === "Ngày") {
    timeUnit = "Date";
  } else if (typeChart === "Tuần") {
    timeUnit = "ISOWeek";
  } else if (typeChart === "Tháng") {
    timeUnit = "Month";
  }

  let maxTimeValue =
    timeUnit === "ISOWeek" ? 4 : timeUnit === "Month" ? 12 : 31;

  if (typeChart === "Tháng") {
    maxTimeValue = 12; // Hiển thị chỉ 12 tháng
  }

  for (let unit = 1; unit <= maxTimeValue; unit++) {
    const eventsForUnit = data.filter((item) => {
      const parsedDate = parse(
        item.thoiGianBatDau,
        "HH:mm dd/MM/yyyy",
        new Date()
      );
      return timeUnit === "ISOWeek"
        ? getISOWeek(parsedDate) === unit
        : (timeUnit === "Month"
            ? parsedDate.getMonth() + 1
            : parsedDate.getDate()) === unit;
    });
    dataList.push({
      time: unit.toString(),
      amount: eventsForUnit.length.toString(),
    });
  }

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
      labels: dataList.map((data) => data.time),
      datasets: [
        {
          label: "",
          data: dataList.map((data) => data.amount),
          tension: 0.5,
          borderColor: "#5185F7",
          pointBorderColor: "transparent",
          backgroundColor: createLinearGradient(),
          fill: true,
          spanGaps: true,
        },
      ],
    });
  }, [typeChart]);

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
