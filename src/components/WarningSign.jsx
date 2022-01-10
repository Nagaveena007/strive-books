import { Alert } from "react-bootstrap";
import MyBadge from "./MyBadge";

const WarningSign = (props) => {
  return (
    <>
      <h4>
        <Alert variant={"danger"}>
          {props.text}
          <MyBadge text="Strive Books" color="warning" />
        </Alert>
      </h4>
    </>
  );
};

export default WarningSign;
