
import LowBar from "@/components/lowBar/Lowbar";
import Options from "@/components/options/Options";
import Container from "@/pages/Container/Container";

export default function Home() {
  
  return (
    <div className="App">
      {/* <Sidebar/> */}
      <Options/>
      <Container/>
      {/* <NavBar/> */}
      <LowBar/>
    </div>
  );
}
