      const container = document.getElementById("root");
      const root = ReactDOM.createRoot(container);

      function HomePage() {
        const [number, setNumber] = React.useState(0);

        function handleClickPlus() {
          setNumber(number + 1);
        }

        function handleClickMinus() {
          setNumber(number - 1);
        }

        function resetHandle() {
          setNumber(0);
        }

        return (
          <>
            <h3>Counter App - ReactJS</h3>
            <div>
              <button onClick={handleClickMinus}>-</button>
              <span>({number})</span>
              <button onClick={handleClickPlus}>+</button>
            </div>

            <button onClick={resetHandle}>Reset</button>
          </>
        );
      }
      root.render(<HomePage />);
