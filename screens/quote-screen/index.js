import { connect } from 'react-redux'
import { getQuote } from './action'
import QuoteScreen from './view'

const mapStateToProps = state => ({
    quoteState: state.quoteScreen,
})

const mapDispatchToProps = dispatch => ({
    getQuote: () => getQuote(dispatch),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuoteScreen)
