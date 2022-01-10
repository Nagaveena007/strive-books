import { Button, ListGroup } from "react-bootstrap";
import { BsTrashFill } from "react-icons/bs";

const deleteComment = async (id) => {
  try {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + id,
      {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyODk0ZGFhY2FhMjAwMTU1MmExNjMiLCJpYXQiOjE2NDE4MjI0NTcsImV4cCI6MTY0MzAzMjA1N30.lN1RxoQOJ30JKSwPt0p956WSubDVQISDhHcwn_78XXg",
        },
      }
    );
    if (response.ok) {
      alert("comment successfully deleted");
    } else {
      alert("comment NOT deleted");
    }
  } catch (err) {
    console.log(err);
  }
};
const DeleteComment = ({ comment }) => {
  return (
    <>
      <Button
        variant="danger"
        type="submit"
        className="ml-2"
        onClick={() => deleteComment(comment._id)}
      >
        <BsTrashFill />
      </Button>
    </>
  );
};
export default DeleteComment;
