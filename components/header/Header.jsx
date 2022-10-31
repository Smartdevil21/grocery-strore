import React, { useContext } from "react";
import Styles from "../../styles/components/header.module.scss";
import { Button, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
import { StatesContext } from "../../pages/_app";

const Header = () => {
  const { states } = useContext(StatesContext);
  return (
    <header className={Styles.header}>
      <Link href={"/"} passHref>
        <h1>JustInTime</h1>
      </Link>
      <div className={Styles.cartBtn}>
        <Link href={"/cart"} passHref>
          <Button>
            <p>Cart({states.cart.length})</p>
            <ShoppingCartIcon />
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
