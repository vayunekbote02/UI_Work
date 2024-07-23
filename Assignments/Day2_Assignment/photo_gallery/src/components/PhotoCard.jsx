import React, { useState } from "react";

const PhotoCard = ({
  photo,
  handleRemovePhoto,
  handleEditPhoto,
  handleEditDescription,
}) => {
  const [isEditingDescription, setIsEditingDescription] = useState(false);
  const [newDescription, setNewDescription] = useState(photo.description);

  const handleDescriptionChange = (e) => {
    setNewDescription(e.target.value);
  };

  const saveDescription = () => {
    handleEditDescription(newDescription);
    setIsEditingDescription(false);
  };

  return (
    <div className="col">
      <div className="card">
        <img
          src={photo.url}
          className="card-img-top"
          alt={photo.description}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body">
          {isEditingDescription ? (
            <div>
              <input
                type="text"
                value={newDescription}
                onChange={handleDescriptionChange}
                className="form-control mb-2"
              />
              <button
                onClick={saveDescription}
                className="btn btn-primary btn-sm me-2"
              >
                Save Description
              </button>
              <button
                onClick={() => setIsEditingDescription(false)}
                className="btn btn-secondary btn-sm"
              >
                Cancel
              </button>
            </div>
          ) : (
            <div>
              <p className="card-text">{photo.description}</p>
              <button
                onClick={handleEditPhoto}
                className="btn btn-warning btn-sm me-2"
              >
                Edit Photo
              </button>
              <button
                onClick={() => setIsEditingDescription(true)}
                className="btn btn-primary btn-sm  me-2"
              >
                Edit Description
              </button>
              <button
                onClick={() => handleRemovePhoto(photo.url)}
                className="btn btn-danger btn-sm"
              >
                Remove
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
