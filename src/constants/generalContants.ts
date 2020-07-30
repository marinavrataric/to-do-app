import { MessageContent } from "../interfaces/MessageContent";

export const languages = ["en", "hr", "de", "fr"];

export const route = {
  home: "/",
  login: "/start",
};

export const messages: { [key: string]: MessageContent } = {
  en: {
    title: "TO-DO List App",
    inputName: "Enter your name",
    namePlaceholder: 'Your name...',
    btnContinue: 'Continue',
    toDoPlaceholder: 'Start typing...',
    btnAddToDo: 'Add new to-do',
    toDoInfo: 'No to-dos yet'
  },
  hr: {
    title: "TO-DO Lista",
    inputName: "Upisite vase ime",
    namePlaceholder: 'Vase ime...',
    btnContinue: 'Nastavi',
    toDoPlaceholder: 'Upisite zadatak...',
    btnAddToDo: 'Dodajte novi zadatak',
    toDoInfo: 'Nemate niti jedan zadatak'
  },
  de: {
    title: "TO-DO Listen App",
    inputName: "Gib deinen Namen ein",
    namePlaceholder: 'Dein Name...',
    btnContinue: 'Fortsetzen',
    toDoPlaceholder: 'Anfangen zu tippen...',
    btnAddToDo: 'Neue Aufgaben hinzufügen',
    toDoInfo: 'Noch keine Aufgaben'
  },
  fr: {
    title: "Application Liste des tâches",
    inputName: "Entrez votre nom",
    namePlaceholder: 'Votre nom...',
    btnContinue: 'Continuer',
    toDoPlaceholder: 'ACommencer à écrire...',
    btnAddToDo: 'Commencer Ajouter une nouvelle tâche',
    toDoInfo: 'Pas encore de choses à faire'
  },
};

export const messageIds = {
    title: 'title',
    inputName: 'inputName',
    namePlaceholder: 'namePlaceholder',
    btnContinue: 'btnContinue',
    toDoPlaceholder: 'toDoPlaceholder',
    btnAddToDo: 'btnAddToDo',
    toDoInfo: 'toDoInfo'
}