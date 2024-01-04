import { Fragment } from 'react';
import '../styles/Tailwind.css';

export default function Header({children, size}) {
  
  return (
    <Fragment>
      <header>
        <div className={`bg-yellow-200 mx-auto p-4 ${size}`}>
          <h1 className="text-center">{children}</h1>
        </div>
      </header>
    </Fragment>
  )
}