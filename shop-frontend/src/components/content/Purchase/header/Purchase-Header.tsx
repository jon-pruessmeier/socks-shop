import { CloseButton } from "./Close-Button";

export function PurchaseHeader() {
  return (
    <div
      className={
        "purchase-header flex h-fit justify-between items-center bg-black/5"
      }
    >
      <h2 className={"text-lg font-medium text-gray-900 m-2 mt-2"}>
        Shopping Cart
      </h2>
      <CloseButton />
    </div>
  );
}
