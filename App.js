import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import QuoteScreen from './screens/quote-screen/'
import AuthorScreen from './screens/author-screen'

const AppNavigator = createStackNavigator(
    {
        QuoteScreen: QuoteScreen,
        AuthorScreen: AuthorScreen,
    },
    {
        initialRouteName: 'QuoteScreen',
    }
)

const AppContainer = createAppContainer(AppNavigator)

const store = createStore(rootReducer)

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        )
    }
}
