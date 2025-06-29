import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser, updateNames } from "../../redux/slices/userSlice";
import { updateUserProfil } from "../../api/api";
import { RootState, AppDispatch } from "../../redux/store";
import "./UserNameSetting.css";

const UserNameSetting = () => {
    const dispatch = useDispatch<AppDispatch>();
  const token = useSelector((state: RootState) => state.auth.token);

  const { firstName, lastName, status, error } = useSelector(
    (state: RootState) => state.user
  );

  const [editedFirstName, setEditedFirstName] = useState("");
  const [editedLastName, setEditedLastName] = useState("");

  useEffect(() => {
    if (token) {
      dispatch(fetchUser(token));
    }
  }, [token]);

  useEffect(() => {
    setEditedFirstName(firstName);
    setEditedLastName(lastName);
  }, [firstName, lastName]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) return;
    try {
      const updated = await updateUserProfil(token, editedFirstName, editedLastName);
  
      dispatch(updateNames({
        firstName: updated.firstName,
        lastName: updated.lastName
      }));
    } catch (err) {
      console.error("Erreur sauvegarde:", err);
    }
  };
  

  const handleCancel = () => {
    setEditedFirstName(firstName);
    setEditedLastName(lastName);
  };

  return status === "loading" ? (
    <p>Chargement...</p>
  ) : status === "failed" ? (
    <p>{error}</p>
  ) : (
    <div className="user">
      <h2>Welcome back</h2>
      <form onSubmit={handleSubmit}>
        <div className="user-inputs">
          <input
            type="text"
            id="firstname"
            value={editedFirstName}
            onChange={(e) => setEditedFirstName(e.target.value)}
          />
          <input
            type="text"
            id="lastname"
            value={editedLastName}
            onChange={(e) => setEditedLastName(e.target.value)}
          />
        </div>
        <div className="user-buttons">
          <button type="submit">Save</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default UserNameSetting;
