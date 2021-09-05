import React from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomeScreen from "./screens/HomeScreen";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
