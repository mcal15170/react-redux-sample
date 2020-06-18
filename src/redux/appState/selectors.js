import { createSelector } from 'reselect'

import { initialState } from './reducer'

const appStateSelector = state => state.appState || initialState

const getDataSelector = () =>
  createSelector(appStateSelector, appState => appState)

const getCounter = () =>
  createSelector(appStateSelector, appState => appState.counter)

export { getDataSelector, getCounter }
