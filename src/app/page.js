import Dock from "@/components/dock/Dock";
import Container from "@/pages/Container/Container";

export default function Home() {
  return (
    <div className="page">
      <Dock />
      <main id="content">
        <Container />
      </main>
    </div>
  );
}
