export interface IPostModel {
	model: string;
	pk: number;
	fields: {
		user: number;
		content: string;
		collection: number;
		tag: number;
		privacy: string;
		title: string;
	};
}
