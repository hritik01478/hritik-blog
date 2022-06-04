import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Hritik's Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color: "black",
                    backgroundColor: "#ffa31a",
                    borderRadius: '8px',
                    fontWeight: '200'
                }}>New Blog</Link>
            </div>
        </nav >
    );
}

export default Navbar;