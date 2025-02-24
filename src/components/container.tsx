import { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";
import {
  SafeAreaView,
  SafeAreaViewProps,
} from "react-native-safe-area-context";

interface ContainerProps extends SafeAreaViewProps {
  header?: React.ReactNode;
  isCenteredContent?: boolean;
}

export const Container = ({
  children,
  header,
  isCenteredContent = false,
  ...props
}: PropsWithChildren<ContainerProps>) => {
  return (
    <SafeAreaView style={{ flexGrow: 1 }} {...props}>
      {header}
      <View
        style={[
          styles.container,
          isCenteredContent && styles.containerCentered,
          !!header && styles.containerMargin,
        ]}
      >
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
  },
  containerCentered: {
    justifyContent: "center",
  },
  containerMargin: {
    marginTop: 20,
  },
});
