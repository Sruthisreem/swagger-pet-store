import React from "react";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-red-300 bg-gradient-to-br from-gray-300 via-teal-700 to-gray-800">
      <div className="flex items-center animate-bounce">
        <svg viewBox="0 0 64 64" className="w-32 text-indigo-700 fill-current">
          <path d="M52.275 22.147a63.008 63.008 0 0 0-2.025-.637c.112-.462.212-.925.313-1.387 1.537-7.45.524-13.437-2.888-15.412-3.287-1.888-8.65.075-14.075 4.8-.538.462-1.063.95-1.563 1.437-.337-.325-.687-.65-1.037-.962-5.688-5.05-11.387-7.175-14.8-5.188-3.275 1.9-4.25 7.537-2.875 14.587.138.7.288 1.388.463 2.088-.8.224-1.588.474-2.325.737C4.788 24.522 0 28.172 0 31.947c0 3.9 5.1 7.812 12.037 10.187.563.187 1.125.375 1.7.537a45.04 45.04 0 0 0-.5 2.25c-1.312 6.937-.287 12.437 2.988 14.324 3.375 1.95 9.05-.05 14.575-4.887.438-.387.875-.787 1.312-1.212.55.537 1.125 1.05 1.7 1.55 5.35 4.6 10.638 6.462 13.9 4.574 3.375-1.95 4.475-7.862 3.05-15.061a52.467 52.467 0 0 0-.374-1.688c.4-.112.787-.237 1.175-.362C58.775 39.772 64 35.909 64 31.947c0-3.787-4.925-7.462-11.725-9.8zM35.362 11.536c4.65-4.05 8.988-5.638 10.963-4.5 2.112 1.212 2.925 6.112 1.6 12.55a20.19 20.19 0 0 1-.287 1.249 63.994 63.994 0 0 0-8.413-1.325 63.153 63.153 0 0 0-5.325-6.637c.488-.463.962-.9 1.462-1.337zM20.9 38.434a86.067 86.067 0 0 0 1.975 3.237 56.605 56.605 0 0 1-5.8-.937c.55-1.8 1.238-3.662 2.038-5.562a82.583 82.583 0 0 0 1.787 3.262zm-3.787-15.037c1.8-.4 3.712-.725 5.7-.975a73.891 73.891 0 0 0-1.925 3.175 73.904 73.904 0 0 0-1.776 3.25 59.594 59.594 0 0 1-2-5.45zm3.425 8.612a78.537 78.537 0 0 1 2.674-5.074 75.374 75.374 0 0 1 3.05-4.863A78.408 78.408 0 0 1 32 21.86c1.95 0 3.875.075 5.737.212a87.325 87.325 0 0 1 3.038 4.838 85.138 85.138 0 0 1 2.712 5.05 82.936 82.936 0 0 1-2.7 5.1 85.374 85.374 0 0 1-3.024 4.874c-1.863.137-3.8.2-5.763.2-1.962 0-3.863-.063-5.7-.175a76.007 76.007 0 0 1-5.762-9.95zm22.574 6.4a86.342 86.342 0 0 0 1.825-3.337c.8 1.812 1.5 3.65 2.113 5.537-1.938.437-3.9.775-5.875 1a83.722 83.722 0 0 0 1.938-3.2zm1.8-9.562c-.587-1.1-1.187-2.2-1.812-3.275a81.255 81.255 0 0 0-1.913-3.15c2.013.25 3.938.588 5.738 1a55.315 55.315 0 0 1-2.012 5.425zM32.026 14.785a54.888 54.888 0 0 1 3.7 4.475 81.997 81.997 0 0 0-7.438 0 63.146 63.146 0 0 1 3.738-4.475zm-14.5-7.662c2.1-1.225 6.763.525 11.675 4.875.313.275.625.575.95.875a63.504 63.504 0 0 0-5.362 6.637c-2.826.25-5.625.688-8.4 1.3-.163-.637-.3-1.287-.438-1.937-1.175-6.05-.4-10.612 1.575-11.75zm-3.062 32.949a31.894 31.894 0 0 1-1.55-.488c-2.663-.837-5.688-2.162-7.876-3.9a5.609 5.609 0 0 1-2.35-3.737c0-2.287 3.95-5.212 9.65-7.2.713-.25 1.438-.475 2.163-.687a66.462 66.462 0 0 0 3.063 7.95 68.322 68.322 0 0 0-3.1 8.062zM29.038 52.32a22.88 22.88 0 0 1-7.05 4.412 5.533 5.533 0 0 1-4.413.163c-1.987-1.15-2.813-5.563-1.688-11.5.138-.7.288-1.4.463-2.087 2.8.6 5.625 1.012 8.487 1.225a65.963 65.963 0 0 0 5.4 6.674c-.4.388-.8.763-1.2 1.113zm3.062-3.037a59.114 59.114 0 0 1-3.788-4.538c1.2.05 2.438.075 3.688.075 1.288 0 2.55-.025 3.8-.087a53.904 53.904 0 0 1-3.7 4.55zm16.337 3.75a5.555 5.555 0 0 1-2.062 3.912c-1.987 1.15-6.225-.35-10.8-4.275-.525-.45-1.05-.938-1.588-1.438a61.833 61.833 0 0 0 5.276-6.7 61.623 61.623 0 0 0 8.525-1.312c.125.513.237 1.025.337 1.525.612 2.7.712 5.512.313 8.287zm2.276-13.437c-.35.112-.7.225-1.063.325a63.494 63.494 0 0 0-3.188-7.975 63.177 63.177 0 0 0 3.063-7.862c.65.187 1.275.387 1.875.587 5.825 2 9.913 4.975 9.913 7.25 0 2.45-4.363 5.612-10.6 7.675zM32 37.722a5.724 5.724 0 0 0 5.725-5.725A5.724 5.724 0 0 0 32 26.272a5.724 5.724 0 0 0-5.725 5.725A5.724 5.724 0 0 0 32 37.722z" />
        </svg>
        <span className="pl-5 pr-2 text-6xl">+</span>
      </div>
      <p className="mt-6 tracking-wide">
        Edit <code>src/App.jsx</code> and save to reload.
      </p>
      <div className="flex justify-center mt-4">
        <a
          className="px-4 py-2 text-white bg-indigo-500 rounded hover:bg-indigo-600"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="px-4 py-2 ml-4 text-white bg-indigo-500 rounded hover:bg-indigo-600"
          href="https://tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Tailwind CSS v3.x
        </a>
      </div>
    </div>
  );
}

export default App;
