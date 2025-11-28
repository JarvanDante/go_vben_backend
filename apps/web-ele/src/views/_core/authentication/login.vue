<script lang="ts" setup>
import type { VbenFormSchema } from "@vben/common-ui";

import { computed } from "vue";

import { AuthenticationLogin, z } from "@vben/common-ui";
import { $t } from "@vben/locales";

import { useAuthStore } from "#/store";

defineOptions({ name: "Login" });

const authStore = useAuthStore();

const formSchema = computed((): VbenFormSchema[] => {
  return [
    {
      component: "VbenInput",
      componentProps: {
        placeholder: $t("authentication.usernameTip"),
      },
      fieldName: "username",
      label: $t("authentication.username"),
      rules: z.string().min(1, { message: $t("authentication.usernameTip") }),
    },
    {
      component: "VbenInputPassword",
      componentProps: {
        placeholder: $t("authentication.password"),
      },
      fieldName: "password",
      label: $t("authentication.password"),
      rules: z.string().min(1, { message: $t("authentication.passwordTip") }),
    },
    {
      component: "VbenInput",
      componentProps: {
        placeholder: "请输入验证码",
      },
      fieldName: "code",
      label: "验证码",
      rules: z.string().min(1, { message: "请输入验证码" }),
    },
  ];
});
</script>

<template>
  <AuthenticationLogin
    :form-schema="formSchema"
    :loading="authStore.loginLoading"
    @submit="authStore.authLogin"
  />
</template>
