import axios from 'axios';

const state = {
    nepalData: [],
    worldData: []
};

const getters = {
    getNepalData: (state) => {
        return state.nepalData;
    },
    
    getWorldData(state){
        return state.worldData;
    }
};

const actions = {
    
    async fetchNepalData(context) {
        
        const response = await axios.get('https://nepalcorona.info/api/v1/data/nepal');
        context.commit('setNepalData', response.data);
    },

    async fetchWorldData(context) {
        const response = await axios.get('https://nepalcorona.info/api/v1/data/world');
        context.commit('setWorldData', response.data);
    }
};


const mutations = {
    setNepalData(state,data) {
        state.nepalData = data;
    },

    setWorldData(state,data) {
        state.worldData = data;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}