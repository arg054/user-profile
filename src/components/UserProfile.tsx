interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const UserProfile = ({ id, name, username, email }: User) => {
  return (
    <>
      <div>
        <form>
          <legend>User Profile</legend>
          <div className="mb-3">
            <fieldset disabled>
              <label className="form-label">User ID</label>
              <input
                type="text"
                id="disabledTextInput"
                className="form-control"
                placeholder={id.toString()}
              />
            </fieldset>
          </div>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="name"
              className="form-control"
              id={name}
              placeholder={name}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="username"
              className="form-control"
              id={username}
              placeholder={username}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id={email}
              placeholder={email}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </form>
      </div>
    </>
  );
};

export default UserProfile;
