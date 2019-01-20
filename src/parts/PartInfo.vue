<template>
  <div>
    <h1>{{part.title}}</h1>
    <div>{{part.description}}</div>
  </div>
</template>

<script>
import parts from '../data/parts';

export default {
  name: 'PartInfo',
  computed: {
    part() {
      const { id, partType } = this.$route.params;
      return parts[partType].find(part => part.id === +id);
    },
  },
};
</script>
