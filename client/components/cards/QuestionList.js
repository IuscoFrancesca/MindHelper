import moment from "moment";
import { Avatar } from "antd";
import {
  LikeOutlined,
  LikeFilled,
  CommentOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { UserContext } from "../../context";
import { useContext } from "react";
import { useRouter } from "next/router";

const QuestionList = ({ posts, handleDelete }) => {
  const [state] = useContext(UserContext);
  const router = useRouter();
  return (
    <>
      {posts &&
        posts.map((post) => (
          <div className=" card mb-5" key={post._id}>
            <div className="card-header">
              <div>
                <Avatar size={40}>{post.postedBy.name[0]}</Avatar>
                <span className="pt-2 mx-2">{post.postedBy.name}</span>
                <span className="pt-2 mx-2">
                  {moment(post.createdAt).fromNow()}
                </span>
              </div>
            </div>

            <div className="card-body">{post.content}</div>

            <div className="card-footer d-flex">
              <LikeOutlined className="pt-2 h5" />
              <div className="pt-2 pe-5">likes</div>
              <CommentOutlined className="pt-2 h5" />
              <div className="pt-2">answer</div>

              {state && state.user && state.user._id === post.postedBy._id && (
                <>
                  <EditOutlined
                    onClick={() =>
                      router.push(`/user/editQuestion/${post._id}`)
                    }
                    className="pt-2 h5 px-2 ms-auto"
                  />
                  <DeleteOutlined
                    onClick={() => handleDelete(post)}
                    className="pt-2 h5 px-2"
                  />
                </>
              )}
            </div>
          </div>
        ))}
    </>
  );
};

export default QuestionList;
