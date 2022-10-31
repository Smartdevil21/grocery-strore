import { Button, TextField } from "@mui/material";
import React, { useState, useContext } from "react";
import Styles from "../styles/auth.module.scss";
import { StatesContext } from "./_app";
import { useRouter } from "next/router";
import Link from "next/link";

function Login() {
  const router = useRouter();
  const { states, setStates } = useContext(StatesContext);
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    const auth = localStorage.getItem(`grocery_store_${userDetails.username}`);
    if (!auth || userDetails.password !== auth)
      return alert("Invalid credentials!");
    setStates((prev) => ({ ...prev, user: userDetails }));
    router.push("/");
  }

  return (
    <main className={Styles.main}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          size="small"
          label={"Username"}
          variant={"outlined"}
          color={"success"}
          type={"text"}
          value={userDetails.username}
          onChange={(e) => {
            setUserDetails((prev) => ({ ...prev, username: e.target.value }));
          }}
        />
        <TextField
          size="small"
          label={"Password"}
          variant={"outlined"}
          color={"success"}
          type={"password"}
          value={userDetails.password}
          onChange={(e) => {
            setUserDetails((prev) => ({ ...prev, password: e.target.value }));
          }}
        />
        <Button type="submit">Login</Button>
        <p>
          Don&apos;t have an account?{" "}
          <Link href={"/signup"} passHref>
            Create
          </Link>
        </p>
      </form>
    </main>
  );
}

export default Login;
