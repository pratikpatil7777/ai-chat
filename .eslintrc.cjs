module.exports = {
  root: true,
  extends: ['next', 'next/core-web-vitals', 'plugin:react/recommended', 'plugin:jsx-a11y/recommended', 'plugin:testing-library/react', 'plugin:jest-dom/recommended', 'prettier'],
  plugins: ['react', 'jsx-a11y', 'testing-library', 'jest-dom', 'accessibility'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'accessibility/use-button-type': 'warn'
  },
  overrides: [
    {
      files: ['**/*.test.{js,jsx}', '**/*.spec.{js,jsx}'],
      env: {
        jest: true
      }
    }
  ]
};
