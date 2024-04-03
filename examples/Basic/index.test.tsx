import React from 'react';
import { expect, test } from 'vitest';
import { render } from '@testing-library/react-native';
import { Text, View } from 'react-native';

test('Basic', () => {
  const view = render(
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Hello, world!</Text>
    </View>,
  );
  expect(view.toJSON()).toMatchInlineSnapshot(`
    <View
      style={
        {
          "alignItems": "center",
          "flex": 1,
          "justifyContent": "center",
        }
      }
    >
      <Text>
        Hello, world!
      </Text>
    </View>
  `);
});
