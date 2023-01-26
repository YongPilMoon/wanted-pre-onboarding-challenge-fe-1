import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import { RecoilRoot } from "recoil";

import { Router } from "@/router/Router";
import { Modal } from "@/ui";
import { ModalProvider } from "@/ui/Modal/useModal";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ModalProvider>
          <Router />
          <Modal />
          <ToastContainer position="bottom-right" autoClose={3000} />
        </ModalProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
