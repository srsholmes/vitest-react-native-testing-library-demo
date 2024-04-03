import React from 'react';
import { expect, test } from 'vitest';

import { render } from '@testing-library/react-native';
import { Button, Text, View } from 'react-native';

// https://callstack.github.io/react-native-testing-library/docs/how-should-i-query#by-role-query

describe('getByRole Passing tests', () => {
  test('View is not accessible by default', () => {
    const view = render(
      <View accessible={true} role="button">
        <Text>Hello, world!</Text>
      </View>,
    );
    expect(view.getByRole('button')).toBeTruthy();
  });

  test('Text is accessible by default', () => {
    const view = render(<Text role="button">Hello, world</Text>);
    expect(view.getByRole('button')).toBeTruthy();
  });

  test('Button is accessible by default', () => {
    const view = render(<Button title={'Button'} />);
    expect(view.getByRole('button')).toBeTruthy();
  });

  test('Button can also pass names', () => {
    const view = render(<Button title={'Tester'} />);
    expect(view.getByRole('button', { name: 'Tester' })).toBeTruthy();
  });
});

describe.skip('getByRole Failing tests', () => {
  test('accessible default for Views', () => {
    const view = render(
      <View role="button">
        <Text>Hello, world!</Text>
      </View>,
    );
    expect(view.getByRole('button')).toBeTruthy();
  });

  test('accessible false for Text', () => {
    const view = render(
      <Text accessible={false} role="button">
        Hello, world
      </Text>,
    );
    expect(view.getByRole('button')).toBeTruthy();
  });
});
