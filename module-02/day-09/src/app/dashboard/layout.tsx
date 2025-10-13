import PageWrapper from "@/components/pageWrapper";
import Sidebar from "@/components/sidebar";
import AdminGuardProvider from "@/providers/adminGuardProvider";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <AdminGuardProvider>
        <Sidebar />
        <PageWrapper>{children}</PageWrapper>
      </AdminGuardProvider>
    </div>
  );
}
