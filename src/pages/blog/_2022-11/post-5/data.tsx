export const indexCSS = `
/*@tailwind base;
@tailwind components;
@tailwind utilities;*/
/*@import url('https://cdn.tailwindcss.com');*/

h1 { color: red }
`
export const tailwindConfig = `
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
`
export const postcssConfig = `
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}`

export const appSimpleCode = `import Panel from './Panel';
export default function App() {
  return <div>
    Hello React TS 
    <Panel />
    <Panel />
  </div>
}`;

export const appCode = `
import 'bootstrap/dist/css/bootstrap.min.css';
import Panel from './Panel';

export default function App() {
  return <div>
    <h1>Hello React TS</h1> 
    <Panel />
  </div>
}`;


export const panelCode = `
export default function App() {
  return <div className="card">
    <div className="card-header">Hello Panel</div>
    <div className="card-body">lorem ipsum...</div>
  </div>
}`;

export const extendedTest = `import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Panel from './Panel.tsx';

test('render text', () => {
  render(<Panel />);
  // expect(screen.getByText('Hello Panel')).toBeInTheDocument();
});

`;
