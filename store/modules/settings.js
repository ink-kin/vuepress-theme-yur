const state = {
    curtain: true,
    consoleTime: 0,
};

const mutations = {
    CHANGE_SETTING: (state, { key, value }) => {
        if (state.hasOwnProperty(key)) {
            state[key] = value;
        }
    },
};

const actions = {
    changeSetting({ commit }, data) {
        commit('CHANGE_SETTING', data);
    },
};

export default {
    state,
    mutations,
    actions,
};