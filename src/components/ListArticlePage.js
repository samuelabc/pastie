import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Checkbox, Table, Tag, Space } from 'antd';
import articleService from '../services/articles';
import {
	Link,
	useSearchParams
} from "react-router-dom";
const { Column, ColumnGroup } = Table;
const { Search } = Input;

const ListArticlePage = (props) => {
	const [directory, setDirectory] = useState('');
	const [filteredDirectory, setFilteredDirectory] = useState('');
	let [searchParams, setSearchParams] = useSearchParams();
	let [searchString, setSearchString] = useState('')

	useEffect(() => {
		handleListArticle({})
	}, [])
	useEffect(() => {
		if (searchString === '') {
			setFilteredDirectory(directory)
		} else {
			let filtered_directory = directory.filter((d) => {
				return d.title.includes(searchString)
			})
			setFilteredDirectory(filtered_directory)
		}
	}, [searchString, directory])

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

	const columns = [
		{
			title: 'Title',
			dataIndex: 'title',
			key: 'title',
			render: (title, record) => {
				return <Link to={`/archives/${record.id}`}>{title}</Link>
			},
			sorter: {
				compare: (a, b) => (a.title).localeCompare(b.title),
			},
		},
		{
			title: 'Created At',
			dataIndex: 'created_at',
			render: (created_at) => {
				let date = new Date(created_at).toLocaleString();
				return <p>{date}</p>
			},
			sorter: {
				compare: (a, b) => (a.created_at).localeCompare(b.created_at),
			},
		},
		{
			title: 'Last Modified',
			dataIndex: 'updated_at',
			render: (updated_at) => {
				let date = new Date(updated_at).toLocaleString();
				return <p>{date}</p>
			},
			sorter: {
				compare: (a, b) => (a.updated_at).localeCompare(b.updated_at),
			},
		},
	];

	function onChange(pagination, filters, sorter, extra) {
		console.log('params', pagination, filters, sorter, extra);
	}
	const onSearch = (e) => {
		console.log('setSearchString', e.target.value)
		setSearchString(e.target.value)
	};


	return (
		<div>
			<Search placeholder="input search text" onChange={onSearch} enterButton />
			<br />
			<Table columns={columns} dataSource={filteredDirectory} rowKey="id" onChange={onChange}
				pagination={{
					showQuickJumper: true, showSizeChanger: true
				}} >

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
			</Table >
		</div>
	)
}
export default ListArticlePage;