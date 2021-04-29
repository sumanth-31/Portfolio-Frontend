import React from "react";
import {
	Body,
	CollectionsDatalist,
	TagsDatalist,
	PrivacyDropdown,
} from "@Components/index";
import { uploadPostAction } from "@Actions/index";
import {
	IAddPostProps,
	IAddPostState,
	IPostUploadPostRequest,
} from "@Interfaces/index";
import { setPageAction } from "@ActionCreators/index";
import { connect } from "react-redux";
import Router from "next/router";
import { PAGE_URLS } from "@Constants/urls";

class MyPost extends React.Component<IAddPostProps, IAddPostState> {
	constructor(props) {
		super(props);
		this.state = {
			post: {
				id: null,
				title: "",
				collection: "",
				tag: "",
				content: "",
				privacy: "public",
			},
		};
	}
	componentDidMount() {
		const { setPage } = this.props;
		setPage("other");
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
	saveDetails = async (e: React.FormEvent) => {
		e.preventDefault();
		const { uploadPost } = this.props;
		const { post } = this.state;
		if (!post) return;
		const payload: IPostUploadPostRequest = {
			title: post.title,
			collection: post.collection,
			tag: post.tag,
			content: post.content,
			privacy: post.privacy,
		};
		uploadPost(payload).then((response) => {
			if (!response) return;
			this.setState({ post: response.post });
			alert("Post Details Successfully Uploaded!");
			Router.push(PAGE_URLS.myPostsPage);
		});
	};
	render() {
		const { post } = this.state;
		if (!post) return null;
		return (
			<Body
				style="p-4 bg-white d-flex flex-column align-items-center"
				authenticated
			>
				<div className="w-75">
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
						<button className="btn btn-primary" type="submit">
							Save Changes
						</button>
					</form>
				</div>
			</Body>
		);
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		uploadPost: (payload: IPostUploadPostRequest) => {
			return dispatch(uploadPostAction(payload));
		},
		setPage: (page) => {
			dispatch(setPageAction(page));
		},
	};
};
export default connect(null, mapDispatchToProps)(MyPost);
