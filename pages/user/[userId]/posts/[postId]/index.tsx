import React from "react";
import { Body } from "@Components/index";
import { NextPageContext } from "next";
import Router from "next/router";
import { getPostAction, updatePostAction } from "@Actions/index";
import {
	IPostSlugProps,
	IPostSlugState,
	IPostUpdatePostRequest,
} from "@Interfaces/index";
import { connect } from "react-redux";
class Post extends React.Component<IPostSlugProps, IPostSlugState> {
	static async getInitialProps(ctx: NextPageContext) {
		//Including this method is necessary to get dynamic routing, else router.query won't work on first render
		return {
			something: 1,
		};
	}
	componentDidMount() {
		const { postId } = Router.query;
		const { getPost } = this.props;
		const parameters = {
			post_id: postId,
		};
		getPost(parameters).then((response) => {
			if (!response) return;
			this.setState({ post: response.post });
		});
	}
	constructor(props) {
		super(props);
		this.state = {
			post: null,
		};
	}
	changeDetails = (e) => {
		this.setState((prevState) => {
			const newPost = {
				...prevState.post,
			};
			newPost[e.target.name] = e.target.value;
			return {
				post: newPost,
			};
		});
	};
	render() {
		const { post } = this.state;
		if (!post) return <div>Loading...</div>;
		return (
			<Body style="p-4 bg-white d-flex flex-column align-items-center">
				<div className="w-75 text-break">
					<h4 className="mb-4 text-center text-capitalize">Post Title</h4>
					<h6 className="mb-5 text-center">{post.title}</h6>
					<h4 className="mb-4 text-center text-capitalize">Post Content</h4>
					<h6 className="mb-5 text-center">{post.content}</h6>
					<h4 className="mb-4 text-center">Collection</h4>
					<h6 className="mb-5 text-center">{post.collection}</h6>
					<h4 className="mb-4 text-center">Tag</h4>
					<h6 className="mb-5 text-center">{post.tag}</h6>
				</div>
			</Body>
		);
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		getPost: (parameters) => {
			return dispatch(getPostAction(parameters));
		},
		updatePost: (payload: IPostUpdatePostRequest) => {
			return dispatch(updatePostAction(payload));
		},
	};
};
export default connect(null, mapDispatchToProps)(Post);
