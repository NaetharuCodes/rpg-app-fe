import AppShell from "./components/AppShell";
import GalleryPage from "./pages/GalleryPage";

function App() {
  return (
    <>
      <AppShell children={<GalleryPage />} />
    </>
  );
}

export default App;
