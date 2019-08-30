import Vuex from 'vuex'
import PopupInvitation from '../../src/store/modules/PopupInvitation'
import store from '../../src/store/store'
import { createLocalVue } from '@vue/test-utils'

const localVue = createLocalVue()
localVue.use(PopupInvitation)
let _store
beforeEach(() => {
  _store = new Vuex.Store({ modules: {
    PopupInvitation
  } })
})

describe('store modules wrapper', () => {
  it('should return equal quantity of modules', () => {
    expect(store.modules).toEqual(_store.modules)
  })
})
