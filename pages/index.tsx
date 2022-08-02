import { Add } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  List,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function Home() {
  const [data, setData] = useState([]);
  const [addModal, setAddModal] = useState(false);
  const [second, setSecond] = useState();

  const handleAdd = () => setAddModal(!addModal);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data, e) => {
    axios.post("https://api-csms.herokuapp.com/device/", data);
    setAddModal(!addModal);
  };

  const onError = (errors, e) => console.log(errors, e);

  useEffect(() => {
    let timer = setInterval(() => {
      axios
        .get("http://api-csms.herokuapp.com/device/")
        .then((val) => setData(val.data.data));
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
          height: "52%",
        }}
      >
        {data.map((val) => (
          <Link href={`/sapi/${val.id}`}>
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
                  justifyContent: "space-between",
                  width: "90%",
                }}
              >
                <Box></Box>
                <Typography variant="h6" sx={{ py: 1 }}>
                  {val.nama}
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    borderRadius: 100,
                    color: "#ffff",
                    background:
                      val.heart_rate < 55 || val.heart_rate > 80
                        ? "#CA0204"
                        : "#26D000",
                    py: 1,
                    px: 1,
                  }}
                >
                  {val.heart_rate}
                </Typography>
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
          top: "-7%",
          left: "77%",
          width: 70,
          height: 70,
        }}
        onClick={handleAdd}
      >
        <Add sx={{ fill: "#ffff", "&:hover": { fill: "#0000" } }} />
      </IconButton>

      <Modal open={addModal} onClose={handleAdd}>
        <Box
          sx={{
            position: "fixed",
            top: "30%",
            left: "15%",
            background: "#fff",
            width: "70%",
          }}
        >
          <Box sx={{ background: "#5A290B", py: 2 }}>
            <Typography
              variant="h5"
              sx={{ color: "#ffff", width: "max-content", mx: "auto" }}
            >
              Tambah Device
            </Typography>
          </Box>
          <form
            method="post"
            onReset={() => {
              setAddModal(!addModal);
              reset({ nama: null });
            }}
            onSubmit={handleSubmit(onSubmit, onError)}
          >
            <TextField
              sx={{
                my: 2,
                mx: "auto",
                display: "flex",
                justifyContent: "center",
                width: "80%",
              }}
              label="Nama Device"
              {...register("nama")}
            />

            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
              <Button
                sx={{ my: 3, py: 1, px: 3, position: "relative" }}
                variant="outlined"
                type="submit"
              >
                Tambah
              </Button>

              <Button
                sx={{ my: 3, py: 1, px: 3, position: "relative", color: "red" }}
                variant="outlined"
                type="reset"
              >
                Batal
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </Box>
  );
}
