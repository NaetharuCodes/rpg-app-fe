import AppShell from "./components/AppShell";
import CoverPage from "./pages/CoverPage";
import GalleryPage from "./pages/GalleryPage";

function App() {
  return (
    <>
      <AppShell children={<CoverPage />} />
    </>
  );
}

export default App;
