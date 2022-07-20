import { Assessment, Home as HomeIcon, QrCode } from "@mui/icons-material";
import { Button, ButtonGroup } from "@mui/material";

export default function Footer() {
  return (
    <ButtonGroup sx={{ background: "#5A290B", width: "100%" }}>
      <Button href="/" sx={{ width: "100%" }}>
        <HomeIcon sx={{ fill: "#fff", width: 60, height: 60 }} />
      </Button>
      <Button sx={{ width: "100%" }}>
        <QrCode sx={{ fill: "#fff", width: 60, height: 60 }} />
      </Button>
      <Button sx={{ width: "100%" }}>
        <Assessment sx={{ fill: "#fff", width: 60, height: 60 }} />
      </Button>
    </ButtonGroup>
  );
}
