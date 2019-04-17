export function getAlbums(state) {
  const allAlbums = state.albumsReducer.albums;

  let pagination = {
    showQuickJumper: true,
    showSizeChanger: true,
    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} albums`,
    pageSizeOptions: ['1', '2', '5', '10', '25', '50', '100', '250', '500'],
  };

  return {
    name: `Albums`,
    tracker: state.albumsReducer.albumsTracker,
    timestamp: state.albumsReducer.albumsTimestamp,
    data: allAlbums,
    noRecordMessage: `No Albums Found`,
    pagination: pagination,
  }
}

export function getAlbum(state) {
  return {
    name: 'Album',
    tracker: state.albumsReducer.albumTracker,
    timestamp: state.albumsReducer.albumTimestamp,
    data: state.albumsReducer.album,
    noRecordMessage: 'No Album Found',
  }
}

export function getNewAlbum(state) {
  return {
    name: 'New Album',
    tracker: state.albumsReducer.newAlbumTracker,
    timestamp: state.albumsReducer.newAlbumTimestamp,
    data: state.albumsReducer.newAlbum,
  }
}

export function getUpdatedAlbum(state) {
  return {
    name: 'Updated Album',
    tracker: state.albumsReducer.updatedAlbumTracker,
    timestamp: state.albumsReducer.updatedAlbumTimestamp,
    data: state.albumsReducer.updatedAlbum,
  }
}

export function getDeletedAlbum(state) {
  return {
    name: 'Deleted Album',
    tracker: state.albumsReducer.deletedAlbumTracker,
    timestamp: state.albumsReducer.deletedAlbumTimestamp,
    data: state.albumsReducer.deletedAlbum,
  }
}

