<template>
  <v-btn
    icon rounded link
    :to="to"
    :href="href"
    :target="href ? '_blank' : ''"
    rel="noopener noreferrer"
  >
    <v-icon>{{ icon }}</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'IconLink',

  props: ['icon', 'href', 'to']
}
</script>

<style scoped>

</style>