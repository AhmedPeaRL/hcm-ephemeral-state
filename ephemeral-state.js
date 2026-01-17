(function () {
  const state = {
    lastInteraction: null,
    silenceDuration: 0
  };

  setInterval(() => {
    if (state.lastInteraction) {
      state.silenceDuration = Date.now() - state.lastInteraction;
    }
  }, 1000);

  window.HCM_EPHEMERAL_STATE = {
    touch(ts) {
      state.lastInteraction = ts;
      state.silenceDuration = 0;
    },
    snapshot() {
      return { ...state };
    }
  };
})();
