import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Row, Col, PageHeader, Switch, Table} from "antd"

import * as todoActions from '../../store/todos/actions'
import * as todoSelectors from '../../store/todos/selectors'
import {withRouter} from "react-router-dom";

class Tasks extends Component {

	constructor(props) {
		super(props);
		this.state = {
			reqParams: {
				userId: 1
			}
		};

		this.columns = [{
			title: 'ID',
			dataIndex: 'id',
			key: 'id',
		}, {
			title: 'Title',
			dataIndex: 'title',
			key: 'title',
		}, {
			title: 'Status',
			key: 'completed',
			dataIndex: 'completed',
			render: completed => (
				<span>
    			  <Switch checkedChildren="Completed" unCheckedChildren="Pending" checked={completed} size="small"/>
    			</span>
			),
		}
		]
	}


	componentDidMount() {
		const {reqParams} = this.state;

		this.props.todoActions.todosRequest(reqParams);
	}

	render() {
		const {allTodos} = this.props;
		return (
			<React.Fragment>
				<PageHeader
					style={{margin: '16px 0'}}
					title="Tasks"
					subTitle="Get a chance to plan and keep track of your tasks"
				/>
				<div style={{background: '#fff', padding: 24, minHeight: 280}}>
					<Row>
						<Col span={24}>

							<h3 style={{marginBottom: 20}}>Tasks List</h3>

							<Table dataSource={allTodos.data} loading={allTodos.tracker.status === "processing"}
								   columns={this.columns} size="small"/>

						</Col>
					</Row>
				</div>
			</React.Fragment>

		);
	}
}

const mapStateToProps = state => {
	return {
		allTodos: todoSelectors.getTodos(state),
	}
};

const mapDispatchToProps = dispatch => {
	return {
		todoActions: bindActionCreators(todoActions, dispatch),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Tasks));
