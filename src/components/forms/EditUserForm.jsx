import React, { useState, useEffect } from "react";

const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const handleInputChange = e => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.updateUser(user.id, user);
  };

  return (
    <form className="column is-mobile" onSubmit={handleSubmit}>
      <div className="box">
        <div className="level">
          <div className="field">
            <label>Name</label>
            <div className="control">
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className="level">
          <div className="field">
            <label>Username</label>
            <div className="control">
              <input
                type="text"
                name="username"
                value={user.username}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="level">
          <div className="field">
            <div className="control">
              <button className="button is-rounded is-black">Edit User</button>
              <button
                onClick={() => props.setEditing(false)}
                className="button"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditUserForm;
