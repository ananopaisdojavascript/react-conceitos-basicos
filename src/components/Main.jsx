import { Fragment } from 'react';
import '../styles/Tailwind.css';

export default function Main({children}) {
  // const name = "Raphael Gomide"
  // const age = 38
  return (
    <Fragment>
      <main>
        <div className="container mx-auto p-4">
          {/* Interpolação de chaves */}
          {children}
        </div>
      </main>
    </Fragment>
  )
}