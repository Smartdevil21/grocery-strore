import Head from "next/head";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import Styles from "../styles/Home.module.scss";
import Wrapper from "../components/wrapper/Wrapper";
import ShopCard from "../components/shop/ShopCard";
import { Button, Stack } from "@mui/material";
import { products } from "../utils/productData";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { StatesContext } from "./_app";
import axios from "axios";

export default function Home() {
  const router = useRouter();
  const { states, setStates } = useContext(StatesContext);
  const [userInfo, setUserInfo] = useState({
    file: "",
  });
  useEffect(() => {
    // if (!states.user.username) {
    //   router.push("/");
    // }
  }, []);

  function handleChange(e) {
    setUserInfo((prev) => ({ ...prev, file: e.target.files[0] }));
  }

  const upload = async () => {
    try {
      const formdata = new FormData();
      formdata.append(
        "operations",
        JSON.stringify({
          query: "mutation UploadFile($file:Upload!){singleUpload(file:$file)}",
          variables: { file: null },
        })
      );
      formdata.append("map", JSON.stringify({ 0: ["variables.file"] }));
      formdata.append("0", userInfo.file);
      const res = await axios.post("http://localhost:8003/graphql", formdata);
      console.log(res);
    } catch (error) {
      console.log(`Err in uploading image:${error}`);
    }
  };

  return (
    <Wrapper>
      {/* <div>
        <input type="file" name="profile" onChange={handleChange} />
        <button onClick={upload}>Uplaod</button>
      </div> */}
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
