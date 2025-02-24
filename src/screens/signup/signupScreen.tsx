import { Container } from "@/src/components/container";
import { Input } from "@/src/components/form/input";
import { InputPassword } from "@/src/components/form/inputPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { StyleSheet } from "react-native";
import { Button, Card, Text, useTheme } from "react-native-paper";
import { z } from "zod";
import { useSignup } from "./hooks/useSignup";

const SignupSchema = z
  .object({
    name: z.string(),
    email: z.string().email("Enter a valid email"),
    password: z.string(),
    confirmPassword: z.string(),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type SignupInputs = z.infer<typeof SignupSchema>;

export const SignupScreen = () => {
  const { colors } = useTheme();
  const form = useForm({
    resolver: zodResolver(SignupSchema),
  });
  const { handleSubmit } = form;
  const { signup, isLoading } = useSignup();
  const router = useRouter();

  const onSubmit: SubmitHandler<SignupInputs> = (values) => {
    signup(values);
  };

  const onPressLogin = () => {
    router.replace("/(account)/login");
  };

  return (
    <Container isCenteredContent>
      <Card>
        <Card.Title titleVariant="titleLarge" title="Sign Up" />
        <Card.Content>
          <FormProvider {...form}>
            <Input name="name" label={"Name"} />
            <Input name="email" label={"Email"} keyboardType="email-address" />
            <InputPassword label={"Password"} name="password" />
            <InputPassword label={"Confirm Password"} name="confirmPassword" />
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
        <Card.Content style={styles.contentLogin}>
          <Text>Already have an account?</Text>
          <Text onPress={onPressLogin} style={{ color: colors.primary }}>
            Login now!
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
  contentLogin: {
    marginTop: 10,
    alignItems: "center",
  },
});
