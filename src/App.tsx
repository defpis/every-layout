import "./App.scss";
import { layouts } from "./layouts";

function Cover() {
  return (
    <div className="cover">
      <h1>Every Layout</h1>
    </div>
  );
}

export function App() {
  return (
    <>
      <Cover />

      {layouts.map((layout) => {
        return <>{layout}</>;
      })}
    </>
  );
}
