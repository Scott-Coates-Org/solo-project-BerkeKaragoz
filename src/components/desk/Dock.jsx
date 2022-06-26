import { useDispatch } from "react-redux";
import { Card, CardBody, CardHeader } from "reactstrap";

export default function Dock({ header, className, children, ...rest }) {
  return (
    <Card className={"rounded-0 " + (className ?? "")} {...rest}>
      {header && <CardHeader className="p-1">{header}</CardHeader>}
      <CardBody className="p-1">{children}</CardBody>
    </Card>
  );
}
