import { CartButton } from "./Cart-Button";

export function Header() {
  return (
    <div
      className={
        "sticky top-0 w-full z-20 bg-black p-2 flex align-items-center " +
        "justify-center space-x-16 text-white items-center"
      }
    >
      <img
        className={"object-scale-down h-24 w-24"}
        src={`${process.env.PUBLIC_URL}/assets/logos/brand_logo.png`}
        alt=""
      />
      <p className={"font-['Kanit'] text-4xl"}>
        The Socks Of A New Generation.
      </p>
      <CartButton />
    </div>
  );
}
