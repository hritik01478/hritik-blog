import { Link } from 'react-router-dom';

const BlogList = ({ blogs, title }) => {

    return (
        <div className="blog-list">
            <h2 className="secondary">{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <div className="container">
                            <h3 className='tertiary'>{blog.title}</h3>
                            <p>written by {blog.author}</p>
                        </div>
                    </Link>
                </div>
            ))
            }
        </div>
    );
}

export default BlogList;