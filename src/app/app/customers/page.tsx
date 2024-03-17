import { DashboardPage } from "@/components/dashboard/page";
import { TodoDataTable } from "./_components/todo-data-table";

export default async function AppPage() {
  return (
    <DashboardPage>
      <DashboardPage.Header>
        <DashboardPage.Header.Title>Customers</DashboardPage.Header.Title>
      </DashboardPage.Header>
      <DashboardPage.Main>
        <h1>Customers</h1>
        <TodoDataTable />
      </DashboardPage.Main>
    </DashboardPage>
  );
}
