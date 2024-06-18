import AnalayticsSection from "./-AnalyticsSection";
import AppointmentsSection from "../../-AppointmentsSection";
import QueueingSection from "./-QueueingSection";

export default function AdminDashboard() {
  return (
    <div className="flex flex-col flex-1 gap-5">
      <QueueingSection />
      <AnalayticsSection />
    </div>
  );
}
