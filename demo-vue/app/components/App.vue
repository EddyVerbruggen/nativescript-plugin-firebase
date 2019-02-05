<template>
  <Page>
    <ActionBar title="Firebase Vue demo"></ActionBar>

    <StackLayout>
      <!--<Button @tap="onTapHasPermission" class="btn" text="Has Permission?"></Button>-->
      <!--<Button @tap="onTapScheduleNotification" class="btn" text="Schedule Notification"></Button>-->
      <!--<Button @tap="onTapCancelAll" class="btn" text="Cancel notifications"></Button>-->
      <Label class="message" :text="message" textWrap="true"></Label>
    </StackLayout>
  </Page>
</template>

<script>
    const firebase = require("nativescript-plugin-firebase");

    firebase.init({
      onDynamicLinkCallback: function (result) {
        console.log("Dynamic Link received: " + result);
        console.log("Dynamic Link received, url: " + result.url);
        if (result.url.indexOf("/campaigns/shit") > -1) {
          // note that you could deeplink/route the user now, but let's just show an alert
          alert({
            title: "Campaign button tapped!",
            message: "You tapped the button in the 'Firebase is the 💩' campaign - well don!",
            okButtonText: "Yep!"
          })
        }
      }
    }).then(function () {
      console.log("Firebase initialized");
    }).catch(function (error) {
      console.log("Error initializing Firebase: " + error);
    });

  export default {
    data() {
      return {
        message: "Tap a button above.."
      }
    },

    methods: {
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
    font-size: 14;
    margin: 16;
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
