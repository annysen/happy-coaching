import Blogs from "./Components/Blogs/Blogs";
import BookNow from "./Components/BookNow/BookNow";
import Cover from "./Components/Cover/Cover";
import FeedBack from "./Components/FeedBack/FeedBack";
import Footer from "./Components/Footer/Footer";
import Guide from "./Components/Guide/Guide";
import Intro from "./Components/Intro/Intro";
import Nav from "./Components/Nav/Nav";

const myStyle = {
  maxWidth: "1440px",
  margin: "auto",
};
function App() {
  return (
    <div style={myStyle}>
      <Nav />
      <Cover />
      <Intro />
      <FeedBack />
      <Blogs />
      <Guide />
      <BookNow />
      <Footer />
    </div>
  );
}

export default App;
