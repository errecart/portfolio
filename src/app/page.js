import NavBar from "@/components/navBar/NavBar";
import { Sidebar } from "@/components/sideBar/Sidebar";
import Container from "@/pages/Container/Container";

export default function Home() {
  return (
    <div className="App">
      <Sidebar/>
      <Container/>
      <NavBar/>
    </div>
  );
}
