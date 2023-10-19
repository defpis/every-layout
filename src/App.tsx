import "./App.scss";
import { layouts } from "./layouts";

export function App() {
  return (
    <>
      <h1>Every Layout</h1>

      {layouts.map((layout) => {
        return <>{layout}</>;
      })}
    </>
  );
}
