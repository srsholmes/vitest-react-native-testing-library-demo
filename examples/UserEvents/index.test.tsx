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
    expect(spy.mock.calls[0][0]).toMatchInlineSnapshot(`
      {
        "currentTarget": {
          "measure": [Function],
        },
        "dispatchConfig": {
          "registrationName": "onResponderRelease",
        },
        "nativeEvent": {
          "changedTouches": [],
          "identifier": 0,
          "locationX": 0,
          "locationY": 0,
          "pageX": 0,
          "pageY": 0,
          "target": 0,
          "timestamp": 1712144929175,
          "touches": [],
        },
        "persist": [Function],
        "target": {},
      }
    `);
  });
});
