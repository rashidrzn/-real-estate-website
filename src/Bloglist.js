const Bloglist = ({blogs , title }) => {

    //another method, down here.... 
    // const blogs = props.blogs;
    // const title = props.title;
    // console.log(blogs,props);

    return ( 
        <div className="Blog-list">
            <h1>Title : {title}</h1>
             {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h2 >{blog.title}</h2>
                    <p style={{backgroundColor:"transparent",borderRadius:"8px", width:"35%"}}>written by {blog.author}</p>

                </div>
            ))}
        </div>
     );
}
 
export default Bloglist;