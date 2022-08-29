const Navbar = () => {
    return (
      <nav className="navbar">
        <a href="/">
          <h1>Eteration</h1>
        </a>
        <div className="links">
          <a href="/questions">Questions</a>
          <a href="/answers" >Answers</a>
        </div>
      </nav>
    );
  }
   
  export default Navbar;