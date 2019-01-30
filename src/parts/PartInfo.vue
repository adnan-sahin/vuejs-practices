<template>
  <div>
    <h1>{{part.title}}</h1>
    <div>{{part.description}}</div>
  </div>
</template>

<script>
import getPartsMixin from './get-parts-mixin';

export default {
  name: 'PartInfo',
  mixins: [getPartsMixin],
  props: {
    id: {
      type: [Number, String],
      validator(value) {
        return Number.isInteger(Number(value));
      },
    },
    partType: { type: String },
  },
  computed: {
    part() {
      //   const { id, partType } = this.$route.params;
      const { id, partType } = this;
      return this.parts[partType].find(part => part.id === +id);
    },
  },
};
</script>
