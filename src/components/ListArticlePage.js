import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, LongButton } from 'antd';
import articleService from '../services/articles';

const ListArticleForm = (props) => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	const handleCreateArticle = async (tupleObj) => {
		try {
			let retObj = await articleService.createArticle(tupleObj);
			console.log('retObj', retObj)
			setTitle('')
			setContent('')
		}
		catch (err) {
			console.log('create article failed:', err);
		}
	}

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<Form
			name="basic"
			initialValues={{
				remember: true,
			}}
			onFinish={handleCreateArticle}
			onFinishFailed={onFinishFailed}
			autoComplete="off"
		>
			<Form.Item
				label="Title"
				name="title"
				rules={[
					{
						required: true,
						message: 'Please input your title!',
					},
				]}
			>
				<Input
					style={{ width: "80%" }}
					value={title}
					onChange={({ target }) => setTitle(target.value)}
				// showCount
				/>
			</Form.Item>

			<Form.Item
				label="Content"
				name="content"
				rules={[
					{
						required: true,
						message: 'Please input your content!',
					},
				]}
			>
				<Input.TextArea
					style={{ width: "80%" }}
					autoSize={{ minRows: 30 }}
					value={content}
					onChange={({ target }) => setContent(target.value)}
				// showCount
				/>
			</Form.Item>

			<Form.Item

			>
				<Button htmlType={"submit"} type={"primary"}>
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
}
export default ListArticleForm;