import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Diagram from "../../component/Diagram";

export default function Detail() {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState([]);

  let hr = [];
  let time = [];
  let terkini;

  if (data.sensor !== null) {
    data.sensor?.map((val) => {
      hr.push(val.heart_rate);
      let date = new Date(val.time);
      time.push(`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`);
      terkini = hr[hr.length - 1];
    });
  } else {
    hr.push(0);
    time.push(0);
    terkini = 0;
  }

  useEffect(() => {
    let timer = setInterval(() => {
      axios
        .get(`https://api-csms.herokuapp.com/device/${id}`)
        .then((res) => setData(res.data));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box sx={{ height: "100%", background: "#E4E4E4" }}>
      <Box
        sx={{
          background: "#924416",
          borderRadius: 20,
          width: "200%",
          height: "40%",
          position: "relative",
          top: "-15%",
        }}
      >
        <Box
          sx={{
            background: "#5A290B",
            borderRadius: 100,
            width: "40%",
            height: "120%",
            position: "relative",
            top: "-50%",
            left: "25%",
          }}
        ></Box>
        <Typography
          variant="h3"
          sx={{ position: "relative", top: "-60%", left: "5%", color: "#ffff" }}
        >
          {data.data?.nama}
        </Typography>
      </Box>

      <Box
        sx={{
          borderRadius: 80,
          display: "flex",
          justifyContent: "center",
          position: "relative",
          top: "-6%",
        }}
      >
        <Box sx={{ background: "#ffff", borderRadius: 2, width: "80%" }}>
          <Typography
            variant="h6"
            sx={{ width: "max-content", mx: "auto", fontWeight: 600, my: 1 }}
          >
            Grafik Kesehatan
          </Typography>

          <Diagram hr={hr} time={time} />
        </Box>
      </Box>

      <Box sx={{ position: "relative", top: "-3%" }}>
        <Typography
          variant="body1"
          component="div"
          sx={{ width: "max-content", mx: "auto" }}
        >
          Heart Rate sapi sebesat {terkini} kali per menit
        </Typography>

        <Typography
          variant="body1"
          sx={{
            width: "max-content",
            mx: "auto",
            borderRadius: 100,
            background: "#924416",
            color: "#ffff",
            py: 1,
            px: 3,
            mt: 1,
          }}
        >
          {terkini < 55 || terkini > 80 ? "Tidak Sehat" : "Sehat"}
        </Typography>
      </Box>
    </Box>
  );
}
