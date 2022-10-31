import Head from "next/head";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import Styles from "../styles/Home.module.scss";
import Wrapper from "../components/wrapper/Wrapper";
import ShopCard from "../components/shop/ShopCard";
import { Button, Stack } from "@mui/material";
import { products } from "../utils/productData";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { StatesContext } from "./_app";

export default function Home() {
  const router = useRouter();
  const { states, setStates } = useContext(StatesContext);
  useEffect(() => {
    if (!states.user.username) {
      router.push("/login");
    }
  }, []);
  return (
    <Wrapper>
      <div className={Styles.banner}>
        <p>No.1 consumer goods shopping resource.</p>
        <h1>Discover amazing grocery deals and save actual money!</h1>

        <Stack
          direction={"row"}
          alignItems={"center"}
          className={Styles.inputSec}
        >
          <SearchIcon />
          <input type="text" placeholder="Search for a brand or product" />
          <Button size="small">
            <p>Search</p>
          </Button>
        </Stack>
      </div>
      <section className={Styles.shop}>
        <h2>Weekly Deals</h2>
        <p>Get minimum 15% off</p>
        <div className={Styles.shopContainer}>
          {products.map((product, index) => {
            return <ShopCard key={index} product={product} />;
          })}
        </div>
      </section>
    </Wrapper>
  );
}
