<script lang="ts" setup>
import { ElMessage } from "element-plus";
import { useVbenForm } from "#/adapter/form";

const [BaseForm] = useVbenForm({
  commonConfig: {
    componentProps: {
      class: "w-full",
    },
  },
  handleSubmit: onSubmit,
  layout: "horizontal",
  wrapperClass: "grid-cols-1 p-0",
  schema: [
    {
      component: "Input",
      componentProps: {
        placeholder: "请输入品牌名称",
      },
      fieldName: "brandName",
      label: "品牌名称",
    },
    {
      component: "Input",
      componentProps: {
        placeholder: "请输入商户标识",
      },
      fieldName: "merchantId",
      label: "商户标识",
    },
    {
      component: "InputNumber",
      componentProps: {
        placeholder: "请输入可用额度",
        min: 0,
      },
      fieldName: "availableAmount",
      label: "可用额度",
    },
    {
      component: "InputNumber",
      componentProps: {
        placeholder: "500",
        min: 0,
      },
      fieldName: "minWithdraw",
      label: "单笔最低提现金额",
    },
    {
      component: "InputNumber",
      componentProps: {
        placeholder: "999999999",
        min: 0,
      },
      fieldName: "maxWithdraw",
      label: "单笔最高提现金额",
    },
    {
      component: "Input",
      componentProps: {
        placeholder:
          "http://szzero.livechatvalue.com/chat/chatClient/chatbox.jsp?companyID=866602&configID=",
        type: "textarea",
        rows: 3,
      },
      fieldName: "customerServiceUrl",
      label: "在线客服链接地址",
    },
    {
      component: "Input",
      componentProps: {
        placeholder: "请输入代理平台链接地址",
        type: "textarea",
        rows: 2,
      },
      fieldName: "agentPlatformUrl",
      label: "代理平台链接地址",
    },
    {
      component: "Input",
      componentProps: {
        placeholder: "请输入代理推广地址",
        type: "textarea",
        rows: 2,
      },
      fieldName: "agentPromotionUrl",
      label: "代理推广地址",
    },
    {
      component: "Input",
      componentProps: {
        placeholder: "请输入手机APP下载地址",
        type: "textarea",
        rows: 2,
      },
      fieldName: "appDownloadUrl",
      label: "手机APP下载地址",
    },
    {
      component: "Upload",
      componentProps: {
        accept: ".svg",
        maxCount: 1,
        listType: "picture-card",
      },
      fieldName: "mobileLogo",
      label: "手机端LOGO",
    },
    {
      component: "InputNumber",
      componentProps: {
        placeholder: "请输入分钟数",
        min: 0,
      },
      fieldName: "sameIpRegister",
      label: "同一IP重复注册",
    },
    {
      component: "RadioGroup",
      componentProps: {
        options: [
          {
            label: "否",
            value: 0,
          },
          {
            label: "是",
            value: 1,
          },
        ],
      },
      fieldName: "openRegister",
      label: "是否开放注册",
    },
    {
      component: "RadioGroup",
      componentProps: {
        options: [
          {
            label: "否",
            value: 0,
          },
          {
            label: "是",
            value: 1,
          },
        ],
      },
      fieldName: "closeWebsite",
      label: "暂时关闭网站",
    },
  ],
});

function onSubmit(values: Record<string, any>) {
  ElMessage.success({
    message: `保存成功: ${JSON.stringify(values)}`,
  });
}
</script>

<template>
  <div class="basic-setting-container">
    <BaseForm />
  </div>
</template>

<style scoped lang="scss">
.basic-setting-container {
  padding: 0;
  background: transparent;
  border-radius: 0;

  :deep(.vben-form-wrapper) {
    padding: 0 !important;
    margin: 0 !important;
  }

  :deep(.vben-form-item) {
    margin-bottom: 16px;
  }

  :deep(.vben-form-label) {
    padding-right: 12px;
  }
}
</style>
