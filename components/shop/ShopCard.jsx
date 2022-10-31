import React, { useContext, useState } from "react";
import { Button, IconButton, Stack } from "@mui/material";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Styles from "../../styles/components/shopCard.module.scss";
import { StatesContext } from "../../pages/_app";

function ShopCard({ product }) {
  const { states, setStates } = useContext(StatesContext);

  const iniQnty =
    states.cart.filter((ele) => ele.product.name === product.name)[0]?.qnty ||
    0;
  const [qnty, setQnty] = useState(iniQnty);

  function increaseQnty() {
    setQnty((prev) => prev + 1);
  }

  function decreaseQnty() {
    if (qnty <= 0) return;
    setQnty((prev) => prev - 1);
  }

  function addToCart() {
    const item = {
      product,
      qnty,
    };
    if (
      states.cart.filter((ele, index) => ele.product.name === product.name)[0]
    ) {
      //product is already in cart
      setStates((prev) => ({
        ...prev,
        cart: [
          ...prev.cart.filter((ele, ind) => {
            ele.product.name !== product.name;
          }),
          item,
        ],
      }));
    } else {
      setStates((prev) => ({
        ...prev,
        cart: [...prev.cart, item],
      }));
    }
    alert("Cart updated!");
  }

  return (
    <div className={Styles.shopCard}>
      <div className={Styles.image}>
        <Image src={product.image} width={250} height={200} alt={""} />
      </div>
      <div className={Styles.desc}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <p className={Styles.name}>{product.name}</p>
          <p>Rs.{product.rate}</p>
        </Stack>
        <p>(Rate per {product.type})</p>
        <div className={Styles.btns}>
          <Button size="small" onClick={decreaseQnty}>
            <RemoveIcon />
          </Button>
          <p>{qnty}</p>
          <Button size="small" onClick={increaseQnty}>
            <AddIcon />
          </Button>
        </div>
        <Button fullWidth onClick={addToCart}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default ShopCard;
