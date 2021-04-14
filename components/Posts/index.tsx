import React from "react";
import { connect } from "react-redux";
import { IPostsProps, IPostsState } from "@Interfaces/index";
import { getPostsAction } from "@Actions/index";
import { Post } from "@Components/index";
import debounce from "lodash.debounce";
class PostsComponent extends React.Component<IPostsProps, IPostsState> {
	PER_PAGE = 10;

	constructor(props) {
		super(props);
		this.state = {
			posts: [],
			page: 0,
			totalPages: 100,
		};
		if (typeof window == "undefined") return;
		window.onscroll = debounce(() => {
			if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
				this.fetchPosts();
			}
		}, 100);
	}

	fetchPosts() {
		if (this.state.page == this.state.totalPages) return;
		const { getPosts, collection, tag, searchQuery } = this.props;
		const parameters = {
			search_query: searchQuery,
			page: this.state.page + 1,
			per_page: this.PER_PAGE,
		};
		if (collection) parameters["collection"] = collection;
		if (tag) parameters["tag"] = tag;
		const postsPromise = getPosts(parameters);
		postsPromise.then((response) => {
			if (!response) return;
			this.setState((prevState) => {
				return {
					posts: [...prevState.posts, ...response.posts],
					page: response.meta.curr_page,
					totalPages: response.meta.pages_count,
				};
			});
		});
	}
	componentDidMount() {
		this.fetchPosts();
	}
	render() {
		return (
			<div>
				<h3 className="text-center my-5">Posts</h3>
				{this.state.posts.length == 0 ? (
					<h6 className="text-center">Couldn't Find Any Posts!</h6>
				) : null}
				<div className="row">
					{this.state.posts.map((post) => {
						return <Post key={post.id} post={post} />;
					})}
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getPosts: (parameters) => {
			return dispatch(getPostsAction(parameters));
		},
	};
};

export const Posts = connect(null, mapDispatchToProps)(PostsComponent);
