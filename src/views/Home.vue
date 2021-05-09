<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld :msg="messageInfo" />

    <input v-model="typedMessage" type="text" />
    <button v-on:click="messageInfo = typedMessage">Test</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { MessageMutations } from "@/store/modules/mutations";

export default Vue.extend({
  name: "Home",
  components: {
    HelloWorld,
  },
  computed: {
    getMoinMessage(): string {
      return this.$store.state.message.content;
    },
    messageInfo: {
      get(): string {
        return this.$store.getters.getMessageInfo;
      },
      set(value) {
        console.log(value);
        this.$store.commit(MessageMutations.SET_MESSAGE_CONTENT, value);
      },
    },
  },
  data() {
    return {
      typedMessage: "",
      catsArray: []
    };
  },
  mounted() {
    console.log("Mounted");
    this.$store.dispatch("loadMessages")
  },
});
</script>
