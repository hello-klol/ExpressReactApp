/* global fetch */

const apiUrl = process.env.API_URL

export function requestCampaignList () {
  return fetch(apiUrl + '/campaigns')
    .then(response => { return response.json() })
}

export function requestCampaignDetails (campaignId) {
  return fetch(apiUrl + `/campaigns/${campaignId}`)
    .then(response => { return response.json() })
}
