export function uuid () {
  return Math.random().toString(16).slice(2)
}

export function saveStatePlugin (store: any) {
  store.subscribe(
    (mutation: any, state: any) => localStorage.setItem('boards', JSON.stringify(state.boards))
  )
}
