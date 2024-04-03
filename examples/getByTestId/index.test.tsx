import React from 'react';
import { expect, test } from 'vitest';

import { render } from '@testing-library/react-native';
import { Text, View } from 'react-native';

describe('getByTestId', () => {
  test('getByTestId Example', () => {
    const view = render(
      <View testID={'test-id'}>
        <Text>Hello, world!</Text>
      </View>,
    );
    expect(view.getByTestId('test-id')).toBeTruthy();
    expect(view.toJSON()).toMatchInlineSnapshot(`
      <View
        testID="test-id"
      >
        <Text>
          Hello, world!
        </Text>
      </View>
    `);
  });
});

describe('getByTestId hidden', () => {
  test('getByTestId Example', () => {
    const view = render(
      <View style={{ display: 'none' }} testID={'test-id'}>
        <Text>Hello, world!</Text>
      </View>,
    );
    expect(
      // includeHiddenElements is needed in order to select the View.
      view.getByTestId('test-id', { includeHiddenElements: true }),
    ).toBeTruthy();
  });
});
