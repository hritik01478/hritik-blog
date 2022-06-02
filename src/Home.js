import { useState } from "react";
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new Website', body: 'lorem ipsum....', author: 'hritik', id: 1 },
        { title: 'First day of my GYM', body: 'lorem ipsum....', author: 'jatin', id: 2 },
        { title: 'My first scolding', body: 'lorem ipsum....', author: 'brijesh', id: 3 }
    ]);

    return (
        <div className="home">
            <BlogList blogs={blogs} title={"All Blogs!"} />
        </div>
    );
}

export default Home;