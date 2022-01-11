import "./Post.css";

export default function Post({ post }) {
	return (
		<div className="post">
			<img
				className="postImg"
				src="https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2069&q=80"
				alt=""
			/>
			<div className="postInfo">
				<div className="postCats">
					<span className="postCat">Music</span>
					<span className="postCat">Life</span>
				</div>
				<span className="postTitle">
					{post.title}
				</span>
				<hr />
				<span className="postDate">
					{post.createdAt}
				</span>
			</div>
			<p className="postDescription">
				Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Voluptates molestias debitis
				alias nesciunt. Magnam numquam, ducimus
				repellat vitae et aliquam dolor quae velit,
				beatae molestias veniam nulla? Deleniti,
				officia inventore. Lorem ipsum dolor sit amet
				consectetur adipisicing elit. Voluptates
				molestias debitis alias nesciunt. Magnam
				numquam, ducimus repellat vitae et aliquam
				dolor quae velit, beatae molestias veniam
				nulla? Deleniti, officia inventore. Lorem
				ipsum dolor sit amet consectetur adipisicing
				elit. Voluptates molestias debitis alias
				nesciunt. Magnam numquam, ducimus repellat
				vitae et aliquam dolor quae velit, beatae
				molestias veniam nulla? Deleniti, officia
				inventore. Lorem ipsum dolor sit amet
				consectetur adipisicing elit. Voluptates
				molestias debitis alias nesciunt. Magnam
				numquam, ducimus repellat vitae et aliquam
				dolor quae velit, beatae molestias veniam
				nulla? Deleniti, officia inventore.
			</p>
		</div>
	);
}
