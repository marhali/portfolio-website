<template>
  <v-container>
    <h1
      class="mb-4"
      v-ripple
      @click="$router.push('/')"
    >
      marhali.de
    </h1>

   <h2 class="mb-4">Open Graph Tester</h2>

    <v-card shaped class="mb-4">
      <v-card-text>
        <v-form class="d-flex align-center">
          <v-select
            class="px-2"
            style="width: 50px"
            solo
            hide-details
            :items="types"
            v-model="type"
          />

          <v-text-field
            class="px-2"
            solo
            hide-details
            placeholder="Key"
            v-model="property"
          />

          <v-text-field
            class="px-2"
            solo
            hide-details
            placeholder="Value"
            v-model="content"
            clearable
          />

          <v-btn fab small :disabled="!property || !content" @click="add()">
            <v-icon color="green">mdi-plus</v-icon>
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>

    <h2>Meta Tags</h2>
    <v-card shaped>
      <v-card-text>
        <!-- empty notification -->
        <span v-if="meta.length === 0">no tags added yet</span>

        <MetaPair
          v-for="tag in meta"
          :key="tag.key"
          class="mb-1"
          :type="tag.type"
          :property="tag.property"
          :content="tag.content"
          @remove="remove(tag)"
          @save="save(tag, $event)"
        />
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import MetaPair from '@/components/tools/MetaPair'

export default {
  name: 'OpenGraphTester',

  components: {MetaPair},

  head: {
    title: {
      inner: 'Open Graph Tester',
      complement: 'marhali.de'
    },
    meta: function() {
      return this.processedMeta
    }
  },

  data() {
    return {
      types: ['name', 'property', 'itemprop'],

      /* type, property, content */
      meta: [],
      processedMeta: [],

      type: 'property',
      property: null,
      content: null
    }
  },

  mounted() {
    const meta = []
    const query = this.$route.query

    for(let key of Object.keys(query)) {
      const splitKey = key.split(';')
      meta.push({ type: splitKey[0], property: splitKey[1], content: query[key] })
    }

    this.meta = meta
  },

  watch: {
    meta(tags) {
      let params = ''
      let index = 0

      let cncTags = []

      for(const tag of tags) {
        params += index === 0 ? '?' : '&'
        params += tag.type + ';' + tag.property + '=' + tag.content
        index++

        cncTags.push({ [tag.type]: tag.property, content: tag.content })
      }

      history.replaceState({}, null, this.$route.path + params)
      this.processedMeta = cncTags
      this.$emit('updateHead')
    }
  },

  methods: {
    add() {
      const tag = {
        type: this.type,
        property: this.property,
        content: this.content
      }

      this.save(tag, tag)
      this.type = 'property'
      this.property = null
      this.content = null
    },

    save(oldTag, newTag) {
      const index = this.findIndex(oldTag)

      if(index > -1) {
        this.$set(this.meta, index, newTag)
      } else {
        this.meta.push(newTag)
      }
    },

    remove(tag) {
      const index = this.findIndex(tag)
      index > -1 && this.meta.splice(index, 1)
    },

    findIndex(tag) {
      return this.meta.findIndex(el => el.type === tag.type && el.property === tag.property)
    }
  }
}
</script>

<style scoped>

</style>