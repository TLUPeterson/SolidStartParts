'use client'
import { createSignal } from 'solid-js';
import { makePersisted } from '@solid-primitives/storage';
import { Part } from "~/types/parts";

//Default values of the possible parts
const defaultParts: { [key: string]: Part | null } = {
    CPU: null,
    GPU: null,
    Motherboard: null,
    Memory: null,
    Storage: null,
    PSU: null,
    Case: null,
    Monitor: null,
};

//Signal to store the selected parts
const [selectedParts, setSelectedParts] = makePersisted(
    createSignal<{ [key: string]: Part | null }>(defaultParts),
    { name: 'selectedParts' }
);

//Function to add a part to the selected parts
const addPart = (component: string, part: Part) => {
    setSelectedParts((prev) => ({ ...prev, [component]: part }));  
};

//Function to remove a part from the selected parts
const removePart = (component: string) => {
    setSelectedParts((prev) => ({ ...prev, [component]: null }));
};

export { selectedParts, setSelectedParts, addPart, removePart };
