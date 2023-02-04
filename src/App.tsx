import { useRef } from "react";

import { Text } from "./components";
import { Emphasize } from "./emphesize";

function App() {
  const ref = useRef<HTMLAnchorElement>(null);
  return (
    <div className="App">
      <Text as="h1">h1 tag </Text>

      <Text as={Emphasize}>a custom element </Text>

      <Text
        as="h3"
        color="red"
        style={{ backgroundColor: "black" }}
      >
        h3 tag
      </Text>
      <Text as="a" href="https://google.com" ref={ref}>
        anchor tag
      </Text>
      <Text
        as="button"
        color="red"
        style={{ backgroundColor: "blue", padding: "20px" }}
      >
        test
      </Text>
    </div>
  );
}

export default App;
