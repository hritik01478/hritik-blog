import { useState, useEffect } from "react";
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new Website', body: 'lorem ipsum....', author: 'hritik', id: 1 },
        { title: 'First day of my GYM', body: 'lorem ipsum....', author: 'jatin', id: 2 },
        { title: 'My first scolding', body: 'lorem ipsum....', author: 'brijesh', id: 3 }
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id != id)
        setBlogs(newBlogs);
    }

    return (
        <div className="home">
            <BlogList blogs={blogs} title={"All Blogs!"} handleDelete={handleDelete} />
        </div>
    );
}

export default Home;