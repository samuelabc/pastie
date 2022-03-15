import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Space } from 'antd';
import articleService from '../services/articles';
import {
	useParams,
} from "react-router-dom";

const ArticlePage = (props) => {
	const [article, setArticle] = useState({})
	let params = useParams();
	let articleID = params?.articleID;
	console.log('articleID!', articleID)
	useEffect(() => {
		handleFetchArticle({ id: articleID })
	}, [articleID])

	const handleFetchArticle = async (tupleObj) => {
		try {
			console.log('tupleObj', tupleObj)
			let retObj = await articleService.getArticle(tupleObj);
			console.log('retObj', retObj)
			setArticle(retObj)
		}
		catch (err) {
			console.log('fetch article failed:', err);
		}
	}

	return (
		<div>
			<p>{article.title}</p>
			<p>{article.content}</p>
		</div>
	);
}
export default ArticlePage;