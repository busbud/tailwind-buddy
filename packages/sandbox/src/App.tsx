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
        className="h-full w-full rounded-bl-none rounded-tl-none xl:rounded-bl-none xl:rounded-tl-none bg-blue-500 md:bg-blue-500"
        appearance="primary"
        iconStart={<SearchIcon />}
        size={{
          initial: "sm",
          md: "md",
        }}
      >
        asdas
      </Button>

      <Dumb />
    </div>
  );
}

export default App;
