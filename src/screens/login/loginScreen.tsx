import { Container } from "@/src/components/container";
import { Input } from "@/src/components/form/input";
import { InputPassword } from "@/src/components/form/inputPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { StyleSheet } from "react-native";
import { Button, Card, Text, useTheme } from "react-native-paper";
import { z } from "zod";
import { useLogin } from "./hooks/useLogin";

const LoginSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string(),
});

type LoginInputs = z.infer<typeof LoginSchema>;

export const LoginScreen = () => {
  const { colors } = useTheme();
  const form = useForm({
    resolver: zodResolver(LoginSchema),
  });
  const { handleSubmit } = form;
  const { login, isLoading } = useLogin();
  const router = useRouter();

  const onSubmit: SubmitHandler<LoginInputs> = (values) => {
    login(values);
  };

  const onPressSignup = () => {
    router.replace("/(account)/signup");
  };

  return (
    <Container>
      <Card>
        <Card.Title titleVariant="titleLarge" title="Login" />
        <Card.Content>
          <FormProvider {...form}>
            <Input name="email" label={"Email"} keyboardType="email-address" />
            <InputPassword label={"Password"} name="password" />
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
        <Card.Content style={styles.contentSignup}>
          <Text>Don't have an account?</Text>
          <Text onPress={onPressSignup} style={{ color: colors.primary }}>
            Signup now!
          </Text>
        </Card.Content>
      </Card>
    </Container>
  );
};

const styles = StyleSheet.create({
  submitButton: {
    flex: 1,
  },
  contentSignup: {
    marginTop: 10,
    alignItems: "center",
  },
});
