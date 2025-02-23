"use client";

import { create } from "zustand";

interface Notification {
  message: string;
  description: string;
}

interface NotificationState {
  notification: Notification;
  setNotification: (
    notification: Pick<Notification, "message"> & Partial<Notification>,
  ) => void;
  resetStore: () => void;
}

const defaultState: Required<Notification> = {
  message: "",
  description: "",
};

export const useDialogStore = create<NotificationState>((set) => ({
  notification: defaultState,
  setNotification: (notification) => {
    set({ notification: { ...defaultState, ...notification } });
  },
  resetStore: () => set({ notification: defaultState }),
}));
