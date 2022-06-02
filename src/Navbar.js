const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Hritik's Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: "black",
                    backgroundColor: "#ffa31a",
                    borderRadius: '8px',
                    fontWeight: '200'
                }}>New Blog</a>
            </div>
        </nav >
    );
}

export default Navbar;