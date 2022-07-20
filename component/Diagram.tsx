import { Box } from "@mui/system";
import {
  CategoryScale,
  Chart,
  LinearScale,
  LineElement,
  PointElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

Chart.register(LineElement, PointElement, CategoryScale, LinearScale);

export default function Diagram({ hr, time }) {
  return (
    <Box sx={{ background: "#ffff" }}>
      <Line
        width={600}
        height={400}
        data={{
          labels: time,
          datasets: [{ data: hr, borderColor: "#00000" }],
        }}
      />
    </Box>
  );
}
