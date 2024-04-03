import { expect, test } from 'vitest';
import { render, userEvent } from '@testing-library/react-native';
import { Button } from 'react-native';
import React from 'react';

describe('User Events', () => {
  test('userEvent, press with spy', async () => {
    const user = userEvent.setup();
    const spy = vi.fn();
    const view = render(<Button onPress={spy} title={'Some-test-string'} />);
    await user.press(view.getByRole('button', { name: 'Some-test-string' }));
    expect(spy).toHaveBeenCalledOnce();
  });
});
