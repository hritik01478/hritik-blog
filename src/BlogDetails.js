import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id);

    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE',
        })
            .then(() => {
                // console.log('Blog deleted');
                history.push('/');
            })
    }
    return (
        <div className="blog-details">
            {error && <div>{error}</div>}
            {isPending && <div className="load">Loading...</div>}
            {blog && (<article>
                <h2 className="secondary">{blog.title}</h2>
                <p >written by {blog.author}</p>
                <div>{blog.body}</div>
                <button onClick={handleClick}>Delete</button>
            </article>)}
        </div>
    );
}

export default BlogDetails;