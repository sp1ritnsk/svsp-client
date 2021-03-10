<template>
  <Profile />
</template>

<script>
import { mapState, mapActions } from "vuex";
import Profile from "../components/Profile";

export default {
  name: "ProfileView",
  data: () => ({
    // data
  }),
  computed: {
    ...mapState("auth", ["user"])
  },
  methods: {
    ...mapActions("auth", ["logout"])
  },
  components: {
    Profile
  }
};
</script>
