function Square({ value }) {
  function handleClick() {
    console.log("Clicked");
  }

  return (
    <button
      className="bg-white border border-gray-400 h-16 w-16 m-2 leading-9 text-lg rounded-2xl"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

export default function Board() {
  return (
    <>
      <div className="flex">
        <Square value={1} />
        <Square value={2} />
        <Square value={3} />
      </div>
      <div className="flex">
        <Square value={4} />
        <Square value={5} />
        <Square value={6} />
      </div>
      <div className="flex">
        <Square value={7} />
        <Square value={8} />
        <Square value={9} />
      </div>
    </>
  );
}
