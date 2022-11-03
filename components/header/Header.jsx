import React, { useContext } from "react";
import Styles from "../../styles/components/header.module.scss";
import { Button, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
import { StatesContext } from "../../pages/_app";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const { states, setStates } = useContext(StatesContext);

  const logout = () => {
    setStates((prev) => ({ ...prev, user: {} }));
    router.push("/");
  };

  return (
    <header className={Styles.header}>
      <Link href={"/home"} passHref>
        <h1>JustInTime</h1>
      </Link>
      <div className={Styles.cartBtn}>
        <Link href={"/cart"} passHref>
          <Button>
            <p>Cart({states.cart.length})</p>
            <ShoppingCartIcon />
          </Button>
        </Link>
        <Link href={"/about"} passHref>
          <Button>
            <p>About</p>
          </Button>
        </Link>
        <Button className={Styles.logout} onClick={logout}>
          Logout
        </Button>
      </div>
    </header>
  );
};

export default Header;
