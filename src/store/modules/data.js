
const state = {
    nepalData: [],
    worldData: []
}

const getters = {
    getNepalData(state) {
        return state.nepalData;
    },
    
    getWroldData(state){
        return state.worldData;
    }
};

const actions = {

};


const mutations = {
    setNepalData(state,data) {
        state.nepalData = data;
    },

    setWroldData(state,data) {
        state.worldData = data;
    }
}