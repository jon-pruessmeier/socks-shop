import { useSetRecoilState } from "recoil";
import { purchaseWIndowState } from "../../../../model/atoms";

export function CloseButton() {
  const setPurchaseWindowActive = useSetRecoilState(purchaseWIndowState);
  return (
    <button
      onClick={() => setPurchaseWindowActive(false)}
      type="button"
      className="bg-red-500 rounded-md p-2 inline-flex items-center justify-center
      text-white hover:bg-red-800 focus:outline-none
      focus:ring-2 focus:ring-inset focus:ring-indigo-500 m-2 p-2 mt-2"
    >
      <span className="sr-only">Close menu</span>
      <svg
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
}
