// src/stateManager.js
export function createStateManager(initialState) {
  let state = { ...initialState };
  let subscribers = [];

  return {
    getState() {
      return state;
    },
    setState(newState) {
      state = { ...state, ...newState };
      subscribers.forEach((cb) => cb(state));
    },
    subscribe(callback) {
      subscribers.push(callback);
    },
  };
}
