import { useState } from "react";
import { Input, InputProps } from "./input";
import { TextInput } from "react-native-paper";

export const InputPassword = (props: InputProps) => {
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  return (
    <Input
      secureTextEntry={isSecureEntry}
      right={
        <TextInput.Icon
          onPress={() => setIsSecureEntry((prev) => !prev)}
          icon={isSecureEntry ? "eye" : "eye-off"}
        />
      }
      {...props}
    />
  );
};
