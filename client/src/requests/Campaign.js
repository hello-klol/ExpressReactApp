/* global fetch */

export function requestCampaignList () {
  return fetch('http://localhost:3000/api/campaigns')
    .then(response => { return response.json() })
}

export function requestCampaignDetails (campaignId) {
  return fetch(`http://localhost:3000/api/campaigns/${campaignId}`)
    .then(response => { return response.json() })
}
