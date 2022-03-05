import User from "../models/user";
import { hashPassword, comparePassword } from "../helpers/auth";
export const register = async (req, res) => {
  const { name, email, password, secret } = req.body;
  //validations
  if (!name) return res.status(400).send("Name is required");
  if (!password || password.lenght < 6)
    return res
      .status(400)
      .send("Password is required and should be 6 caracters long");

  if (!secret) return res.status(400).send("Answer is required");

  const exist = await User.findOne({ email });
  if (exist) return res.status(400).send("Email is taken");

  //hash the password
  const hashedPassword = await hashPassword(password);

  const user = new User({ name, email, password: hashedPassword, secret });
  try {
    await user.save();
    return res.json({
      ok: true,
    });
  } catch (err) {
    console.log("Register failed=>", err);
    return res.status(400).send("Error.Try again.");
  }
};