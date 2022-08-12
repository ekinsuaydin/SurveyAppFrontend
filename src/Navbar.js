const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>Eteration</h1>
        <div className="links">
          <a href="/questions">Questions</a>
          <a href="/answers" style={{ 
            color: 'white', 
            backgroundColor: '#f1356d',
            borderRadius: '8px' 
          }}>Answers</a>
        </div>
      </nav>
    );
  }
   
  export default Navbar;