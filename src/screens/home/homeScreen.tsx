import { Container } from "@/src/components/container";
import { Header } from "@/src/components/header";
import { Product } from "@/src/services/productsData";
import { FlashList } from "@shopify/flash-list";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ActivityIndicator, List, Text, useTheme } from "react-native-paper";
import { useProducts } from "./_hooks/useProducts";
import { Link, useRouter } from "expo-router";

const ProductItem = ({
  product,
  isEven,
}: {
  product: Product;
  isEven: boolean;
}) => {
  const { colors } = useTheme();

  return (
    <Link
      href={{
        pathname: "/products/[id]",
        params: { id: product._id },
      }}
    >
      <List.Item
        key={product._id}
        style={[
          styles.itemContainer,
          {
            backgroundColor: isEven
              ? colors.secondaryContainer
              : colors.tertiaryContainer,
          },
        ]}
        title={product.name}
        description={`US$ ${product.price}`}
      />
    </Link>
  );
};

export const HomeScreen = () => {
  const { colors } = useTheme();
  const { data, isLoading } = useProducts();
  const allProducts = data?.data.products;

  return (
    <Container header={<Header />}>
      {isLoading && <ActivityIndicator />}
      {!isLoading && (
        <FlashList<Product>
          data={allProducts}
          ListHeaderComponent={
            <View
              style={[
                styles.listHeader,
                {
                  backgroundColor: colors.secondaryContainer,
                },
              ]}
            >
              <Text variant="displaySmall">Products</Text>
            </View>
          }
          keyExtractor={(item) => item._id}
          removeClippedSubviews
          estimatedItemSize={64}
          ItemSeparatorComponent={() => <View style={styles.listSeparator} />}
          renderItem={({ item, index }) => {
            const isEven = index % 2 === 0;

            return (
              <ProductItem isEven={isEven} product={item} key={item._id} />
            );
          }}
        />
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  listHeader: {
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  listSeparator: {
    height: 10,
  },
});
