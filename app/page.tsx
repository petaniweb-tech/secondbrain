import Chat from "./components/Chat";
import Pdf from "./components/Pdf";

export default function Home() {
  return (
    <div className="grid h-screen grid-cols-1 md:grid-cols-2">
      <Pdf />
      <Chat />
    </div>
  );
}
