import { SyncOutlined } from "@ant-design/icons";

const AuthForm = ({
  handleSubmit,
  username,
  setUsername,
  email,
  setEmail,
  password,
  setPassword,
  secret,
  setSecret,
  loading,
  page,
  about,
  setAbout,
}) => (
  <form onSubmit={handleSubmit}>
    {page !== "login" && (
      <div className="form-group p-2">
        <small>
          <label className="text-muted">Your username</label>
        </small>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Enter username"
        />
      </div>
    )}

    <div className="form-group p-2">
      <small>
        <label className="text-muted">Email address</label>
      </small>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        className="form-control"
        placeholder="Enter email"
        disabled={page === "profile"}
      />
    </div>

    {page !== "profile" && (
      <div className="form-group p-2">
        <small>
          <label className="text-muted">Password</label>
        </small>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="form-control"
          placeholder="Enter password"
        />
      </div>
    )}
    {page !== "login" && page !== "profile" && (
      <>
        <div className="form-group p-2">
          <small>
            <label className="text-muted">Pick a question</label>
          </small>
          <select className="form-control">
            <option>What is your favorite color</option>
            <option>What is your mom's name</option>
            <option>What city you were born</option>
          </select>

          <small className="form-text text-muted">
            You can use this to reset your password if forgotten
          </small>
        </div>
        <div className="form-group p-2">
          <input
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Write your answer here"
          />
        </div>
      </>
    )}
    {page === "profile" && (
      <div className="form-group p-2">
        <small>
          <label className="text-muted">About</label>
        </small>
        <input
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Enter something about you"
        />
      </div>
    )}

    {page !== "profile" && (
      <div className="form-group p-2">
        <button
          disabled={
            page === "login"
              ? !email || !password || loading
              : !username || !email || !password || !secret || loading
          }
          className="btn btn-primary col-12"
        >
          {loading ? <SyncOutlined spin className="py-1" /> : "Submit"}
        </button>
      </div>
    )}
    {page === "profile" && (
      <div className="form-group p-2">
        <button className="btn btn-primary col-12">
          {loading ? <SyncOutlined spin className="py-1" /> : "Update profile"}
        </button>
      </div>
    )}
  </form>
);

export default AuthForm;
