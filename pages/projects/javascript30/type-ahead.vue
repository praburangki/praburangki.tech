<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({
  layout: 'javascript30',
})
export default class CSSVariablesPage extends Vue {
  head() {
    return {
      title: 'Type Ahead - JS 30',
    };
  }

  async created() {
    this.$store.commit('js30/setTitle', 'Type Ahead');
    const endpoint =
      'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
    const result = await fetch(endpoint);
    const jsonRes = await result.json();
    this.cities.push(...jsonRes);
  }

  cities = [];
  searchVal = '';

  get findMatches() {
    return this.cities.filter(location => {
      const pattern = new RegExp(this.searchVal, 'gi');
      return location.city.match(pattern) || location.state.match(pattern);
    });
  }

  get filterCities() {
    return this.findMatches.map(location => {
      const regex = new RegExp(this.searchVal, 'gi');
      const cityName = location.city.replace(
        regex,
        `<span class="hl" style="background: #ffc600;">${this.searchVal}</span>`
      );
      const stateName = location.state.replace(
        regex,
        `<span class="hl" style="background: #ffc600;">${this.searchVal}</span>`
      );
      return {
        rank: location.rank,
        name: `${cityName}, ${stateName}`,
        population: this.numberWithCommas(location.population),
      };
    });
  }

  numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
</script>

<template lang="pug">
  section.p-5.text-center
    form.search-form
      input.search(type="text", placeholder="City or State", v-model="searchVal")
      ul.suggestions
        template(v-if="searchVal")
          li(v-for="match in filterCities" :key="match.rank")
            span.name(v-html="match.name")
            span.population {{ match.population }}
        template(v-else)
          li Filter for a city
          li or a state
</template>

<style lang="postcss" scoped>
section {
  background: #ffc600;
  color: black;
}

input.search {
  @apply p-5 m-0 text-center relative;
  outline: 0;
  border: 10px solid #f7f7f7;
  width: 120%;
  left: -10%;
  top: 10px;
  z-index: 2;
  border-radius: 5px;
  font-size: 30px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.12), inset 0 0 2px rgba(0, 0, 0, 0.19);
}

.search-form {
  @apply max-w-sm my-12 mx-auto;
}

.suggestions {
  @apply m-0 p-0 relative;
}

.suggestions li {
  @apply bg-white flex justify-between m-0 p-5 capitalize;
  list-style: none;
  border-bottom: 1px solid #d8d8d8;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.14);
  transition: background 0.2s;
}

.suggestions li:nth-child(even) {
  transform: perspective(100px) rotateX(3deg) translateY(2px) scale(1.001);
  background: linear-gradient(to bottom, #ffffff 0%, #efefef 100%);
}

.suggestions li:nth-child(odd) {
  transform: perspective(100px) rotateX(-3deg) translateY(3px);
  background: linear-gradient(to top, #ffffff 0%, #efefef 100%);
}

span.population {
  font-size: 15px;
}
</style>
