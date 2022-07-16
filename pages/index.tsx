import { Add } from "@mui/icons-material";
import { Box, IconButton, List, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const data = [
    { nama: "sapi 1", hr: 20, url: "/sapi/1" },
    { nama: "sapi 2", hr: 30, url: "/sapi/2" },
    { nama: "sapi 3", hr: 40, url: "/sapi/3" },
    { nama: "sapi 4", hr: 50, url: "/sapi/4" },
    { nama: "sapi 5", hr: 60, url: "/sapi/5" },
    { nama: "sapi 6", hr: 70, url: "/sapi/6" },
    { nama: "sapi 7", hr: 80, url: "/sapi/7" },
    { nama: "sapi 8", hr: 90, url: "/sapi/7" },
    { nama: "sapi 9", hr: 100, url: "/sapi/9" },
  ];

  return (
    <Box sx={{ height: "100%", background: "#E4E4E4" }}>
      <Box
        sx={{
          background: "#924416",
          borderRadius: 20,
          width: "200%",
          height: "45%",
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
          Hi User
        </Typography>
      </Box>

      <Box
        sx={{
          overflow: "auto",
          position: "relative",
          top: "-10%",
          width: "70%",
          mx: "auto",
          height: "45%",
        }}
      >
        {data.map((val) => (
          <Link href={val.url}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                background: "#ffff",
                my: 2,
                borderRadius: 100,
              }}
            >
              <List
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "100%",
                }}
              >
                <Box></Box>
                <Typography variant="h6">{val.nama}</Typography>
                <Box
                  sx={{
                    borderRadius: 100,
                    background:
                      val.hr < 55 || val.hr > 80 ? "#CA0204" : "#26D000",
                    width: "15%",
                    height: "100%",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      mx: "auto",
                      width: val.hr < 100 ? "70%" : "100%",
                      color: "#ffff",
                    }}
                  >
                    {val.hr}
                  </Typography>
                </Box>
              </List>
            </Box>
          </Link>
        ))}
      </Box>

      <IconButton
        aria-label="add"
        sx={{
          background: "#5D2807",
          position: "relative",
          top: "-3%",
          left: "77%",
        }}
      >
        <Add sx={{ fill: "#ffff" }} />
      </IconButton>
    </Box>
  );
}
