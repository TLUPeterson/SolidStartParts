import { createSignal } from 'solid-js';
import { makePersisted } from '@solid-primitives/storage';
import { Part } from "~/types/parts";

const defaultParts: { [key: string]: Part | null } = {
    CPU: null,
    GPU: null,
    Motherboard: null,
    RAM: null,
    Storage: null,
    PSU: null,
    Case: null
};

const [selectedParts, setSelectedParts] = makePersisted(
    createSignal<{ [key: string]: Part | null }>(defaultParts),
    { name: 'selectedParts' }
);

const addPart = (component: string, part: Part) => {
    setSelectedParts((prev) => ({ ...prev, [component]: part }));  
};

const removePart = (component: string) => {
    setSelectedParts((prev) => ({ ...prev, [component]: null }));
};

export { selectedParts, setSelectedParts, addPart, removePart };
