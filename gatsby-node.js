// Node.js の標準モジュールなのでインストール不要
// 単なる Node.js なので、モジュールを呼び出すときは require を使います。
// src/以下では内部的に webpack を使っているので import で呼び出します。
const path = require("path");

exports.createPages = ({ graphql, actions }) => {
	// actionsって何？
	const { createPage } = actions;
	return graphql(`
    {
      allContentfulPost (
				sort: {fields: slug, order: DESC}
			) {
				edges {
					node {
						title
						slug
						tags
					}
				}
		 	}
 	 	}
	`).then(result => {
		// stringifyの引数はJSONのインデントを設定するもの
		console.log(JSON.stringify(result, null, 4))

		let portraits = []
		let snaps = []
		let flowers = []

		result.data.allContentfulPost.edges.forEach((photo, index) => {
			if (photo.node.tags[0] == "portrait") {
				portraits.push(photo)
			}
			if (photo.node.tags[0] == "snap") {
				snaps.push(photo)
			}
			if (photo.node.tags[0] == "flower") {
				flowers.push(photo)
			}
		})

		let categories = [portraits, snaps, flowers]

		categories.forEach((category) => {
			if (category[0] === null) {
				return;
			}
			createPage({
				path: `/photos/${category[0].node.tags[0]}`,
				component: path.resolve("./src/templates/photos.js"),
				context: {
					slug: category[0].node.tags[0],
				},
			})

			category.forEach((photo, index) => {
				const next =
					index === category.length - 1 ? null : category[index + 1].node
				const previous =
					index === 0 ? null : category[index - 1].node

				console.log("Create Page", `/photos/${photo.node.tags[0]}/${photo.node.slug}`);
				createPage({
					// photoのnameを元にパスを組み立てて変換してくれます。
					path: `/photos/${photo.node.tags[0]}/${photo.node.slug}`,
					// path.resolveを使うと絶対パスに変換してくれます。
					component: path.resolve("./src/templates/photo.js"),
					// コンポーネントにわたすデータを指定しています。
					// ここに与えた値がGraphQLの変数としてセットされます。
					context: {
						slug: photo.node.slug,
						previous,
						next,
					},
				})
			})
		})
	})
}