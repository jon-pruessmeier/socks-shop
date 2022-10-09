import { Overlay } from "./Overlay";
import { PurchaseHeader } from "./header/Purchase-Header";
import { PurchaseList } from "./List/Purchase-List";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { cartState } from "../../../model/atoms";
import { ThankYou } from "./Thank-You";

export function PurchaseWindow() {
  const [purchased, setPurchased] = useState(false);
  const [cart, setCart] = useRecoilState(cartState);

  const purchase = async () => {
    const response = await fetch("http://localhost:4200/api/products", {
      method: "POST",
      body: JSON.stringify(cart),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <div
        className={
          "absolute z-40 top-1/2 left-1/2 transform " +
          "-translate-x-1/2 -translate-y-1/2 border border-black rounded-lg" +
          " bg-white text-black h-fit w-fit"
        }
      >
        <PurchaseHeader />
        {purchased ? (
          <ThankYou />
        ) : (
          <PurchaseList
            purchaseHandler={async () => {
              await purchase()
                .then(() => {
                  setPurchased(true);
                  setCart([]);
                })
                .catch(() => {
                  console.log("something went wrong");
                });
            }}
          />
        )}
      </div>

      <Overlay />
    </>
  );
}
