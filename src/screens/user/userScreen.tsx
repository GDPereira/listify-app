import { Container } from "@/src/components/container";
import { Header } from "@/src/components/header";
import { useLogout } from "@/src/hooks/useLogout";
import { Feather } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";

export const UserScreen = () => {
  const { logout } = useLogout();

  const onClickLogout = () => {
    logout();
  };

  return (
    <Container header={<Header />}>
      <Card onPress={onClickLogout}>
        <Card.Content style={styles.cardRow}>
          <Text variant="titleMedium">Logout</Text>
          <Feather name="log-out" size={24} />
        </Card.Content>
      </Card>
    </Container>
  );
};

const styles = StyleSheet.create({
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
