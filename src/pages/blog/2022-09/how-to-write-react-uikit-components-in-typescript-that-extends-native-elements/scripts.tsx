export const App = `
import {MyButton} from './MyButton';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return  <div class="btn-group m-3">
    <MyButton 
      icon="💩" 
      type="submit"
      onClick={() => window.alert('clicked first')} 
    > CLICK ME </MyButton>

    <MyButton 
      icon="🤗" 
      disabled={true} 
      onClick={() => window.alert('clicked second')} 
    > CLICK ME </MyButton>
  </div>
}

`
export const MyButton = `
import { PropsWithChildren } from 'react';

interface MyButtonProps {
  icon: string;
}
export function MyButton(
  props: PropsWithChildren<MyButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>>
) {
  const { icon, children, ...rest } = props;
  return <button className="btn btn-primary" {...rest}>
    {icon}
    {children}
  </button>
}

`