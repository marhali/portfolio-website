<template>
  <v-chip
    :to="to"
    :href="href"
    :target="href ? '_blank' : ''"
    rel="noopener noreferrer"
  >
    <slot />
  </v-chip>
</template>

<script>
export default {
  name: 'ChipLink',

  props: ['href', 'to'],
}
</script>

<style scoped>

</style>