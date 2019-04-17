export function getPhotos(state) {
  const allPhotos = state.photosReducer.photos;

  let pagination = {
    showQuickJumper: true,
    showSizeChanger: true,
    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} photos`,
    pageSizeOptions: ['1', '2', '5', '10', '25', '50', '100', '250', '500'],
  };

  return {
    name: `Photos`,
    tracker: state.photosReducer.photosTracker,
    timestamp: state.photosReducer.photosTimestamp,
    data: allPhotos,
    noRecordMessage: `No Photos Found`,
    pagination: pagination,
  }
}

export function getPhoto(state) {
  return {
    name: 'Photo',
    tracker: state.photosReducer.photoTracker,
    timestamp: state.photosReducer.photoTimestamp,
    data: state.photosReducer.photo,
    noRecordMessage: 'No Photo Found',
  }
}

export function getNewPhoto(state) {
  return {
    name: 'New Photo',
    tracker: state.photosReducer.newPhotoTracker,
    timestamp: state.photosReducer.newPhotoTimestamp,
    data: state.photosReducer.newPhoto,
  }
}

export function getUpdatedPhoto(state) {
  return {
    name: 'Updated Photo',
    tracker: state.photosReducer.updatedPhotoTracker,
    timestamp: state.photosReducer.updatedPhotoTimestamp,
    data: state.photosReducer.updatedPhoto,
  }
}

export function getDeletedPhoto(state) {
  return {
    name: 'Deleted Photo',
    tracker: state.photosReducer.deletedPhotoTracker,
    timestamp: state.photosReducer.deletedPhotoTimestamp,
    data: state.photosReducer.deletedPhoto,
  }
}

