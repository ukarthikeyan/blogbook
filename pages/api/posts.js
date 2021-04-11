import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const posts = await db
    .collection("posts")
    .find({})    
    .toArray();

  res.json(posts);
};