import { TopBar } from "./TopBar";
import { Navbar } from "./Navbar";

export function SiteHeader() {
  return (
    <div className="sticky top-0 z-50">
      <TopBar />
      <Navbar />
    </div>
  );
}
