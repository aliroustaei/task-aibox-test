import type { NextPage } from "next";
import Image from "next/image";
import { Grid } from "@mui/material";
import login from "../assets/images/login.svg";
//components
import Login from "../components/Login";

const LoginPage: NextPage = () => {
  return (
    <div className="container">
      <Grid
        container
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          padding: "30px 0",
        }}
      >
        <Grid item xs={12} md={6}>
          <Login />
        </Grid>
        <Grid item xs={12} md={6}>
          <Image alt="login" src={login} height={500} width={500} />
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginPage;
