import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { PropsWithChildren, useMemo } from "react";
import { useDialogStore } from "../store/dialog";
import { HttpStatusCode, isAxiosError } from "axios";
import { useRouter } from "expo-router";
import { useCookies } from "../hooks/useCookies";

export const QueryProvider = ({ children }: PropsWithChildren) => {
  const { setNotification } = useDialogStore();
  const router = useRouter();
  const { clearCookies } = useCookies();

  const queryClient = useMemo(
    () =>
      new QueryClient({
        queryCache: new QueryCache({
          onError: (error) => {
            if (isAxiosError(error)) {
              const isUnauthorized =
                error.status === HttpStatusCode.Unauthorized;

              if (isUnauthorized) {
                clearCookies();
                router.push("/login");
              }
            }
          },
        }),
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
