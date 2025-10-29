import CardNav from "../../components/CardNav/CardNav";
import VideoComponent from "../../components/video/video";
import "./home.css";

function Home() {
  // Define logo and items variables
  const logo = "path/to/logo.png"; // Replace with your actual logo path or object
  const items = [
    {
      label: "Home",
      link: "/",
      bgColor: "#ffffff", // Replace with your desired color
      textColor: "#000000", // Replace with your desired color
      links: [], // Add sub-links if needed
    },
    {
      label: "About",
      link: "/about",
      bgColor: "#ffffff",
      textColor: "#000000",
      links: [],
    },
    // Add more items as needed
  ];

  return (
    <>
      {/* inserire la navbar */}
      <header>
        <CardNav logo={logo} items={items} />
      </header>

      {/* Parte centrale della home  */}

      <VideoComponent />
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 text-left mt-5">
          {/* <hr /> */}
            <h1 className="fs-1"><strong>SAR Progettazioni</strong></h1>
            
          </div>
        </div>
      </div>

      
      {/* aggiungere il footer */}
      <footer></footer>
    </>
  );
}

export default Home;
