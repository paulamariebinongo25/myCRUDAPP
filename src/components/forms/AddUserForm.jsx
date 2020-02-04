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
              <button className="button is-rounded is-black">
                Add New User
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddUserForm;
