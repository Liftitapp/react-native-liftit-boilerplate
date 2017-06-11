export default {
  // Functions return fixtures
  getRoot: () => {
    return {
      ok: true,
      data: require('../fixtures/root.json')
    }
  },
  getRate: () => {
    return {
      ok: true,
      data: require('../fixtures/rate_limit.json')
    }
  },
  getUser: (username) => {
    // This fixture only supports gantman or else returns skellock
    const gantmanData = require('../fixtures/gantman.json')
    const skellockData = require('../fixtures/skellock.json')
    return {
      ok: true,
      data: username.toLowerCase() === 'gantman' ? gantmanData : skellockData
    }
  }
}
