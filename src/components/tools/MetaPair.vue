<template>
  <div class="d-flex align-center">
    <v-icon>mdi-chevron-double-right</v-icon>

    <v-select
      class="px-2"
      style="width: 50px"
      solo
      hide-details
      :value="type"
      :items="types"
      @change="newType = $event"
    />

    <v-text-field
      class="px-2"
      solo
      hide-details
      placeholder="Key"
      :value="property"
      @change="newProp = $event"
    />

    <v-text-field
      class="px-2"
      solo
      hide-details
      placeholder="Value"
      :value="content"
      @change="newContent = $event"
    />

    <v-btn
      :disabled="!edited"
      fab small
      class="mr-1"
      @click="update()"
    >
      <v-icon color="green">mdi-content-save</v-icon>
    </v-btn>

    <v-btn fab small @click="$emit('remove')">
      <v-icon color="red">mdi-minus</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'MetaPair',

  props: ['type', 'property', 'content'],

  data() {
    return {
      types: ['name', 'property', 'itemprop'],

      newType: null,
      newProp: null,
      newContent: null
    }
  },

  computed: {
    edited() {
      return (!!this.newProp && this.newProp !== this.$props.property)
        || (!!this.newContent && this.newContent !== this.$props.content)
        || (!!this.newType && this.newType !== this.$props.type)
    }
  },

  methods: {
    update() {
      const el = {
        type: this.newType ? this.newType : this.$props.type,
        property: this.newProp ? this.newProp : this.$props.property,
        content: this.newContent ? this.newContent : this.$props.content
      }

      this.$emit('save', el)
    }
  }
}
</script>

<style scoped>

</style>