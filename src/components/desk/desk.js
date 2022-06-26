import { useDispatch } from "react-redux";
import Layout from "../layout";

export default function Desk(props) {
  const dispatch = useDispatch();

  return <Layout {...props}>Desk</Layout>;
}
