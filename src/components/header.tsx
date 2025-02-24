import { Appbar } from "react-native-paper";
import { useCheckAuth } from "../hooks/useCheckAuth";

export const Header = () => {
  const { data } = useCheckAuth();
  const name = data?.data.user.name;

  return (
    <Appbar.Header statusBarHeight={0} mode="small" elevated>
      <Appbar.Content title={`Welcome, ${name}!`} />
    </Appbar.Header>
  );
};
