import styled from "styled-components";
import { PatternedText } from "./components/texts/PatternedText";
import { Header } from "./components/layouts/Header";
import { FilledText } from "./components/texts/FilledText";

const Layout = styled.div`

`

const App = () => {
  return (
    <Layout>
      <Header>
        <FilledText>개발과</FilledText>
        <PatternedText>디자인을 하는</PatternedText>
      </Header>
    </Layout>
  );
}

export default App;
