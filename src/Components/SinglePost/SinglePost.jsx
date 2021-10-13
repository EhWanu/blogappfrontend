import './SinglePost.css'

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singPostWrapper">
                <img 
                    src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80" 
                    alt="" 
                    className="singlePostImg" 
                />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author:<b>JIM FLIM</b></span>
                    <span className="singlePostDate">1 Hour ago</span>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro numquam qui earum cum sapiente reprehenderit accusamus repellat sed repellendus, sit, quasi nostrum nobis iste, harum vel consectetur ipsam beatae voluptas.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro numquam qui earum cum sapiente reprehenderit accusamus repellat sed repellendus, sit, quasi nostrum nobis iste, harum vel consectetur ipsam beatae voluptas.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro numquam qui earum cum sapiente reprehenderit accusamus repellat sed repellendus, sit, quasi nostrum nobis iste, harum vel consectetur ipsam beatae voluptas.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro numquam qui earum cum sapiente reprehenderit accusamus repellat sed repellendus, sit, quasi nostrum nobis iste, harum vel consectetur ipsam beatae voluptas.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro numquam qui earum cum sapiente reprehenderit accusamus repellat sed repellendus, sit, quasi nostrum nobis iste, harum vel consectetur ipsam beatae voluptas.</p>
            </div>
        </div>
    )
}
