import React from "react";
import { useState, useEffect } from "react";
import UpdateData from "../api/UpdateData";
import { StyledForm } from "../styles/Form.styles";
import { load, save } from "../storage";

function EditAvatar({ data }) {
  const [avatar, setAvatar] = useState("");
  const [newAvatarUrl, setNewAvatarUrl] = useState("");

  useEffect(() => {
    const profile = load("profile");

    if (profile) {
      setAvatar(profile.avatar);
    }
  }, []);

  const handleSave = () => {
    setAvatar(newAvatarUrl);
    save("avatar", { avatar: newAvatarUrl });
  };
  return (
    <StyledForm>
      <form>
        <label>Avatar URL:</label>
        <input
          type="url"
          id="avatarUrl"
          value={newAvatarUrl}
          onChange={(event) => setNewAvatarUrl(event.target.value)}
        />
        <div className="btn">
          <button type="submit" onClick={handleSave}>
            EDIT
          </button>
        </div>
      </form>
    </StyledForm>
  );
}

export default EditAvatar;
