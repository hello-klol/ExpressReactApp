import { ADD_ARTICLE, CAMPAIGN_EXIT, CLICK_CAMPAIGN } from '../constants/action-types'

import data from '../../../data.json'

const initialState = {
  articles: [],
  data: data
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return { ...state, articles: [...state.articles, action.payload] }
      // return { ...state, articles: state.articles.concat(action.payload) }
      // state.articles.push(action.payload)
      // return state
    case CLICK_CAMPAIGN:
      console.log(`Clicked campaign ${action.payload}`)
      return state
    case CAMPAIGN_EXIT:
      console.log('Exited campaign')
      return state
    default:
      return state
  }
}

export default rootReducer
