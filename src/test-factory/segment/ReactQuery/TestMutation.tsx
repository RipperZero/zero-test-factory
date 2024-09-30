import { FC } from "react";

import { App } from "antd";

import { registerUser } from "@/api";
import { UserForm } from "@/test-factory/components/UserForm";
import {
  useMutation, // useQueryClient
} from "@tanstack/react-query";

type TestMutationProps = {};

const TestMutation: FC<TestMutationProps> = () => {
  // #region hooks start
  const { message } = App.useApp();

  // const queryClient = useQueryClient();
  const { isPending, mutate } = useMutation({
    mutationFn: registerUser,
    onSuccess: (res) => {
      if (res.success) {
        message.success(res.message ?? "");
        // queryClient.invalidateQueries({ queryKey: ["users"] });
      }
    },
  });
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <UserForm
      loading={isPending}
      onSubmit={(formValues) => {
        mutate(formValues);
      }}
    />
  );
  // #endregion render functions end
};

export { TestMutation };
