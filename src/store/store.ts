// src/store/store.js
import { createSignal } from 'solid-js';
import { makePersisted } from '@solid-primitives/storage';

// For a persistent signal
const [selectedParts, setSelectedParts] = makePersisted(createSignal([]), { name: 'selectedParts' });

// For a persistent store
//const [selectedParts, setSelectedParts] = makePersisted(createStore([]), { name: 'selectedParts' });

export { selectedParts, setSelectedParts };
