import ViewportProvider from "./contexts/ViewportProvider";
import { ThemeProvider } from "./contexts/shadcn/theme-provider";
import LandingPage from "./pages/Landing";

function App() {
  return (
    <ThemeProvider storageKey="vite-ui-theme">
      <ViewportProvider>
        <LandingPage />
      </ViewportProvider>
    </ThemeProvider>
  );
}

export default App;
