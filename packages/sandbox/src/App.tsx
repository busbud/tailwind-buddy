import { Label } from "ui-kit";

function App() {
  return (
    <div className="gap-8 flex flex-col">
      <Label
        size={{
          "initial": "small",
          "md": "large"
        }}
        disabled={true}
        className="text-green-500"
      >
        Label
      </Label>
    </div>
  );
}

export default App;
