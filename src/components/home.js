import { useDispatch } from "react-redux";
import Layout from "./layout";

export default function Home(props) {
  const dispatch = useDispatch();

  return <Layout {...props}>Home</Layout>;
}
