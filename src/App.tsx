import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { App as AppProvider, Typography } from "antd";

const queryClient = new QueryClient();

function App() {
  return (
    <AppProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Typography.Title>HELLO WORLD</Typography.Title>
        <div>123</div>
      </QueryClientProvider>
    </AppProvider>
  );
}

export default App;
