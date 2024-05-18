import { createFileRoute } from "@tanstack/react-router";
import NowServing from "./layout/-NowServing";
import Video from "./layout/-Video";

export const Route = createFileRoute("/_kiosk-layout/kiosk/_pages/now-serving")(
  {
    component: () => (
      <div className="flex flex-1 ">
        <NowServing />
        <Video />
      </div>
    ),
  }
);
