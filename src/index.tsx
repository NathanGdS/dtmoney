import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({

  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Pizzaria',
          type: 'withdraw',
          amount: 20,
          category: 'Food',
          createdAt: new Date('2021-02-12 19:00:00'),
        },
        {
          id: 2,
          title: 'Freelancer',
          type: 'deposit',
          amount: 2000,
          category: 'Developer',
          createdAt: new Date('2021-02-15 17:32:55'),
        },
        {
          id: 3,
          title: 'T-shirt',
          type: 'withdraw',
          amount: 59.99,
          category: 'Clothes',
          createdAt: new Date('2021-02-16 14:15:00'),
        },
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data);
    })
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
