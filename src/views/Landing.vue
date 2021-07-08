<template>
  <v-container class="fill-height">
    <v-row align="center">
      <v-col cols="12" md="6">
        <v-row justify="center">
          <div>
            <v-img
              class="ma-5"
              width="30vw"
              max-width="200px"
              src="@/assets/profile.png"
            />
          </div>
        </v-row>

        <section class="text-center">
          <h2>Marcel Haßlinger</h2>
          <span>Frankfurt / Main, Germany</span>

          <div>
            <IconLink
              v-for="social in socials"
              :key="social.icon"
              :to="social.to"
              :href="social.href"
              :icon="social.icon"
            />
          </div>
        </section>
      </v-col>

      <v-col class="px-md-16">
        <section>
          <h2>About</h2>
          <p>Hello my name is Marcel, I am an experienced software and systems engineer. I love working on new projects to keep developing myself.</p>
        </section>

        <section>
          <h2>Skills</h2>
          <p>Web3, Java, Spring, JavaScript, Vue.js, Python, Cassandra, MySQL / SQL, ElasticSearch, Redis</p>
        </section>

        <section>
          <h2>Projects</h2>
          <p>
            <chip-link
              v-for="project in projects"
              :key="project.title"
              :href="project.href"
              :to="project.to"
              class="mr-2 mb-2"
            >
              {{ project.title }}
            </chip-link>
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>&#099;&#111;&#110;&#116;&#097;&#099;&#116;&#064;&#109;&#097;&#114;&#104;&#097;&#108;&#105;&#046;&#100;&#101;</p>
        </section>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ChipLink from '@/components/ChipLink'
import IconLink from '@/components/IconLink'
export default {
  name: 'Landing',

  components: {IconLink, ChipLink},

  head: {
    title: {
      inner: 'marhali.de',
      complement: 'portfolio'
    }
  },

  data() {
    return {
      socials: [
        {
          icon: 'mdi-twitter',
          href: 'https://twitter.com/marhali_de'
        },
        {
          icon: 'mdi-github',
          href: 'https://github.com/marhali'
        },
        {
          icon: 'mdi-linkedin',
          href: 'https://www.linkedin.com/in/marcel-hasslinger/'
        }
      ],

      tools: [
        {
          title: 'Open Graph Tester',
          to: '/tools/open-graph-tester'
        }
      ],

      projects: [
        {
          title: 'oceanpearl.io',
          href: 'https://oceanpearl.io'
        },
        {
          title: 'easy-i18n',
          href: 'https://github.com/marhali/easy-i18n'
        },
        {
          title: 'portfolio-website',
          href: 'https://github.com/marhali/portfolio-website'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>