import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import { HomeOutlined, UnorderedListOutlined } from '@ant-design/icons';
import {
	useParams,
	useNavigate,
	useLocation,
} from "react-router-dom";
const { SubMenu } = Menu;

const NavigationBar = (props) => {
	let [current, setCurrent] = useState('home')
	let navigate = useNavigate();

	const handleClick = e => {
		console.log(e.Key)
		setCurrent(e.Key)
	};
	return (
		<Menu
			onClick={handleClick}
			selectedKeys={[current]}
			mode="horizontal"
		>
			<Menu.Item key="home" icon={<HomeOutlined />} onClick={() => { navigate('/') }}> Home</Menu.Item>
			<Menu.Item key="archives" icon={<UnorderedListOutlined />} onClick={() => { navigate('/archives') }}>Archives</Menu.Item>

		</Menu>
	)
}
export default NavigationBar;