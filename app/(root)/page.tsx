import Header from "@/components/header";
import Main from "@/components/main";
import { linkDetails } from "@/data";

export default function Home() {
  return (
    <>
      <Header />
      <Main linkDetails={linkDetails} />
    </>
  );
}
