const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1>BLOG</h1>
            <div className="links">
                <a href="/">HOME</a>
                <a href="/create" style={{
                    color:"blue",
                    backgroundColor:"yellow",
                    borderRadius:"8px"
            }}>CREATE new BLOG</a>
            </div>
        </div>
     );
}
 
export default Navbar;