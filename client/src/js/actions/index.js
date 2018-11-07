import { ADD_ARTICLE, CAMPAIGN_EXIT, CLICK_CAMPAIGN } from '../constants/action-types'

export const addArticle = article => ({ type: ADD_ARTICLE, payload: article })

export const campaignListClick = campaignId => ({ type: CLICK_CAMPAIGN, payload: campaignId })
export const campaignDetailExit = campaignId => ({ type: CAMPAIGN_EXIT, payload: campaignId })