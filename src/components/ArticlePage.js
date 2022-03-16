import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Space, BackTop, Typography } from 'antd';
import articleService from '../services/articles';
import {
	useParams,
} from "react-router-dom";

const { Title } = Typography;

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
			<BackTop>
			</BackTop>
			<Title level={2}>{article.title}</Title>
			<Input.TextArea
				type="text" value={article.content}
				autoSize={{ minRows: 1 }}
				readOnly
			/>
		</div>
	);
}
export default ArticlePage;