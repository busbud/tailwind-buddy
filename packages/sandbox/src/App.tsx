import { Dumb, Label, Button, SearchIcon } from "ui-kit";

function App() {
  return (
    <div className="gap-8 grid grid-cols-3">
      <Label
        size="large"
        disabled={true}
        fontWeight="xxl"
        className="text-green-500"
      >
        Label
      </Label>

      <Button
        iconStart={<SearchIcon />}
      >
        Awesome button
      </Button>

      <Button
        appearance="primary"
      >
        Primary button
      </Button>

      <Dumb />
    </div>
  );
}

export default App;
