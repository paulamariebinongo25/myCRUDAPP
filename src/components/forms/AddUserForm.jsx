import React, { useState } from "react";

const AddUserForm = props => {
  const initialFormState = { id: null, name: "", username: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = e => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!user.name || !user.username) return;

    props.addUser(user);
    setUser(initialFormState);
  };

  return (
    <form
      className="square columns is-mobile is-desktop is-centered"
      onSubmit={handleSubmit}
    >
      <div className="box1 box">
        <div className="title is-4 has-text-centered">Add User</div>
        <div className="field">
          <label>Name</label>
          <div className="control">
            <input
              className="input is-black is-normal"
              type="text"
              name="name"
              value={user.name}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="level">
          <div className="level-item has-centered">
            <div className="field">
              <label>Username</label>
              <div className="control">
                <input
                  className="input is-black is-normal"
                  type="text"
                  name="username"
                  value={user.username}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="level">
          <div className="level-item has-centered">
            <div className="field">
              <div className="control">
                <button className="button is-rounded is-black is-fullwidth">
                  Add New User
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddUserForm;
