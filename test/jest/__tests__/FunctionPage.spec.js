import FunctionPage from 'src/pages/FunctionPage.vue'
import { shallowMount } from '@vue/test-utils'

describe('FunctionPage', () => {
  it('should render correct name', () => {
    const wrapper = shallowMount(FunctionPage)
    let header = wrapper.find('.htmlClass h1')
    expect(header.exists()).toBe(true)
    expect(header.text()).toBe('เตชินี ศรีหาวงษ์.')
  })

  it('check text content to be as defined in variable', () => {
    const wrapper = shallowMount(FunctionPage, {
      data() {
        return {
          title: 'Techini Srihawong.'
        }
      }
    })

    let header = wrapper.find('.htmlClass h1')
    expect(header.text()).toBe('Techini Srihawong.')
  })

  test('should show the form element on the user output', () => {
    const wrapper = shallowMount(FunctionPage)
    expect(wrapper.find('form').exists()).toBe(true)
  })

  test('should contain input fields in template', () => {
    const wrapper = shallowMount(FunctionPage)
    expect(wrapper.find('form > input').exists()).toBe(true)
  })

  test('should have a button', () => {
    const wrapper = shallowMount(FunctionPage)
    expect(wrapper.find('button').exists()).toBe(true)
  })

  test('trigger click event on button for addition', async () => {
    const wrapper = shallowMount(FunctionPage)
    const button = wrapper.find('button')
    await button.trigger('click')
    expect(wrapper.vm.addition(1, 2)).toBe(3)
  })

  test('trigger click event on button for subtraction', async () => {
    const wrapper = shallowMount(FunctionPage)
    const button = wrapper.find('button')
    await button.trigger('click')
    expect(wrapper.vm.subtraction(3, 2)).toBe(1)
  })

  test('trigger click event on button for multiplication', async () => {
    const wrapper = shallowMount(FunctionPage)
    const button = wrapper.find('button')
    await button.trigger('click')
    expect(wrapper.vm.multiplication(1, 2)).toBe(2)
  })

  test('trigger click event on button for division', async () => {
    const wrapper = shallowMount(FunctionPage)
    const button = wrapper.find('button')
    await button.trigger('click')
    expect(wrapper.vm.divide(4, 2)).toBe(2)
  })
})
