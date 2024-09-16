import { useNavigate } from "@solidjs/router";
import { createEffect } from "solid-js";
import CreateNote from "~/components/dashboard/create-note";
import ProjectsSidebar from "~/components/dashboard/projects-sidebar";
import Header from "~/components/dashboard/reusable/header";
import { store } from "~/store";

export default function Dashboard() {
  const navigate = useNavigate();

  createEffect(() => {
    if (!store.auth.state.isAuthenticated) {
      navigate("/", { replace: true });
    }
  });

  return (
    <>
      <Header />
      <ProjectsSidebar />
      <div class="h-[calc(100vh-6rem)] mt-24 ml-64 mr-4 bg-purple-400 px-4">
        <CreateNote />
        <div class="bg-green-300">
          <p>Hello world</p>
        </div>
      </div>
    </>
  );
}
