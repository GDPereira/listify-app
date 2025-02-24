import { Controller, useFormContext } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { Text, TextInput, TextInputProps, useTheme } from "react-native-paper";

export interface InputProps extends TextInputProps {
  name: string;
}

export const Input = ({ name, ...props }: InputProps) => {
  const { colors } = useTheme();
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => {
          return (
            <TextInput
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              {...props}
            />
          );
        }}
        name={name}
      />
      <View style={styles.errorContainer}>
        {errors[name] && (
          <Text variant="labelSmall" style={{ color: colors.error }}>
            {errors[name].message as string}
          </Text>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    height: 40,
  },
});
