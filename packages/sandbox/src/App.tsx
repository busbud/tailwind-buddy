import { Dumb, Label } from "ui-kit";

function App() {
  return (
    <div className="gap-8 flex flex-col">
      <Label
        size="large"
        disabled={true}
        fontWeight="xxl"
        className="text-green-500"
      >
        Label
      </Label>

      <Dumb />
    </div>
  );
}

export default App;
