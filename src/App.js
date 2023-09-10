import './App.css';
import logo from './download.jpg';


function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">EMDD-Students United</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit"> <a className='search' href="https://youtu.be/dQw4w9WgXcQ?si=YlSmrYIdup1vpIdj">Search</a></button>
            </form>
          </div>
        </div>
      </nav>
      <div className='baap m-5'>
        <div className="card m-5 child" >
          {/* <Image
            src={('./download.jpg')}
          /> */}
          <div className="card-body">
            <img src={logo} className="logo" alt="Logo" />;
            <h5 className="card-title" >Project Link</h5>
            <p className="card-text">Click on the button .</p>
            <a href="#" className="btn btn-primary" href="https://scratch.mit.edu/projects/890308698">Click</a>
          </div>
        </div>
        <div className="main child">
          <h1>Flag Among Us!!</h1>
          <p>
            Hi, In this Scratch Project , we had created a educational game for everyone .(*no restrictions) In which we have to Guess The Flag (as the name suggests) by looking at the flag.
            No one will guess the all !! 😜
          </p>
          <p>
            <u>Our Team Members-:</u>
            <br />
            1)Rudransh<br />2)Aditya<br />3)Arsh<br />4)Tanmay<br />5)Lavya<br />6)Anant
          </p>
        </div>
      </div>
      <div className="container my-5">

        <footer className="text-center text-lg-start footer" >
          <div className="container d-flex justify-content-center py-5">
            <a href="https://github.com/rudransh61">
              <button type="button" className="btn btn-dark btn-lg btn-floating">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </button>
            </a>
            

          </div>

          <div className="text-center p-3" >
            © 2023 Copyright:Rudransh
          </div>
        </footer>

      </div>
    </div>



  );
}

export default App;
