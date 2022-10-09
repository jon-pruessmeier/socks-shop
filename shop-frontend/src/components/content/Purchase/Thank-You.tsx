export function ThankYou() {
  return (
    <div
      className={
        "h-[30rem] w-[30rem] flex flex-col justify-center items-center font-bold text-3xl"
      }
    >
      <h1>Thank</h1>
      <h1>You!</h1>
      <iframe
        title={"thank you socks"}
        src="https://giphy.com/embed/xT0xesTIvqnaDu38cg"
        width="360"
        height="270"
        className="giphy-embed mt-6"
        allowFullScreen
      />
    </div>
  );
}
