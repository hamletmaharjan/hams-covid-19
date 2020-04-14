import axios from 'axios';

const state = {
    nepalData: [],
    worldData: []
};

const getters = {
    getNepalData: (state) => {
        return state.nepalData;
    },
    
    getWroldData(state){
        return state.worldData;
    }
};

const actions = {
    
    async fetchNepalData(context) {
        
        const response = await axios.get('https://nepalcorona.info/api/v1/data/nepal');
        console.log(response);
        context.commit('setNepalData', response.data);
    }
};


const mutations = {
    setNepalData(state,data) {
        state.nepalData = data;
    },

    setWroldData(state,data) {
        state.worldData = data;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}