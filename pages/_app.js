import '../styles/globals.css';
import Head from 'next/head';
import Navbar from "../components/Navbar";
import BottomMobileNavbar from "../components/BottomMobileNavbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous" />
      {/*  <script src="https://kit.fontawesome.com/" crossorigin="anonymous"></script> insert your own font awesome js cdn */}
      <script src="https://kit.fontawesome.com/e21c35fc0f.js" crossorigin="anonymous"></script>
    </Head>
    {/* Desktop */}

    <div className="d-none d-lg-block">
      <Navbar />
      <div className="container" style={{ backgroundColor: "#fafafa"}}>
        <Component {...pageProps} />
      </div>
    </div>

    {/* Mobile	*/}
    <div className="container d-lg-none">
      <Component {...pageProps} />
      <BottomMobileNavbar />
    </div>
    </>
  )
}

export default MyApp
