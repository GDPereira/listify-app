import { Container } from "@/src/components/container";
import { Input } from "@/src/components/form/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { StyleSheet } from "react-native";
import { Button, Card, TextInput } from "react-native-paper";
import { z } from "zod";
import { useLogin } from "./hooks/useLogin";

const LoginSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string(),
});

type LoginInputs = z.infer<typeof LoginSchema>;

export const LoginScreen = () => {
  const form = useForm({
    resolver: zodResolver(LoginSchema),
  });
  const { handleSubmit } = form;
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const { login, isLoading } = useLogin();

  const onSubmit: SubmitHandler<LoginInputs> = (values) => {
    login(values);
  };

  return (
    <Container>
      <Card>
        <Card.Title titleVariant="titleLarge" title="Login" />
        <Card.Content>
          <FormProvider {...form}>
            <Input name="email" label={"Email"} />
            <Input
              label={"Password"}
              name="password"
              secureTextEntry={isSecureEntry}
              right={
                <TextInput.Icon
                  onPress={() => setIsSecureEntry((prev) => !prev)}
                  icon={isSecureEntry ? "eye" : "eye-off"}
                />
              }
            />
          </FormProvider>
        </Card.Content>
        <Card.Actions>
          <Button
            loading={isLoading}
            disabled={isLoading}
            style={styles.submitButton}
            mode="outlined"
            onPress={handleSubmit(onSubmit)}
          >
            Submit
          </Button>
        </Card.Actions>
      </Card>
    </Container>
  );
};

const styles = StyleSheet.create({
  submitButton: {
    flex: 1,
  },
});
