import GlobalStyle from "../styles";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [isSummaryChosen, setIsSummaryChosen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSummaryChosen(true);
  };
  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        isSummaryChosen={isSummaryChosen}
        handleSubmit={handleSubmit}
      />
    </>
  );
}
