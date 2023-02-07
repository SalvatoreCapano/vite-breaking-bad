import { reactive } from 'vue';

export const store = reactive({
    archetypes: [],
    selectedArchetype: "",
    cardsNumber: 28,
    downloadCompleted: false,
    results: [],
    error: false
});