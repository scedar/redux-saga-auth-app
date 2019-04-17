import React, {Component} from 'react';
import {Row, Col, List, Avatar, PageHeader, Button} from "antd"

const data = [
	{
		title: 'Ant Design Title 1',
	},
	{
		title: 'Ant Design Title 2',
	},
	{
		title: 'Ant Design Title 3',
	},
	{
		title: 'Ant Design Title 4',
	},
];

class Posts extends Component {

	render() {
		return (
				<React.Fragment>
					<PageHeader
						style={{margin: '16px 0'}}
						title="Users"
						subTitle="Get a chance to view users and get to connect"
					/>
					<div style={{background: '#fff', padding: 24, minHeight: 280}}>
						<Row>
							<Col span={24}>
								<h3>List of All Users</h3>


								<List
									itemLayout="horizontal"
									dataSource={data}
									renderItem={item => (
										<List.Item>
											<List.Item.Meta
												avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
												title={<a href="https://ant.design">{item.title}</a>}
												description="Ant Design, a design language for background applications, is refined by Ant UED Team"
											/>
											<Button type="primary">View More</Button>
										</List.Item>
									)}
								/>
							</Col>
						</Row>
					</div>
				</React.Fragment>

		);
	}
}

export default Posts;
