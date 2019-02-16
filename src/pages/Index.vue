<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
    <q-btn @click="test ()" label="Test Firebase" />
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  methods: {
    test () {
      console.log('test running')
      this.$store.dispatch('test')
    }
  }
}
</script>
