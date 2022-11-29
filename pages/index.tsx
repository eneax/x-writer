import * as React from "react";
import { NextPage } from "next";

import Container from "components/Container";

const Home: NextPage = () => (
  <Container>
    <div className="flex flex-col justify-center items-left border-gray-700 py-16">
      <div className="flex flex-col text-left min-h-[calc(100vh-15rem)]">
        <h1 className="mb-4">X-Writer</h1>
        <p>Write your input below and let us generate the rest.</p>

        <div className="w-full mb-8">
          <textarea
            name="gpt-3-input"
            id="gpt-3-input"
            placeholder="Start typing here..."
            cols={30}
            rows={10}
            className="block w-full px-4 py-2 bg-gray-800 text-primary-50 border rounded-2xl border-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-transparent"
          />
        </div>
      </div>
    </div>
  </Container>
);

export default Home;
