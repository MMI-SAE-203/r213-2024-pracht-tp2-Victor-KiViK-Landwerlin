<script setup lang="ts">
import type { MaisonRecord } from '@/types'

defineProps<MaisonRecord>()
</script>
<template>
  <div class="maison-card border-2 p-1">
    <img :src="image" alt="image de la maison" />
    <p>{{ prix }}</p>
    <p>{{ favoris ? 'oui' : 'non' }}</p>
    <p>{{ nomMaison }}</p>
    <p>{{ adresse }}</p>
    <p>{{ nbChambres }}</p>
    <p>{{ nbSdb }}</p>
    <p>{{ surface }}</p>
  </div>
</template>