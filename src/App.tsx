import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import { ModalProvider } from "@/hooks/useModal";
import { Modal } from "@/ui";
import { Router } from "@/router/Router";

const queryClient = new QueryClient();

function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ModalProvider>
          <Router />
          <Modal />
        </ModalProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
