import React, { useState, useContext, useEffect } from "react";
import { Box, TextareaAutosize, Button, styled } from "@mui/material";
import { DataContext } from "../../../context/DataProvider";
import { API } from "../../../service/api";
// add components
import Comment from "./Comment";

const Container = styled(Box)`
  margin-top: 100px;
  display: flex;
`;
const Image = styled("img")({
  width: 50,
  height: 50,
  borderRadius: "50%",
});
const StyledTextArea = styled(TextareaAutosize)`
  height: 80px;
  width: 100%;
  margin: 0 20px;
  border-radius: 10px;
  font-style: italic;
  font-size: 16px;
  font-weight: 300;
`;
const initialValues = {
  name: "",
  postId: "",
  comments: "",
  date: new Date(),
};
const Comments = ({ post }) => {
  const { account } = useContext(DataContext);
  const [comment, setComment] = useState(initialValues);
  const [toggle, setToggle] = useState(false);
  //   all coments are stored in comments;
  const [comments, setComments] = useState([]);
  const handleChange = (e) => {
    setComment({
      ...comment,
      name: account.username,
      postId: post._id,
      comments: e.target.value,
    });
  };
  const addComment = async () => {
    let response = await API.newComment(comment);
    if (response.isSuccess) {
      console.log("comments received successfully");
      setComment(initialValues);
    }
    setToggle((prevState) => !prevState);
  };

  const url = "https://static.thenounproject.com/png/12017-200.png";
  useEffect(() => {
    const getData = async () => {
      let response = await API.getAllComments(post._id);
      if (response.isSuccess) {
        setComments(response.data);
      }
    };
    getData();
  }, [post, toggle]);
  return (
    <Box>
      <Container>
        <Image src={url} alt="dp" />
        <StyledTextArea
          minRows={5}
          placeholder="what's on your mind"
          value={comment.comments}
          onChange={(e) => handleChange(e)}
        />
        <Button
          variant="contained"
          color="primary"
          size="medium"
          style={{ height: 40 }}
          onClick={addComment}
        >
          Post
        </Button>
      </Container>
      <Box>
        {comments &&
          comments.length > 0 &&
          comments.map((comment) => (
            <Comment comment={comment} setToggle={setToggle} />
          ))}
      </Box>
    </Box>
  );
};

export default Comments;
