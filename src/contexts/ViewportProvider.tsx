import React from "react";

const ViewportContext = React.createContext<{ width: number; height: number }>({
  width: window.innerWidth,
  height: window.innerHeight,
});

const ViewportProvider = ({ children }: { children: React.ReactNode }) => {
  // This is the exact same logic that we previously had in our hook

  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  /* Now we are dealing with a context instead of a Hook, so instead
     of returning the width and height we store the values in the
     value of the Provider */
  return (
    <ViewportContext.Provider value={{ width, height }}>
      {children}
    </ViewportContext.Provider>
  );
};

/* Rewrite the "useViewport" hook to pull the width and height values
   out of the context instead of calculating them itself */
const useViewport = () => {
  /* We can use the "useContext" Hook to acccess a context from within
     another Hook, remember, Hooks are composable! */
  const { width, height } = React.useContext<{ width: number; height: number }>(
    ViewportContext
  );
  return { width, height };
};

export { useViewport };

export default ViewportProvider;
