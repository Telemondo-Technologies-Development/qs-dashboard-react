import { createFileRoute } from "@tanstack/react-router";
import Header from "../../layout/kiosk_dashboard/-Header";
import Footer from "../../layout/kiosk_dashboard/-Footer";
import NowServing from "./layout/-NowServing";
import Video from "./layout/-Video";

export const Route = createFileRoute("/kiosk/_pages/now-serving")({
  component: () => (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 ">
        <NowServing/>
        <Video/>
      </div>
      <Footer />
    </div>
  ),
});
