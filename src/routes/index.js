import React, {Component} from 'react';
import {Layout, Menu} from "antd"

import {Link, Route, Switch} from "react-router-dom";

import Posts from './Posts'
import Gallery from './Gallery'
import Tasks from './Tasks'

class Index extends Component {

    render() {
        const {Header, Content, Footer} = Layout;


		const {match, history} = this.props;

		const selectedKeys = history.location.pathname.substr(1);
		const defaultOpenKeys = selectedKeys.split('/')[1];


        return (
            <Layout className="layout">
                <Header>
                    <div className="logo"/>
                    <Menu
                        theme="dark"
						defaultOpenKeys={[defaultOpenKeys]}
						selectedKeys={[selectedKeys]}
                        mode="horizontal"
                        style={{lineHeight: '64px'}}
                    >
                        <Menu.Item key="feeds">
							<Link to="/feeds">Posts</Link>
                        </Menu.Item>
                        <Menu.Item key="gallery">
							<Link to="/gallery">Gallery</Link>
                        </Menu.Item>
						<Menu.Item key="tasks">
							<Link to="/tasks">Tasks</Link>
						</Menu.Item>
                        {/*<Menu.Item key="users">
							<Link to="/users">Users</Link>

                        </Menu.Item>*/}
                    </Menu>
                </Header>
                <Content style={{padding: '0 50px'}}>
					<Switch>
						<Route path={`${match.url}feeds`} breadcrumbName="Posts" component={Posts}/>
						<Route path={`${match.url}gallery`} breadcrumbName="Gallery" component={Gallery}/>
						<Route path={`${match.url}tasks`} breadcrumbName="Tasks" component={Tasks}/>
						{/*<Route path={`${match.url}users`} breadcrumbName="Users" component={Users}/>*/}
					</Switch>
                </Content>
                <Footer style={{textAlign: 'center'}}>
                    Work of ochomoswill using Ant Design.
                </Footer>
            </Layout>
        );
    }
}

export default Index;
