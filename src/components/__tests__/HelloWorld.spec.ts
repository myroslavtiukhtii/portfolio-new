import { describe, it, expect, test } from 'vitest'

import { mount } from '@vue/test-utils'
import WeatherApi from '../WeatherApi.vue'

describe('WeatherApi', () => {
  it('renders properly', () => {
    const wrapper = mount(WeatherApi, { props: { celcius: '' } })
    expect(wrapper.text()).toContain('')
  })
})

