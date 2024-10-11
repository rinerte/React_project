import { configureStore } from '@reduxjs/toolkit'
// import your reducers here

const dummyReducer = (state = {}, action) => {
    switch (action.type) {
      default:
        return state
    }
  }

const store = configureStore({
  reducer: {
    dummy: dummyReducer,
    // Add other reducers here when available
  },
})

export default store
