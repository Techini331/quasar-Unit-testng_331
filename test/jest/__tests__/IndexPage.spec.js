import InputPage from 'src/pages/InputPage.vue'
import { shallowMount } from '@vue/test-utils'

test('should show the form element on the user output', () => {
    const wrapper = shallowMount(InputPage)
    expect(wrapper.find('form').exists()).toBe(true)
  })

  test('should contain input fields in template', () => {
    const wrapper = shallowMount(InputPage)
    expect(wrapper.find('form > input').exists()).toBe(true)
  })

  test('should have button', () => {
    const wrapper = shallowMount(InputPage)
    expect(wrapper.find('button').exists()).toBe(true)
  })
