import { Product } from "../../model/Product";
import { useRecoilState, useSetRecoilState } from "recoil";
import { cartState } from "../../model/atoms";
import { useEffect, useState } from "react";
import { BsCartCheckFill, BsCartPlusFill } from "react-icons/bs";

export interface AddToCartButtonProps {
  product: Product;
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const [cart, setCartState] = useRecoilState(cartState);
  const [clicked, setClicked] = useState(false);
  const onClickHandler = () => {
    if (!clicked) {
      setCartState(cart.concat([product]));
      setClicked(true);
    }
  };

  useEffect(() => {
    if (clicked) setTimeout(() => setClicked(false), 1500);
  }, [clicked]);

  return (
    <div
      onClick={() => onClickHandler()}
      className={
        "p-8 rounded-full flex align-items-center " +
        "justify-content-center bg-lime-600 " +
        "z-10 absolute top-1/2 left-1/2 transform " +
        "-translate-x-1/2 -translate-y-1/2 text-white " +
        `${clicked ? "cursor-not-allowed" : "cursor-pointer"}`
      }
    >
      {clicked ? (
        <BsCartCheckFill size={"lg"} />
      ) : (
        <BsCartPlusFill size={"lg"} />
      )}
    </div>
  );
}
