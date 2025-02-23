import {
  MutationCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { PropsWithChildren, useMemo } from "react";
import { useDialogStore } from "../store/dialog";
import { isAxiosError } from "axios";

export const QueryProvider = ({ children }: PropsWithChildren) => {
  const { setNotification } = useDialogStore();

  const queryClient = useMemo(
    () =>
      new QueryClient({
        mutationCache: new MutationCache({
          onError: (error) => {
            if (isAxiosError(error)) {
              setNotification({
                message: error.response?.data.message,
              });
            }
          },
        }),
      }),
    [],
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
