import React, { useState } from 'react';
import { Form, Input, Button, Space, BackTop,message } from 'antd';
import articleService from '../services/articles';

const CreateArticleForm = (props) => {
	const [form] = Form.useForm();

	const handleCreateArticle = async (tupleObj) => {
		try {
			console.log('tupleObj', tupleObj)
			let retObj = await articleService.createArticle(tupleObj);
			console.log('retObj', retObj)
			message.success('Successfully created an article.');
			form.resetFields()
		}
		catch (err) {
			message.success('Failed to create an article.');
			console.log('create article failed:', err);
		}
	}

	return (
		<div>
			<BackTop>
			</BackTop>
			<Form
				form={form}
				name="basic"
				labelCol={{ span: 2 }}
				wrapperCol={{ span: 20 }}
				initialValues={{ remember: true }}
				onFinish={handleCreateArticle}
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
						type="text" id={"title"}
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
						type="text" id={"content"}
						autoSize={{ minRows: 10 }}
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