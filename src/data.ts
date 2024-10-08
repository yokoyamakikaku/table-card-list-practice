import { Row } from './types';

export const rows: Row[] = [
  {
    id: '0665fb41-0ff6-46a0-9a83-36ed4a257e8f',
    parent: null,
    number: 1,
    category: '家具',
    name: '椅子',
    quantity: '1脚',
    price: '4000',
    registeredAt: '2021-10-01T00:00:00.000Z',
  },
  {
    id: '7665fb41-0ff6-46a0-9a83-36ed4a257e8f',
    parent: null,
    number: 2,
    category: '家電',
    name: 'テレビ',
    quantity: '1台',
    price: '30000',
    registeredAt: '2021-11-01T00:00:00.000Z',
  },
  {
    id: '8665fb41-0ff6-46a0-9a83-36ed4a257e8f',
    parent: null,
    number: 3,
    category: '家具',
    name: 'テーブル',
    quantity: '1台',
    price: '15000',
    registeredAt: '2021-12-01T00:00:00.000Z',
  },
]

export const hasParentRows: Row[] = [
  {
    id: '0665fb41-0ff6-46a0-9a83-36ed4a257e8f',
    parent: null,
    number: 1,
    category: '家具',
    name: '椅子',
    quantity: '1脚',
    price: '4000',
    registeredAt: '2021-10-01T00:00:00.000Z',
  },
  {
    id: '7665fb41-0ff6-46a0-9a83-36ed4a257e8f',
    parent: null,
    number: 2,
    category: '家電',
    name: 'テレビ',
    quantity: '1台',
    price: '30000',
    registeredAt: '2021-11-01T00:00:00.000Z',
  },
  {
    id: '8665fb41-0ff6-46a0-9a83-36ed4a257e8f',
    parent: '7665fb41-0ff6-46a0-9a83-36ed4a257e8f',
    number: 3,
    category: '家具',
    name: 'テーブル',
    quantity: '1台',
    price: '15000',
    registeredAt: '2021-12-01T00:00:00.000Z',
  },
  {
    id: '9665fb41-0ff6-46a0-9a83-36ed4a257e8f',
    parent: null,
    number: 4,
    category: 'インテリア',
    name: 'カーテン',
    quantity: '2枚',
    price: '5000',
    registeredAt: '2022-01-01T00:00:00.000Z',
  },
  {
    id: 'a665fb41-0ff6-46a0-9a83-36ed4a257e8f',
    parent: null,
    number: 5,
    category: 'キッチン用品',
    name: 'フライパン',
    quantity: '1個',
    price: '2000',
    registeredAt: '2022-02-01T00:00:00.000Z',
  },
  {
    id: 'b665fb41-0ff6-46a0-9a83-36ed4a257e8f',
    parent: '7665fb41-0ff6-46a0-9a83-36ed4a257e8f',
    number: 6,
    category: '家具',
    name: 'ベッド',
    quantity: '1台',
    price: '40000',
    registeredAt: '2022-03-01T00:00:00.000Z',
  },
  {
    id: 'c665fb41-0ff6-46a0-9a83-36ed4a257e8f',
    parent: 'd665fb41-0ff6-46a0-9a83-36ed4a257e8f',
    number: 7,
    category: '家電',
    name: '冷蔵庫',
    quantity: '1台',
    price: '50000',
    registeredAt: '2022-04-01T00:00:00.000Z',
  },
  {
    id: 'd665fb41-0ff6-46a0-9a83-36ed4a257e8f',
    parent: null,
    number: 8,
    category: 'インテリア',
    name: 'ラグ',
    quantity: '1枚',
    price: '8000',
    registeredAt: '2022-05-01T00:00:00.000Z',
  },
  {
    id: 'e665fb41-0ff6-46a0-9a83-36ed4a257e8f',
    parent: 'd665fb41-0ff6-46a0-9a83-36ed4a257e8f',
    number: 9,
    category: 'キッチン用品',
    name: '包丁',
    quantity: '1本',
    price: '3000',
    registeredAt: '2022-06-01T00:00:00.000Z',
  },
  {
    id: 'f665fb41-0ff6-46a0-9a83-36ed4a257e8f',
    parent: '7665fb41-0ff6-46a0-9a83-36ed4a257e8f',
    number: 10,
    category: '家具',
    name: 'ソファ',
    quantity: '1台',
    price: '25000',
    registeredAt: '2022-07-01T00:00:00.000Z',
  },
];
