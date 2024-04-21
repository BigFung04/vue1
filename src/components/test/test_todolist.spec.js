import { mount } from '@vue/test-utils';
import todolist_main from '../todolist_view.vue';
import todoInput from '../todoInput.vue';
import todoButton from '../todoButton.vue';
import todolist from '../todoList.vue';

import { describe, it, expect } from 'vitest';

describe('测试添加、删除和清除任务', () => {
  const wrapper = mount(todolist_main);

  it('添加任务', async () => {
    await wrapper.findComponent(todoInput).get('.form-control').setValue("This is a task");

    await wrapper.findComponent(todoInput).get('.btn-primary').trigger('click');

    expect(wrapper.vm.todoList.length).toBe(1);
  });

  it('删除任务', async () => {
    await wrapper.findComponent(todolist).get('.btn-danger').trigger('click');

    
    expect(wrapper.vm.todoList.length).toBe(0);
  });

  it('清除所有任务', async () => {
    await wrapper.findComponent(todoInput).get('.form-control').setValue("Task 1");
    await wrapper.findComponent(todoInput).get('.btn-primary').trigger('click');
    await wrapper.findComponent(todoInput).get('.form-control').setValue("Task 2");
    await wrapper.findComponent(todoInput).get('.btn-primary').trigger('click');

    const deleteButtons = wrapper.findComponent(todolist).findAll('.btn-danger');
    await deleteButtons.forEach(async (button) => {
      await button.trigger('click');
    });

    expect(wrapper.vm.todoList.length).toBe(0);
  });
});
