import { connect } from 'react-redux'

// Components ==================================================================
import LaunchPanel from './../components/launch_panel'

const mapStateToProps = state => ({
  text: 'text_from_container'
})

export default connect(mapStateToProps)(
  LaunchPanel
)
