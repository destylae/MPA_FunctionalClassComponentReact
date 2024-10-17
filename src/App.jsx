import React from "react";

// Class Komponen
class Button extends React.Component {
  render() {
    return (
      <button
        className="h-10 px-6 font-semibold rounded-md bg-white text-black"
        type="submit"
      >
        Beli Sekarang
      </button>
    );
  }
}

// Functional Komponen
function ButtonBlack() {
  return (
    <button
      className="h-10 px-6 font-semibold rounded-md bg-black text-white"
      type="submit"
    >
      Beli Sekarang
    </button>
  );
}

function ButtonRed() {
  return (
    <button
      className="h-10 px-6 font-semibold rounded-md bg-red-500 text-white"
      type="submit"
    >
      Beli Sekarang
    </button>
  );
}

function App() {
  return (
    <div className="flex justify-center bg-blue-400 min-h-screen items-center">
      <div>
        <Button />
        <Button />
        <ButtonRed />
        <ButtonBlack />
      </div>
    </div>
  );
}

export default App;