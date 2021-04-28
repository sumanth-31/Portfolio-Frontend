import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import {
	ICollectionModel,
	IPostsPageProps,
	ITagModel,
	IUserModel,
} from "@Interfaces/index";
import {
	Body,
	CollectionsDropDown,
	TagsDropDown,
	Posts,
} from "@Components/index";
import { getUser } from "@Actions/index";
interface PostsPropsType {
	searchQuery: string;
	collection?: number;
	tag?: number;
	user?: IUserModel;
}
const PostsPage = (props: IPostsPageProps) => {
	const router = useRouter();
	const { userId } = router.query;
	const [collection, setCollection] = useState<ICollectionModel>(null);
	const [tag, setTag] = useState<ITagModel>();
	const [searchKeyword, setSearchKeyword] = useState("");
	const [postsProps, setPostsProps] = useState<PostsPropsType>({
		searchQuery: "",
	});
	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault();
		const newProps: PostsPropsType = {
			searchQuery: searchKeyword,
		};
		if (collection) newProps["collection"] = collection.id;
		if (tag) newProps["tag"] = tag.id;
		if (userId) newProps["userId"] = userId;
		setPostsProps(newProps);
	};
	const collectionHandler = (collection: ICollectionModel) => {
		setCollection(collection);
	};
	const tagsHandler = (tag: ITagModel) => {
		setTag(tag);
	};
	useEffect(() => {
		const { getUser } = props;
		getUser(userId).then((response) => {
			if (!response) return;
			const newPostsProps = { ...postsProps };
			newPostsProps["user"] = response.user;
			setPostsProps(newPostsProps);
		});
	}, []);
	if (!postsProps.user) return <div>Loading...</div>;
	return (
		<Body style="p-4 bg-white">
			<h3 className="text-center mb-5">Search Criteria</h3>
			<form
				className="d-flex flex-column align-items-center"
				onSubmit={submitHandler}
			>
				<div className="row w-100">
					<div className="col-sm">
						<CollectionsDropDown
							changeHandler={collectionHandler}
							value={collection ? collection.name : "All Collections"}
							userId={userId}
						/>
					</div>

					<div className="col-sm">
						<TagsDropDown
							changeHandler={tagsHandler}
							value={tag ? tag.name : "All Tags"}
							userId={userId}
						/>
					</div>

					<div className="col-sm">
						<input
							className="form-control mb-3"
							placeholder="Search Post Title"
							onChange={(e) => {
								setSearchKeyword(e.target.value);
							}}
							value={searchKeyword}
						/>
					</div>
				</div>
				<button className="btn btn-primary mb-3" type="submit">
					Filter Posts
				</button>
			</form>
			<h3 className="text-center my-5 text-capitalize text-break">{`${postsProps.user.name}'s Posts`}</h3>
			<Posts
				{...postsProps}
				key={`coll=${postsProps["collection"]} tag=${postsProps["tag"]} sq=${postsProps["searchQuery"]}`}
			/>
		</Body>
	);
};
PostsPage.getInitialProps = (ctx) => {
	return {
		something: 1,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		getUser: (userId) => {
			return dispatch(getUser(userId));
		},
	};
};

export default connect(null, mapDispatchToProps)(PostsPage);
