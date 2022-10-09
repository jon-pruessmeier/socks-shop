import { useRecoilState } from "recoil";
import { cartState } from "../../../../model/atoms";
import { PurchaseProduct } from "./Purchase-Product";
import { sum } from "mathjs";
export interface PurchaseListProps {
  purchaseHandler?: (val?: unknown) => unknown;
}

export function PurchaseList({ purchaseHandler }: PurchaseListProps) {
  const [cart] = useRecoilState(cartState);

  if (cart.length === 0) {
    return (
      <div className={"relative p-2 h-[40rem] w-[40rem]"}>
        <iframe
          title="empty cart"
          src="https://giphy.com/embed/l1awDwsitwM66t8onL"
          className="giphy-embed w-full h-full"
          allowFullScreen
        />
      </div>
    );
  }

  const total: number = sum(cart.map((item) => item.price));

  return (
    <div>
      {cart.map((product, index) => (
        <PurchaseProduct product={product} index={index} />
      ))}
      <p className={"text-center font-medium text-3xl"}>Total: {total}€</p>
      <div className={" w-full flex justify-center items-center py-2"}>
        <button
          className={"bg-lime-600 p-2 rounded-lg text-white"}
          onClick={() => {
            if (purchaseHandler) purchaseHandler();
          }}
        >
          Purchase!
        </button>
      </div>
    </div>
  );
}
