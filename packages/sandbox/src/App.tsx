import { Label } from "awesome";

function App() {
  return (
    <div className="gap-8 flex flex-col">
      <Label
        size={{
          initial: "sm",
          md: "xxl",
        }}
        fontWeight={"extraBold"}
      >
        Label
      </Label>
    </div>
  );
}

export default App;
