import Header from "@/components/header";
import Main from "@/components/main";
import { linkDetails } from "@/data";

export default function Home() {
  const data = [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ];
  return (
    <>
      <Header />
      <Main linkDetails={linkDetails} />
    </>
  );
}
