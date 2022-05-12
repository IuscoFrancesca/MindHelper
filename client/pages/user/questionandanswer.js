import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context";
import PostForm from "../../components/forms/PostForm";
import { useRouter } from "next/router";
import axios from "axios";
import UserRoute from "../../components/routes/UserRoute";
import { toast } from "react-toastify";
import QuestionList from "../../components/cards/QuestionList";

const questionandanswer = () => {
  const [state, setState] = useContext(UserContext);
  //state
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);
  //route
  const router = useRouter();

  useEffect(() => {
    if (state && state.token) fetchUserPosts();
  }, [state && state.token]);

  const fetchUserPosts = async () => {
    try {
      const { data } = await axios.get("/create-question");
      setPosts(data);
    } catch (err) {
      console.log(err);
    }
  };
  const postSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/create-question", { content });
      console.log("response ", data);
      if (data.error) {
        toast.error(data.error);
      } else {
        fetchUserPosts();
        toast.success("Question posted");
        setContent("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (post) => {
    try {
      const deleteAnswer = window.confirm("Esti sigur?");
      if (!deleteAnswer) return;
      const { data } = await axios.delete(`/delete-question/${post._id}`);
      toast.error("Intrebarea a fost stearsa");
      fetchUserPosts();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <UserRoute>
      <div className="container-fluid py-5 bg-purplepage-color ">
        <div className="row py-5 bg-default-image height-page">
          <div className="display-1 py-5 text-center">
            <h1 style={{ color: "#000000" }}>Question-and-answer page</h1>
          </div>
        </div>
        <div className="row py-3">
          <div className="col-md-8 offset-md-2">
            <PostForm
              content={content}
              setContent={setContent}
              postSubmit={postSubmit}
            />
            <br />
            <QuestionList posts={posts} handleDelete={handleDelete} />
          </div>
        </div>
      </div>
    </UserRoute>
  );
};

export default questionandanswer;
