import React, { useState } from 'react';
import { Form, Input, Button, Space } from 'antd';
import articleService from '../services/articles';

const CreateArticleForm = (props) => {
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
		<div>
			<Form
				name="basic"
				labelCol={{ span: 2 }}
				wrapperCol={{ span: 20 }}
				initialValues={{ remember: true }}
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
					value={title}
					onChange={({ target }) => setTitle(target.value)}
				>
					<Input

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
						autoSize={{ minRows: 10 }}
						value={content}
						onChange={({ target }) => setContent(target.value)}
					// showCount
					/>
				</Form.Item>

				<Form.Item>
					<Button htmlType={"submit"} type={"primary"}>
						Submit
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
}
export default CreateArticleForm;