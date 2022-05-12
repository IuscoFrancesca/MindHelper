import Post from "../models/question";

export const createQuestion = async (req, res) => {
  const { content } = req.body;
  if (!content.length) {
    return res.json({
      error: "Content is required",
    });
  }
  try {
    const post = new Post({ content, postedBy: req.user._id });
    post.save();
    res.json(post);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

export const userQuestions = async (req, res) => {
  try {
    //const posts = await Post.find({ postedBy: req.user._id })

    const posts = await Post.find()
      .populate("postedBy", "_id name")
      .sort({ createdAt: -1 })
      .limit(10);
    res.json(posts);
  } catch (err) {
    console.log(err);
  }
};

export const editUserQuestion = async (req, res) => {
  try {
    const post = await Post.findById(req.params._id);
    res.json(post);
  } catch (err) {
    console.log(err);
  }
};

export const updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params._id, req.body, {
      new: true,
    });
    res.json(post);
  } catch (err) {
    console.log(err);
  }
};

export const deleteQuestion = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params._id);
    res.json({ ok: true });
  } catch (err) {
    console.log(err);
  }
};