import { defineStore } from 'pinia'

export const useMyTour = defineStore({
  id: 'myStore',
  state: () => ({
    edit: null,
    select: null,
    option: null,
    complie: null,
    execution: null,
    tree: null,
    graph: null,
    pipeline: null,
    left: null,
    right: null,
    open: false,
  }),
})
