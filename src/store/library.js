import { defineStore } from 'pinia';

export const useLibraryStore = defineStore('library', {
  state: () => ({
    loans: []
  }),
  actions: {
    addLoan(loanData) {
      this.loans.push(loanData);
    }
  }
});
