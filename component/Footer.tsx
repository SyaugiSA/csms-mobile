import {
  Assessment,
  Home as HomeIcon,
  QrCode,
  Scanner,
} from "@mui/icons-material";
import { Box } from "@mui/system";

export default function Footer() {
  return (
    <Box
      flex={1}
      justifyContent="space-around"
      sx={{ background: "#5A290B", width: "100%" }}
    >
      <HomeIcon sx={{ fill: "#fff", width: "30%", height: 40 }} />
      <QrCode sx={{ fill: "#fff", width: "30%", height: 40 }} />
      <Assessment sx={{ fill: "#fff", width: "30%", height: 40 }} />
    </Box>
  );
}
