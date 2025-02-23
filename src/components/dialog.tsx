import {
  Button,
  Dialog as DialogPaper,
  Portal,
  Text,
} from "react-native-paper";
import { useDialogStore } from "../store/dialog";

export const Dialog = () => {
  const { notification, resetStore } = useDialogStore();

  const hideDialog = () => resetStore();

  return (
    <Portal>
      <DialogPaper visible={!!notification.message} onDismiss={hideDialog}>
        <DialogPaper.Content>
          <Text variant="bodyMedium">{notification.message}</Text>
          {!!notification.description && (
            <Text variant="bodyMedium">{notification.description}</Text>
          )}
        </DialogPaper.Content>
        <DialogPaper.Actions>
          <Button onPress={hideDialog}>OK</Button>
        </DialogPaper.Actions>
      </DialogPaper>
    </Portal>
  );
};
