// import {MAIN_COLLECTION} from "../../constants/constants"


const state = {
  tableContent: [
    [{
      date: '16-05-2002',
      provider: 'Turakurgan',
      productName: 'AI-80',
      qty: '5 000',
      vat: '10 000',
      summ: '1 000 000'
    },
    {
      date: '16-05-2002',
      provider: 'Turakurgan',
      productName: 'AI-80',
      qty: '5 000',
      vat: '10 000',
      summ: '1 000 000'
    }],

    [{
      date: '16-05-2002',
      provider: 'SAVDO',
      productName: 'AI-80',
      qty: '5 000',
      vat: '10 000',
      summ: '1 000 000'
    },
    {
      date: '16-05-2002',
      provider: 'SAVDO',
      productName: 'AI-80',
      qty: '5 000',
      vat: '10 000',
      summ: '1 000 000'
    }]
  ],
}

const mutations = {
  addInvoice(state, payload){
    state.tableContent[payload.id].push(payload)
  }
}

const actions = {
  acceptInvoice({commit}, payload){
    commit('addInvoice', payload)
  }
}


export default {
  state,
  actions,
  mutations
}
