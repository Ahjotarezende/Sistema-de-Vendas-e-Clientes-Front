import React, { useEffect, useState } from "react";
import { DivPrincipal, FormLogin, Button } from "./Styles";
import { useForm } from "react-hook-form";
import InputComp from "../../components/InputComp/InputComp";
import BagBranca from "../../assets/Bag - Branca PNG.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  /*eslint-disable*/
  const [finish, setFinish] = useState();
  const [name, setName] = useState();
  const [pwd, setPwd] = useState();
  const [start, setStart] = useState();

  useEffect(() => {
    if (localStorage.getItem("token") !== null) navigate("/home");
  }, [navigate]);

  const onSubmit = (data) => {
    if (data.name === "Geraldo" && data.pwd === "200456") {
      localStorage.setItem("token", "token");
      document.location.reload();
    } else {
      alert("Ops... Usuario incorreto!");
      document.location.reload();
    }
  };

  return (
    <DivPrincipal>
      <FormLogin onSubmit={handleSubmit(onSubmit)}>
        <img src={BagBranca} alt="Bag Branca" />
        <InputComp
          setStart={setStart}
          setFinish={setFinish}
          register={register}
          setValor={setName}
          textLabel="Usuario"
          type="text"
          name="name"
        />
        <InputComp
          setStart={setStart}
          setFinish={setFinish}
          register={register}
          setValor={setPwd}
          textLabel="Senha"
          type="password"
          name="pwd"
        />
        <Button type="submit">Login</Button>
      </FormLogin>
    </DivPrincipal>
  );
};

export default Login;
