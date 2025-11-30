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
      suffix: () => "元",
    },
    {
      component: "InputNumber",
      componentProps: {
        placeholder: "999999999",
        min: 0,
      },
      fieldName: "maxWithdraw",
      label: "单笔最高提现金额",
      suffix: () => "元",
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
      suffix: () => "分钟",
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
  wrapperClass: "grid-cols-1",
});

function onSubmit(values: Record<string, any>) {
  ElMessage.success({
    message: `保存成功: ${JSON.stringify(values)}`,
  });
}
</script>

<template>
  <div class="p-4">
    <div class="bg-white rounded-lg shadow-sm p-6 basic-setting-form">
      <BaseForm />
    </div>
  </div>
</template>

<style scoped lang="scss">
.basic-setting-form {
  :deep(.el-form-item__label) {
    width: 160px !important;
    white-space: nowrap;
  }
}
</style>
