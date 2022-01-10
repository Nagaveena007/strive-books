import { Badge } from "react-bootstrap";
const MyBadge = (props) => {
  return (
    <h4>
      <Badge pill variant={props.color}>
        {" "}
        {props.text}{" "}
      </Badge>
    </h4>
  );
};
export default MyBadge;
