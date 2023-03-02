import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Scatter } from "react-chartjs-2";

export type CommentType = {
  wordCounts: Map<number, number>;
};

function Chart(props: CommentType): JSX.Element {
  const { wordCounts } = props;

  ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const data = {
    datasets: [
      {
        label: "A dataset",
        data: Array.from(wordCounts).map(([x, y]) => ({ x, y })),
        backgroundColor: "#029999",
      },
    ],
  };

  return <Scatter options={options} data={data} />;
}

export default Chart;
