<template>
  <v-container fluid>
    <Profile />
  </v-container>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
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
