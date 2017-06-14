export default {
  // Functions return fixtures
  getRoot: () => {
    return {
      ok: true,
      data: require('app/fixtures/root.json')
    }
  },
  getRate: () => {
    return {
      ok: true,
      data: require('app/fixtures/rate_limit.json')
    }
  },
  getUser: (username) => {
    // This fixture only supports gantman or else returns skellock
    const gantmanData = require('app/fixtures/gantman.json')
    const skellockData = require('app/fixtures/skellock.json')
    return {
      ok: true,
      data: username.toLowerCase() === 'gantman' ? gantmanData : skellockData
    }
  }
}
