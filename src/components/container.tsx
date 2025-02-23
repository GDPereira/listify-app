import { PropsWithChildren } from "react";
import { StyleSheet } from "react-native";
import {
  SafeAreaView,
  SafeAreaViewProps,
} from "react-native-safe-area-context";

interface ContainerProps extends SafeAreaViewProps {}

export const Container = ({
  children,
  ...props
}: PropsWithChildren<ContainerProps>) => {
  return (
    <SafeAreaView style={styles.container} {...props}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    flex: 1,
  },
});
