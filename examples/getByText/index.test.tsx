import React from 'react';
import { expect, test } from 'vitest';

import { render } from '@testing-library/react-native';
import { Button, Text } from 'react-native';

describe('getByText, Passing tests', () => {
  test('getByText Example, only works on Text Elements', () => {
    const res = render(<Text>Hello</Text>);
    expect(res.getByText('Hello')).toBeTruthy();
    expect(res.toJSON()).toMatchInlineSnapshot(`
      <Text>
        Hello
      </Text>
    `);
  });
});

describe('getByText, Failing tests', () => {
  test('getByTest wont work on Buttons', () => {
    const res = render(<Button title={'hello'} />);
    expect(res.getByText('Hello')).toBeTruthy();
  });
});
