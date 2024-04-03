import { expect, test } from 'vitest';
import { render } from '@testing-library/react-native';
import { Text, View } from 'react-native';
import React from 'react';
import '@testing-library/react-native/extend-expect';

describe('Jest matchers', () => {
  test('View, testing styles', async () => {
    const view = render(
      <View
        accessible={true}
        role={'banner'}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>Hello, world!</Text>
      </View>,
    );
    const el = view.getByRole('banner');
    expect(el.props.style).toMatchInlineSnapshot(`
      {
        "alignItems": "center",
        "flex": 1,
        "justifyContent": "center",
      }
    `);

    expect(el).toHaveStyle({
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: 'red',
    });
  });
});
