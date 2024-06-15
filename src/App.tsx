import "./App.css";

function App() {
  return (
    <div className="bg-gray-600">
      <div className="bg-gray-300">
        {[1, 2, 3].map(() => {
          return (
            <div className="grid grid-cols-3">
              <h3>Todo</h3>
              <div className="border border-dashed bg-purple-400">
                <img
                  src={"/assets/add.svg"}
                  alt="Add Todo"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
