export default function Home() {
    return (
      <>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Home</title>
        </Head>
  
        <header className="header">
          <nav className="navbar flex justify-between items-center p-4">
            <div className="logo">
            </div>
            <ul className="nav-links flex space-x-4">
              <li><a href="index.html" className="active text-blue-500">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="portfolio.html">Portfolio</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </nav>
        </header>
  
        <section className="hero bg-gray-200 p-8">
          <div className="hero-content text-center">
            <h1 className="hero-title-medium text-3xl font-bold">Hey, I'm William Gaston.</h1>
            <h2 className="hero-title-large text-2xl font-semibold">Student, Enthusiast, Aspiring Developer</h2>
            <p className="hero-description mt-4 text-gray-700">
              I am currently a 1st Year Computer Science @ UNSW. This website is a passion project detailing my interests and progress as a developer: So stay tuned :)
            </p>
            <a href="about.html" className="hero-button inline-block mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Learn More
            </a>
          </div>
        </section>
      </>
    );
  }