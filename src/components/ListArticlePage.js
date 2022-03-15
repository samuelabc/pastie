import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Checkbox, Table, Tag, Space } from 'antd';
import articleService from '../services/articles';
const { Column, ColumnGroup } = Table;

const ListArticlePage = (props) => {
	const [directory, setDirectory] = useState('');

	useEffect(() => {
		handleListArticle({})
	}, [])
	const handleListArticle = async (tupleObj) => {
		try {
			let retObj = await articleService.listArticle(tupleObj);
			console.log('retObj', retObj)
			setDirectory(retObj)
		}
		catch (err) {
			console.log('get article list failed:', err);
		}
	}

	return (
		<Table dataSource={directory} rowKey="id"  >
			<Column title="Title" dataIndex="title" key="title"
				render={(text) => (
						<a>{text}</a>
				)}
			/>
			<Column title="Created At" dataIndex="created_at" key="created_at" />
			<Column title="Last Modified" dataIndex="updated_at" key="updated_at" />
			{/* <Column
				title="Tags"
				dataIndex="tags"
				key="tags"
				render={tags => (
					<>
						{tags.map(tag => (
							<Tag color="blue" key={tag}>
								{tag}
							</Tag>
						))}
					</>
				)}
			/> */}
			{/* <Column
				title="Action"
				key="action"
				render={(text, record) => (
					<Space size="middle">
						<a>Edit</a>
						<a>Delete</a>
					</Space>
				)}
			/> */}
		</Table>
	)
}
export default ListArticlePage;