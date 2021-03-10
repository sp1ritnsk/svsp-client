<template>
  <Dashboard />
</template>

<script>
import Dashboard from "../components/Dashboard";
import { mapState, mapActions } from "vuex";

export default {
  name: "AccountView",
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
    Dashboard
  }
};
</script>
