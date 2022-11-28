import { NextPage } from "next";

import Container from "components/Container";

const Home: NextPage = () => (
  <Container>
    <div className="flex flex-col justify-center items-center border-gray-700 mx-auto py-16">
      <div className="flex flex-col min-h-[calc(100vh-17rem)]">
        <h1 className="mb-4">X-Writer</h1>
        <p>Write your input below and let us generate the rest...</p>
      </div>
    </div>
  </Container>
);

export default Home;
