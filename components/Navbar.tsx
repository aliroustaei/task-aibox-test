import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  ButtonBase,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import logo from "../assets/images/logo.svg";
import styled from "styled-components";
import MobileMenu from "./MobileMenu";

const ButtonPrimary = styled.button`
  color: #fff;
  background-color: #1d5aff;
  font-size: 17px;
  border-radius: 45px;
  cursor: pointer;
  padding: 9px 25px;
  outline: none;
  border: 2px solid #fff;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: transparent;
    color: #333;
    border: 2px solid #1d5aff;
    box-shadow: 0px 0px 5px #1d5aff;
  }
`;

const ButtonSecondary = styled.button`
  color: #333;
  background-color: transparent;
  font-size: 17px;
  border-radius: 45px;
  cursor: pointer;
  padding: 9px 25px;
  outline: none;
  border: none;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #1d5aff;
  }
  &::after {
    content: "";
    display: block;
    height: 2px;
    width: 0;
    background-color: #1d5aff;
    transition: width 0.3s;
    margin: 0 auto;
  }
  &:hover::after {
    width: 100%;
  }
`;

const Navbar = () => {
  const menuItem = [" خانه", "درباره ما", "مارکتAPI "];
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box>
      <AppBar sx={{ position: "sticky", background: "#fdfdfd" }}>
        <Toolbar className="container">
          <Grid container alignItems="center" flexWrap="nowrap">
            {isMatch ? (
              <Grid item>
                <MobileMenu />
              </Grid>
            ) : (
              <>
                <Grid item sx={{ marginLeft: "80px", display: "flex" }}>
                  <Image src={logo} alt="logo" height={50} width={50} />
                </Grid>
                <Grid item sx={{}}>
                  {menuItem.map((item) => (
                    <ButtonBase
                      key={item}
                      sx={{
                        padding: "8px",
                        borderRadius: "5px",
                        marginLeft: "10px",
                      }}
                    >
                      <Typography
                        sx={{ color: "#9b9b9b", "&:hover": { color: "#333" } }}
                      >
                        {item}
                      </Typography>
                    </ButtonBase>
                  ))}
                </Grid>
              </>
            )}

            <Grid item sx={{ marginRight: "auto" }}>
              <ButtonSecondary>ثبت نام</ButtonSecondary>

              <ButtonPrimary>ورود</ButtonPrimary>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
