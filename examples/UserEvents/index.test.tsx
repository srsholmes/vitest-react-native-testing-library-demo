import { expect, test } from 'vitest';
import { render, userEvent } from '@testing-library/react-native';
import { Button, View } from 'react-native';
import React from 'react';

describe('User Events', () => {
  test('userEvent, press with spy', async () => {
    const user = userEvent.setup();
    const spy = vi.fn();
    const view = render(
      <View>
        <Button onPress={spy} title={'Some-test-string'} />
        <Button onPress={spy} title={'Some-test-string-2'} />
      </View>,
    );
    await user.press(view.getByRole('button', { name: 'Some-test-string' }));
    expect(spy).toHaveBeenCalledOnce();
  });
});
