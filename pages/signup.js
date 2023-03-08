import React, { useContext, useState } from "react";
import Styles from "../styles/auth.module.scss";
import { useRouter } from "next/router";
import { Button, TextField } from "@mui/material";
import { StatesContext } from "./_app";
import Link from "next/link";

function Signup() {
  const router = useRouter();
  const { states, setStates } = useContext(StatesContext);

  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (userDetails.username < 4) return alert("Username is too short!");
    if (userDetails.password < 4) return alert("Password is too short!");
    localStorage.setItem(
      `grocery_store_${userDetails.username}`,
      userDetails.password
    );
    setStates((prev) => ({ ...prev, user: userDetails }));
    router.push("/home");
  }
  return (
    <main className={Styles.main}>
      <h1>Create Your Account</h1>
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
        <Button type="submit">Create</Button>
        <p>
          Already have an account?{" "}
          <Link href={"/"} passHref>
            Login
          </Link>
        </p>
      </form>
    </main>
  );
}

export default Signup;
