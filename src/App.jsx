import React from 'react';
import { Fragment } from 'react';
import './styles/Tailwind.css';

export default function App() {
  return (
    <Fragment>
      <header>
        <div className="bg-gray-100 mx-auto p-4">
          <h1 className="text-center">Projeto Base</h1>
        </div>
      </header>

      <main>
        <div className="container mx-auto p-4">
          <h2>Conteúdo</h2>
        </div>
      </main>
    </Fragment>
  );
}
