<template>
  <Page>
    <ActionBar title="Firebase Vue demo"></ActionBar>

    <StackLayout>
      <Label class="message" :text="message" textWrap="true" horizontalAlignment="center"></Label>
    </StackLayout>

  </Page>
</template>

<script>
  import { inappmessaging } from "nativescript-plugin-firebase/inappmessaging";

  export default {
    data() {
      return {
        message: "Fear not, young Skywalker"
      }
    },

    created() {
      // wire up an 'onMessageClicked' callback
      inappmessaging.onMessageClicked(message => {
        this.message = `Campaign ${message.campaignName} clicked`;
      });

      // 👉 .. and for fun, wire an 'onMessageImpression' callback so when know when the message is shown
      inappmessaging.onMessageImpression(message => {
        this.message = `Campaign ${message.campaignName} seen`;
      });
    }
  }
</script>

<style scoped>
  ActionBar {
    background-color: #53ba82;
    color: #ffffff;
  }

  .message {
    font-size: 17;
    margin: 17;
    color: #53ba82;
  }
</style>