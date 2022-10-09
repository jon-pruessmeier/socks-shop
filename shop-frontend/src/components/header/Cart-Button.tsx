import { BsCart } from "react-icons/bs";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { cartState, purchaseWIndowState } from "../../model/atoms";
import { useState } from "react";

export function CartButton() {
  const cartSize = useRecoilValue(cartState).length;
  const [onHover, setOnHover] = useState(false);
  const setPurchaseWindowActive = useSetRecoilState(purchaseWIndowState);

  return (
    <div
      className={
        "border-2 border-white rounded-lg text-white bg-transparent " +
        "flex items-center justify-center space-x-2 h-20 w-32 cursor-pointer"
      }
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      onClick={() => setPurchaseWindowActive(true)}
    >
      {onHover ? (
        <p className={"text-xl text-center"}>Show my Cart!</p>
      ) : (
        <>
          <BsCart size={"2.3rem"} />
          <p className={"text-4xl"}>{cartSize}</p>
        </>
      )}
    </div>
  );
}
