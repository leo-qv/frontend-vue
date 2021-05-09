<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld :msg=messageInfo />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default Vue.extend({
  name: "Home",
  components: {
    HelloWorld,
  },
  computed: {
    getMoinMessage(): string{
      return this.$store.state.message.content;
    },
    messageInfo: {
      get(): string {
        return this.$store.getters.getMessageInfo;
      }
    }
  }
});
</script>
