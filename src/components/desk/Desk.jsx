import { useDispatch } from "react-redux";
import Layout from "../Layout";

export default function Desk(props) {
  const dispatch = useDispatch();

  return <Layout {...props}>Desk</Layout>;
}
