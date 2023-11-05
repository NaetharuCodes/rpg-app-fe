import { Outlet } from "react-router-dom";
import AppShell from "./components/AppShell";

function App() {
  return (
    <>
      <AppShell children={<Outlet />} />
    </>
  );
}

export default App;
