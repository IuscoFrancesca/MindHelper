import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Modal, Avatar } from "antd";
import Link from "next/link";
import AuthForm from "../../components/forms/AuthForm";
import { UserContext } from "../../context";
import { useRouter } from "next/router";
import { LoadingOutlined, CameraOutlined } from "@ant-design/icons";

const Profile = () => {
  const [about, setAbout] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [ok, setOk] = useState(false);
  const [loading, setLoading] = useState(false);
  //profile picture
  const [image, setImage] = useState({});
  const [uploading, setUploading] = useState(false);

  const router = useRouter();

  const [state, setState] = useContext(UserContext);

  useEffect(() => {
    if (state && state.user) {
      setUsername(state.user.username);
      setEmail(state.user.email);
      setAbout(state.user.about);
      setImage(state.user.image);
    }
  }, [state && state.user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.put(`/profile`, {
        username: username,
        about: about,
        email: email,
        image: image,
      });

      if (data.error) {
        toast.error(data.error);
        setLoading(false);
      } else {
        //update local storage
        let auth = JSON.parse(localStorage.getItem("auth"));
        auth.user = data;
        localStorage.setItem("auth", JSON.stringify(auth));
        //update context
        setState({ ...state, user: data });

        setOk(true);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const handleImage = async (e) => {
    const file = e.target.files[0];
    let formData = new FormData();
    formData.append("image", file);
    setUploading(true);
    try {
      const { data } = await axios.post("/uploadprofileimage", formData);
      setImage({
        url: data.url,
        public_id: data.public_id,
      });
      setUploading(false);
    } catch (err) {
      console.log(err);
      setUploading(false);
    }
  };

  return (
    <div className="container-fluid py-5 ">
      <div className="row py-5 bg-default-image height-page">
        <div className="display-1 py-5 text-center">
          <h1 style={{ color: "#000000" }}>Profile</h1>
        </div>
      </div>

      <div className="row py-5">
        <div className="col-md-3">
          <label className="d-flex justify-content-center h5">
            {image && image.url ? (
              <Avatar size={100} src={image.url} className="mt-5" />
            ) : uploading ? (
              <LoadingOutlined className="mt-2" />
            ) : (
              <CameraOutlined className="mt-2" />
            )}
            <input
              onChange={handleImage}
              type="file"
              accept="images/*"
              hidden
            />
          </label>
        </div>
        <div className="col-md-5">
          <AuthForm
            about={about}
            setAbout={setAbout}
            handleSubmit={handleSubmit}
            username={username}
            setUsername={setUsername}
            email={email}
            setEmail={setEmail}
            loading={loading}
            page="profile"
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Modal
            title="Congratulations!"
            visible={ok}
            onCancel={() => setOk(false)}
            footer={null}
          >
            <p>Profilul tau a fost actualizat</p>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Profile;
