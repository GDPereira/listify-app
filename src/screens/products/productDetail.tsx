import { Container } from "@/src/components/container";
import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native-paper";

export const ProductDetail = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <Container>
      <Text>Details of product {id}</Text>
    </Container>
  );
};
