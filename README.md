# React Native Testing Library with Vitest Examples

This repository provides examples of testing React Native components using Vitest and the React Native Testing Library. The examples demonstrate various testing scenarios and techniques, including:

- Testing text elements using `getByText`.
- Testing button elements and their limitations with `getByText`.
- Using Jest matchers to test styles and roles of components.
- Simulating user events and interactions with components.

## Getting Started

To get started with the project, clone the repository and install the dependencies:

```bash
git clone https://github.com/srsholmes/vitest-react-native-testing-library-demo.git
cd vitest-react-native-testing-library-demo
pnpm install
```

## Running Tests

To run the tests, use the following command:

```bash
pnpm run test
```

## Examples

The examples are located in the `examples` directory. Each file represents a different testing scenario:

- `getByText/index.test.tsx`: Demonstrates how to use `getByText` to test text elements.
- `JestMatchers/index.test.tsx`: Shows how to use Jest matchers to test styles and roles of components.
- `UserEvents/index.test.tsx`: Provides an example of simulating user events and interactions with components.

## Documentation

For more information about the React Native Testing Library, visit the [official documentation](https://callstack.github.io/react-native-testing-library/).
