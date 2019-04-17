import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {
	Row,
	Col,
	List,
	Card,
	Avatar,
	Icon,
	Divider,
	PageHeader,
	Skeleton,
	Empty
} from "antd"
import * as postActions from '../../store/posts/actions'
import * as postSelectors from '../../store/posts/selectors'
import * as commentActions from '../../store/comments/actions'
import * as commentSelectors from '../../store/comments/selectors'
import * as userActions from '../../store/users/actions'
import * as userSelectors from '../../store/users/selectors'
import {withRouter} from "react-router-dom";

const { Meta } = Card;

const IconText = ({ type, text }) => (
	<span>
    <Icon type={type} style={{ marginRight: 8 }} />
		{text}
  </span>
);

class Posts extends Component {
	state ={
		reqParams: {
			userId:1
		}
	};

	componentDidMount() {
		const {reqParams} = this.state;

		this.props.userActions.userRequest(reqParams);

		this.props.postActions.postsRequest(reqParams);
		this.props.commentActions.commentsRequest(reqParams);
	}

	render() {
		const {allPosts, user} = this.props;

		console.log(user.data);

		return (
				<React.Fragment>
					<PageHeader
						style={{margin: '16px 0'}}
						title="Posts"
						subTitle="Get a chance to view your posts"
					/>
					<div style={{background: '#fff', padding: 24, minHeight: 280}}>
						<Row>

							{/* User Details*/}
							<Col span={6} >
								<Skeleton loading={user.tracker.status=== "processing"}>
									<Card
										style={{ width: "100%" }}
										actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
									>
										<Meta
											avatar={<Avatar/>}
											title={user.data.name}
											description={user.data.username}
										/>

										{
											user.data.company ? (
												<div>
													<Divider>Company Details</Divider>

													<p>Name: <h3>{user.data.company.name}</h3></p>
													<p>Slogan: <h3>{user.data.company.catchPhrase}</h3></p>
													<p>Goal: <h3>{user.data.company.bs}</h3></p>
												</div>
											) : <Empty/>
										}

									</Card>
								</Skeleton>
							</Col>

							<Col span={1}>
								<Divider type="vertical"/>
							</Col>

							{/* List of Posts */}
							<Col span={10} >
								<List
									itemLayout="vertical"
									size="large"
									pagination={allPosts.pagination}
									dataSource={allPosts.data}
									footer={<div>All of<b> my posts</b></div>}
									renderItem={item => (
										<List.Item
											key={item.title}
											actions={[<IconText type="message" text="Comments" />]}
										>
											<Skeleton loading={allPosts.tracker.status === "processing"} active avatar>
											<List.Item.Meta
												avatar={<Avatar src={item.avatar} />}
												title={<a href={item.href}>{item.title}</a>}
												description={item.body}
											/>
											</Skeleton>
										</List.Item>
									)}
								/>
							</Col>

							<Col span={1}>
								<Divider type="vertical"/>
							</Col>

							{/* Contact Information */}
							<Col span={6}>
								<Skeleton loading={user.tracker.status=== "processing"}>
									<Card title="Contact" bordered>
										<p>Email: <a href={`mailto:${user.data.email}`} target={"_blank"}>{user.data.email}</a></p>
										<p>Phone: {user.data.phone}</p>
										<p>Website: <a href={user.data.website} target={"_blank"}>{user.data.website}</a></p>
									</Card>
								</Skeleton>
							</Col>

						</Row>
					</div>
				</React.Fragment>

		);
	}
}


const mapStateToProps = state => {
	return {
		allComments: commentSelectors.getComments(state),
		allPosts: postSelectors.getPosts(state),
		user: userSelectors.getUser(state),
	}
};

const mapDispatchToProps = dispatch => {
	return {
		commentActions: bindActionCreators(commentActions, dispatch),
		postActions: bindActionCreators(postActions, dispatch),
		userActions: bindActionCreators(userActions, dispatch),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Posts));

