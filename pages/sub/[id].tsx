import { useRouter } from "next/router";

export default function ID(){
  //id 가져오기
  const router=useRouter();
  const id = Number(router.query.id);
  return(
    <>
      <h1>/pages/sub/[id].js</h1>
      <h1>Parameter id = {id}</h1>
      <a href="/">/pages/index.js</a>
    </>
  )
}