import React from "react";
import { connect } from "react-redux";
import { IPostsProps, IPostsState } from "@Interfaces/index";
import { getPostsAction } from "@Actions/index";
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
			console.log(
				window.innerHeight,
				document.documentElement.scrollTop,
				document.documentElement.offsetHeight
			);
			if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
				this.fetchPosts();
			}
		}, 100);
	}

	fetchPosts() {
		if (this.state.page == this.state.totalPages) return;
		const { getPosts, collection, tag, searchQuery } = this.props;
		const parameters = { search_query: searchQuery };
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
		console.log(this.props);
		return (
			<div className="d-flex flex-column align-items-center">
				{this.state.posts.map((post) => {
					return <div key={post.pk}>{post.fields.title}</div>;
				})}
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
