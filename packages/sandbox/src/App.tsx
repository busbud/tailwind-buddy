// @ts-nocheck
import { Label } from "ui-kit";

function App() {
  return (
    <div className="gap-8 flex flex-col">
      <Label
        className="bg-purple-500"
        size={{
          initial: "md",
          sm: "lg",
          md: "xl",
          lg: "xxl",
        }}
        fontWeight="bold"
      >
        Label
      </Label>
    </div>
  );
}

export default App;
