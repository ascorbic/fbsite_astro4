import cn from 'clsx';
import React  from 'react';
import css from './ProgressBarChecked.module.css';

export const ProgressBarChecked: React.VFC<{ pending: boolean, completed: boolean}> = (props) => {
  return (
      <div className={cn(css.circleLoader,  { [css.loadComplete]: props.completed})} >
        <div
          className={cn(css.draw, css.checkmark)}
          style={{ display: props.completed ? 'block' : 'none'}}
        />
      </div>
  )
};
