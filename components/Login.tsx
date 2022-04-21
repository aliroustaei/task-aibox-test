import { Box, TextField, Typography } from "@mui/material";
import { color } from "@mui/material/node_modules/@mui/system";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";

const InputGroup = styled.div`
  margin-top: 45px;
  margin-bottom: 5px;
  width: 100%;
  position: relative;
`;

const Label = styled.label`
  position: absolute;
  right: 0;
  top: 50%;
  font-size: 18px;
  transform: translateY(-50%);
  pointer-events: none;
  transition: 0.2s ease all;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #6c6c76;
  width: 100%;
  padding: 6px 0;
  display: block;
  font-size: 16px;
  font-weight: bold;
  outline: none;
  &::placeholder {
    color: transparent;
  }
  &:focus {
    border-bottom: 2px solid #1d5aff;
  }
  &:focus + ${Label} {
    top: -5px;
    padding: 0 3px;
    font-size: 14px;
    color: #1d5aff;
    transition: 0.3s;
  }
  &:not(:placeholder-shown)&:not(:focus) + ${Label} {
    top: -5px;
    padding: 0 3px;
    font-size: 14px;
    color: #1d5aff;
    transition: 0.3s;
  }
`;

const SubmitBtn = styled.button`
  color: #fff;
  cursor: pointer;
  height: 40px;
  width: 100%;
  font-size: 18px;
  background: linear-gradient(90deg, #8f48ff, #1d5aff);
  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%);
  border: none;
  border-radius: 10px;
  margin-top: 45px;
  &:hover {
    background: #1d5aff;
  }
`;

const Error = styled.p`
  color: #a30000;
  font-size: 14px;
`;

const HoverP = styled.p`
  cursor: pointer;
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

type FormValues = {
  email: string;
  password: number;
  rememberMe: boolean;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <Box width="65%">
      <Typography
        variant="h4"
        sx={{
          borderBottom: "1px solid #333",
          width: "fit-content",
          margin: "0 auto",
          paddingBottom: "10px",
        }}
      >
        ورود
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <TextField
            id="standard-basic"
            label="نام خانوادگی"
            variant="standard"
          />
          <Input
            id="email"
            type="email"
            placeholder="email"
            {...register("email", { required: "لطفا ایمیل را وارد کنید" })}
          />
          <Label htmlFor="email">ایمیل</Label>
        </InputGroup>
        <Error>{errors.email && errors.email.message}</Error>
        <InputGroup>
          <Input
            id="pass"
            type="password"
            placeholder="password"
            {...register("password", { required: "لطفا پسورد را وارد کنید" })}
          />
          <Label htmlFor="pass">پسورد</Label>
        </InputGroup>
        <Error>{errors.password && errors.password.message}</Error>
        <InputGroup>
          <input type="checkbox" id="scales" {...register("rememberMe")} />
          <label htmlFor="scales"> مرا بخاطر بسپار </label>
        </InputGroup>
        <SubmitBtn type="submit">وارد شوید</SubmitBtn>
      </form>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "fit-content",
          textAlign: "center",
          margin: "20px auto 0",
        }}
      >
        <HoverP>گذرواژه خود را فراموش کرده اید؟</HoverP>
        <Box sx={{ display: "flex", gap: "5px" }}>
          <Typography>هنوز حساب کاربری ندارید؟</Typography>
          <HoverP>ثبت نام کنید</HoverP>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
