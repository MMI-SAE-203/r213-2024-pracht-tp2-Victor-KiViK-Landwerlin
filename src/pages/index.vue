<script setup lang="ts">
const maisonsListe: MaisonRecord[]=[
  {
    "adresse": "11 rue du Journal de Mickey, Montbéliard",
    "collectionId": "5ewh9oouv30zp6e",
    "collectionName": "Maison",
    "created": "2024-05-02 08:30:33.013Z",
    "favoris": false,
    "id": "mkbg0du0a5fwm64",
    "image": "images_aYfUCZ1lEu.jpg",
    "nbChambres": 2,
    "nbSdb": 1,
    "nomMaison": "Maison de Fou",
    "prix": 100000,
    "surface": 100,
    "updated": "2024-05-02 08:30:33.013Z"
  },
  {
    "adresse": "24 rue Kylian Mbappé, Belfort",
    "collectionId": "5ewh9oouv30zp6e",
    "collectionName": "Maison",
    "created": "2024-05-02 08:32:24.040Z",
    "favoris": false,
    "id": "7fymfzb4wgrinfr",
    "image": "images_1_P7gruJcdG5.jpg",
    "nbChambres": 4,
    "nbSdb": 2,
    "nomMaison": "Maison Super",
    "prix": 200000,
    "surface": 150,
    "updated": "2024-05-02 08:32:24.040Z"
  },
  {
    "adresse": "33 rue Jack Daniels, Besançon",
    "collectionId": "5ewh9oouv30zp6e",
    "collectionName": "Maison",
    "created": "2024-05-02 08:33:33.384Z",
    "favoris": true,
    "id": "ynu3deisv35a11o",
    "image": "t_l_chargement_1_HMC7y95NlP.jpg",
    "nbChambres": 1,
    "nbSdb": 1,
    "nomMaison": "Maison Exceptionnel",
    "prix": 1000000,
    "surface": 51,
    "updated": "2024-05-02 08:33:33.384Z"
  }
]
interface MaisonRecord {
  adresse: string;
  collectionId: string;
  collectionName: string;
  created: string;
  favoris: boolean;
  id: string;
  image: string;
  nbChambres: number;
  nbSdb: number;
  nomMaison: string;
  prix: number;
  surface: number;
  updated: string;
}
console.log(maisonsListe)
</script>

<template>
  <h1 class="text-2xl">Bonjour monde !</h1>
</template>
