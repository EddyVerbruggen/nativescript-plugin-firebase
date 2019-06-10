<template>
  <Page>
    <ActionBar title="Firebase Vue demo"></ActionBar>

    <StackLayout>
      <!--<Button @tap="onTapHasPermission" class="btn" text="Has Permission?"></Button>-->
      <!--<Button @tap="onTapScheduleNotification" class="btn" text="Schedule Notification"></Button>-->
      <!--<Button @tap="onTapCancelAll" class="btn" text="Cancel notifications"></Button>-->
      <Label class="message" :text="message" textWrap="true" horizontalAlignment="center"></Label>
      <!--MLKitTextRecognition width="260"
                            height="340"
                            processEveryNthFrame="5"
                            @scanResult="onTextRecognitionResult">
      </MLKitTextRecognition-->

    </StackLayout>
  </Page>
</template>

<script>
  const firebase = require("nativescript-plugin-firebase");
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
        console.log(">> inappmessaging onMessageClicked, campaign: " + message.campaignName + ", with url: " + message.actionURL);
        this.message = `Campaign ${message.campaignName} clicked`;
      });

      // 👉 .. and for fun, wire an 'onMessageImpression' callback so when know when the message is shown
      inappmessaging.onMessageImpression(message => {
        console.log(">> inappmessaging onMessageImpression, campaign: " + message.campaignName);
        this.message = `Campaign ${message.campaignName} seen`;
      });
    },

    methods: {
      onTextRecognitionResult() {
        console.log("onTextRecognitionResult");
      }
      /*
      onTapHasPermission() {
        LocalNotifications.hasPermission()
            .then(granted => {
              alert({
                title: "Permission granted?",
                message: granted ? "YES" : "NO",
                okButtonText: "OK"
              });
            });
      },

      onTapScheduleNotification() {
        LocalNotifications.schedule(
            [{
              id: 1,
              title: 'Would you like a Red Alert poster?',
              subtitle: 'This poster is awesome!',
              body: 'The big brown Vue app jumped over the lazy Angular app. The big brown Vue app jumped over the lazy Angular app. The big brown Vue app jumped over the lazy Angular app. The big brown Vue app jumped over the lazy Angular app.',
              bigTextStyle: false, // Allow more than 1 row of the 'body' text on Android, but setting this to true denies showing the 'image'
              color: new Color("green"),
              image: "https://images-na.ssl-images-amazon.com/images/I/61mx-VbrS0L.jpg",
              thumbnail: "https://2.bp.blogspot.com/-H_SZ3nAmNsI/VrJeARpbuSI/AAAAAAAABfc/szsV7_F609k/s200/emoji.jpg",
              forceShowWhenInForeground: true,
              channel: "vue-channel",
              ticker: "Special ticker text for Vue (Android only)",
              at: new Date(new Date().getTime() + (5 * 1000)), // 5 seconds from now
              actions: [
                {
                  id: "yes",
                  type: "button",
                  title: "Yes (and launch app)",
                  launch: true
                },
                {
                  id: "no",
                  type: "button",
                  title: "No",
                  launch: false
                }
              ]
            }])
            .then(() => {
              alert({
                title: "Notification scheduled",
                message: "ID: 1",
                okButtonText: "OK, thanks"
              });
            })
            .catch(error => console.log("doSchedule error: " + error));
      },

      onTapCancelAll() {
        LocalNotifications.cancelAll()
            .then(() => {
              alert({
                title: "All canceled",
                okButtonText: "Awesome!"
              });
            })
            .catch(error => console.log("doCancelAll error: " + error));
      }
    */
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

  Button.btn {
    font-size: 14;
    border-radius: 3;
    border-width: 2;
    border-color: #63d4a5;
    color: #63d4a5;
    padding: 12;
    margin: 16;
  }
</style>
