import axios from "axios";

const functoget = async () => {
  const resp = await axios.get("http://localhost:3000/api/user");
  //   const stfy = JSON.stringify(resp);
  console.log(
    "-----------------------------------------------------------------"
  );
  console.log("resp  ->>>>>>", resp.data);
  const respp = JSON.stringify(resp.data);
  return respp;
};

const page = async () => {
  const getfromserver = await functoget();

  return <div>{getfromserver}</div>;
};

export default page;
