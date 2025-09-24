// Debounce: A technique to limit the rate at which a function is executed, often used to improve performance in scenarios like search input fields where frequent updates can lead to excessive re-renders or API calls.
// 👉 Simple definition:
// “Debouncing means delaying the execution of a function until after the user stops performing an action for a certain time.”

// 👉 Example (real-world):
// “In a search box, instead of calling the API on every keystroke, debouncing waits until the user stops typing, then makes one call.”
	// •	Common use: Search input, API calls (wait until user stops typing).

function DebounceExample() {
  const [text, setText] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    // Wait for 500ms after user stops typing
    const handler = setTimeout(() => {
      setDebouncedValue(text);
    }, 500);

    return () => {
      clearTimeout(handler); // cleanup previous timer
    };
  }, [text]);

  return (
    <div className="p-4">
      <h2 className="font-bold">Debounce Example</h2>
      <input
        className="border p-2 rounded"
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p className="mt-2">Debounced Value: {debouncedValue}</p>
    </div>
  );
}

export default DebounceExample;


// 2. Throttling
// Throttle: A technique to ensure a function is only executed once in a specified time interval, useful for limiting the rate of function calls in scenarios like window resizing or scrolling events.
//  Simple definition:
// “Throttling means making sure a function runs at most once in a given time interval, no matter how many times the event happens.”

// 👉 Example (real-world):
// “When handling scroll events, throttling ensures the function runs once every 300ms instead of on every pixel scrolled.”
    // •	Common use: Scroll events, window resize.
function ThrottleExample() {
  const [scrollY, setScrollY] = useState(0);
  const lastExecution = useRef(0);

  const handleScroll = () => {
    const now = Date.now();
    if (now - lastExecution.current > 200) { // Throttle to once every 200ms
      setScrollY(window.scrollY);
      lastExecution.current = now;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="p-4">
      <h2 className="font-bold">Throttle Example</h2>
      <p>Scroll Y Position: {scrollY}</p>
      <div style={{ height: "150vh" }}></div> {/* To enable scrolling */}
    </div>
  );
}

export { ThrottleExample };// 📝 Pro-Level Answer (Simple English, Interview-Ready)