import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: 'https://i.ytimg.com/vi/KipbyxoMrCw/maxresdefault.jpg',
        id: 'hahaha123',
        title: 'Meetup with Barbatos',
        date: '2017-07-19'
      },
      {
        imageUrl: 'https://i.ytimg.com/vi/NMIwFi9oXr4/maxresdefault.jpg',
        id: 'hahaha1234',
        title: 'Meetup with Zenden',
        date: '2017-07-19'
      }
    ],
    user: {
      id: 'hahaha1232',
      registeredMeetups: ['hahaha123']
    }
  },
  mutations: {},
  actions: {},
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
