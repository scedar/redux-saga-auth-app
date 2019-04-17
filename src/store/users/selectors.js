export function getUsers(state) {
  const allUsers = state.usersReducer.users;

  let pagination = {
    showQuickJumper: true,
    showSizeChanger: true,
    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} users`,
    pageSizeOptions: ['1', '2', '5', '10', '25', '50', '100', '250', '500'],
  };

  return {
    name: `Users`,
    tracker: state.usersReducer.usersTracker,
    timestamp: state.usersReducer.usersTimestamp,
    data: allUsers,
    noRecordMessage: `No Users Found`,
    pagination: pagination,
  }
}

export function getUser(state) {
  return {
    name: 'Users',
    tracker: state.usersReducer.userTracker,
    timestamp: state.usersReducer.userTimestamp,
    data: state.usersReducer.user,
    noRecordMessage: 'No User Found',
  }
}

export function getNewUser(state) {
  return {
    name: 'New User',
    tracker: state.usersReducer.newUserTracker,
    timestamp: state.usersReducer.newUserTimestamp,
    data: state.usersReducer.newUser,
  }
}

export function getUpdatedUser(state) {
  return {
    name: 'Updated User',
    tracker: state.usersReducer.updatedUserTracker,
    timestamp: state.usersReducer.updatedUserTimestamp,
    data: state.usersReducer.updatedUser,
  }
}

export function getDeletedUser(state) {
  return {
    name: 'Deleted User',
    tracker: state.usersReducer.deletedUserTracker,
    timestamp: state.usersReducer.deletedUserTimestamp,
    data: state.usersReducer.deletedUser,
  }
}

