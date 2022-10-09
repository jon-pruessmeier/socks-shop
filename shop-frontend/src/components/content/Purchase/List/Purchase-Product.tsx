import { Product } from "../../../../model/Product";
import { BsTrash } from "react-icons/bs";
import { useRecoilState, useSetRecoilState } from "recoil";
import { cartState, purchaseWIndowState } from "../../../../model/atoms";

export interface PurchaseProductProps {
  product: Product;
  index: number;
}

export function PurchaseProduct({ product, index }: PurchaseProductProps) {
  const [cart, setCart] = useRecoilState(cartState);
  const setPurchaseWindowActive = useSetRecoilState(purchaseWIndowState);
  const imgPath = `${process.env.PUBLIC_URL}/assets/productImages/${product.imageSrc}`;
  return (
    <div
      className={"w-full h-fit flex flex-row justify-between items-center m-4"}
    >
      <div className={"flex flex-row justify-start basis-9/12"}>
        <img
          alt=""
          src={imgPath}
          className={"object-scale-down h-20 w-32 mr-4"}
        />
        <div className={"flex flex-col"}>
          <h2>{product.name}</h2>
          <hr className={"solid"} />
          <p>{product.price} €</p>
        </div>
      </div>

      <div
        onClick={() => {
          const filteredCart = cart.filter((elem, i) => i !== index);
          setCart(filteredCart);
          if (filteredCart.length === 0) setPurchaseWindowActive(false);
        }}
        className={
          "flex flex-col justify-end items-center cursor-pointer basis-3/12"
        }
      >
        <BsTrash className={"text-3xl"} />
        <h6>Remove</h6>
      </div>
    </div>
  );
}
