import Blogs from "./Components/Blogs/Blogs";
import Cover from "./Components/Cover/Cover";
import FeedBack from "./Components/FeedBack/FeedBack";
import Intro from "./Components/Intro/Intro";
import Nav from "./Components/Nav/Nav";

function App() {
  return (
    <>
      <Nav />
      <Cover />
      <Intro />
      <FeedBack />
      <Blogs />
    </>
  );
}

export default App;
