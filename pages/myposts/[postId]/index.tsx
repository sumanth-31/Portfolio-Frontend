import React from "react";
import {
	Body,
	CollectionsDatalist,
	TagsDatalist,
	PrivacyDropdown,
	ConfirmDialog,
} from "@Components/index";
import { NextPageContext } from "next";
import Router from "next/router";
import {
	getPostAction,
	updatePostAction,
	deletePostAction,
} from "@Actions/index";
import { setPageAction } from "@ActionCreators/index";
import {
	IAuthorizedPostSlugProps,
	IAuthorizedPostSlugState,
	IDeletePostRequest,
	IPostUpdatePostRequest,
} from "@Interfaces/index";
import { connect } from "react-redux";
import { PAGE_URLS } from "@Constants/urls";
class MyPost extends React.Component<
	IAuthorizedPostSlugProps,
	IAuthorizedPostSlugState
> {
	static async getInitialProps(ctx: NextPageContext) {
		//Including this method is necessary to get dynamic routing, else router.query won't work on first render
		return {
			something: 1,
		};
	}
	componentDidMount() {
		const { postId } = Router.query;
		const { getPost, setPage } = this.props;
		setPage("other");
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
			showConfirm: false,
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
	saveDetails = (e: React.FormEvent) => {
		e.preventDefault();
		const { updatePost } = this.props;
		const { post } = this.state;
		if (!post) return;
		const payload: IPostUpdatePostRequest = {
			post_id: post.id,
			title: post.title,
			collection: post.collection,
			tag: post.tag,
			content: post.content,
			privacy: post.privacy,
		};
		updatePost(payload).then((response) => {
			if (!response) return;
			this.setState({ post: response.post });
			alert("Project Details Successfully Updated!");
		});
	};
	deletePostHandler = (confirm: boolean) => {
		this.toggleConfirmDialog();
		if (!confirm) return;
		const { post } = this.state;
		const { deletePost } = this.props;
		const payload: IDeletePostRequest = {
			post_id: post.id,
		};
		deletePost(payload).then((response) => {
			alert("Post Deleted Successfully!");
			Router.push(PAGE_URLS.myPostsPage);
		});
	};
	toggleConfirmDialog = () => {
		this.setState({ showConfirm: !this.state.showConfirm });
	};
	render() {
		const { post } = this.state;
		if (!post) return null;
		const deleteMessage = "Are you sure you want to delete this post?";
		return (
			<Body
				style="p-4 bg-white d-flex flex-column align-items-center"
				authenticated
			>
				<ConfirmDialog
					show={this.state.showConfirm}
					confirmHandler={this.deletePostHandler}
					message={deleteMessage}
				/>
				<form
					className="w-75 mx-auto d-flex flex-column align-items-center"
					onSubmit={(e) => {
						this.saveDetails(e);
					}}
				>
					<div className="form-group w-100 mb-5">
						<h4 className="mb-4 text-center text-capitalize">Post Title</h4>
						<textarea
							value={post.title}
							className="form-control"
							name="title"
							onChange={this.changeDetails}
							required
						/>
					</div>
					<div className="form-group w-100 mb-5">
						<h4 className="mb-4 text-center text-capitalize">Post Content</h4>
						<textarea
							value={post.content}
							className="form-control"
							name="content"
							onChange={this.changeDetails}
							required
						/>
					</div>
					<CollectionsDatalist
						changeHandler={this.changeDetails}
						value={post.collection}
					/>
					<TagsDatalist changeHandler={this.changeDetails} value={post.tag} />
					<PrivacyDropdown
						value={post.privacy}
						changeHandler={this.changeDetails}
					/>
					<button className="btn btn-primary mb-5" type="submit">
						Save Changes
					</button>
					<button
						className="btn btn-danger"
						type="button"
						onClick={this.toggleConfirmDialog}
					>
						Delete Post
					</button>
				</form>
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
		setPage: (page) => {
			dispatch(setPageAction(page));
		},
		deletePost: (payload: IDeletePostRequest) => {
			return dispatch(deletePostAction(payload));
		},
	};
};
export default connect(null, mapDispatchToProps)(MyPost);
