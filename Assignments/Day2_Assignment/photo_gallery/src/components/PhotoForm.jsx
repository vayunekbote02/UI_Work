import React from "react";
import { MoveRight } from "lucide-react";

const PhotoForm = ({
  fileName,
  newPhoto,
  editingIndex,
  editingDescription,
  handleFileChange,
  handleDescriptionChange,
  handleAddPhoto,
  handleFileSelect,
  fileInputRef,
}) => {
  return (
    <div className="mb-3">
      <label htmlFor="fileInput">
        <h5>{fileName ? "Image selected" : "Upload image below"}</h5>
      </label>
      {fileName && (
        <div className="alert alert-info" role="alert">
          File to be uploaded <MoveRight /> {fileName}
        </div>
      )}
      <input
        type="file"
        onChange={handleFileChange}
        className="form-control mb-2"
        ref={fileInputRef}
      />

      <label htmlFor="descriptionofimage">
        <h5>
          {editingIndex !== null
            ? "Edit image description"
            : "Add a description for the image"}
        </h5>
      </label>
      <input
        type="text"
        name="descriptionofimage"
        value={
          editingIndex !== null ? editingDescription : newPhoto.description
        }
        onChange={handleDescriptionChange}
        placeholder="Description"
        className="form-control mb-2"
      />
      <button
        onClick={editingIndex !== null ? handleFileSelect : handleAddPhoto}
        className={
          editingIndex !== null ? "btn btn-secondary" : "btn btn-primary"
        }
      >
        {editingIndex !== null ? "Updating Photo" : "Add Photo"}
      </button>
    </div>
  );
};

export default PhotoForm;
