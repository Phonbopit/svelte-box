export interface Order {
  id: number
  sku: string
  title: string
  description: string
  quantity: number
  price: number
  status: string
}

export const orders: Order[] = [
  {
    id: 1,
    sku: '123',
    title: 'Test',
    description: 'Test',
    quantity: 1,
    price: 100,
    status: 'pending'
  },
  {
    id: 2,
    sku: '456',
    title: 'Test 2',
    description: 'Test 2',
    quantity: 2,
    price: 200,
    status: 'shipped'
  },
  // Add 18 more items here
  {
    id: 3,
    sku: '789',
    title: 'Test 3',
    description: 'Test 3',
    quantity: 1,
    price: 50,
    status: 'pending'
  },
  {
    id: 4,
    sku: '012',
    title: 'Test 4',
    description: 'Test 4',
    quantity: 3,
    price: 150,
    status: 'delivered'
  },
  {
    id: 5,
    sku: '345',
    title: 'Test 5',
    description: 'Test 5',
    quantity: 2,
    price: 100,
    status: 'shipped'
  },
  {
    id: 6,
    sku: '678',
    title: 'Test 6',
    description: 'Test 6',
    quantity: 1,
    price: 75,
    status: 'pending'
  },
  {
    id: 7,
    sku: '901',
    title: 'Test 7',
    description: 'Test 7',
    quantity: 4,
    price: 300,
    status: 'delivered'
  },
  {
    id: 8,
    sku: '234',
    title: 'Test 8',
    description: 'Test 8',
    quantity: 1,
    price: 50,
    status: 'shipped'
  },
  {
    id: 9,
    sku: '567',
    title: 'Test 9',
    description: 'Test 9',
    quantity: 2,
    price: 200,
    status: 'pending'
  },
  {
    id: 10,
    sku: '890',
    title: 'Test 10',
    description: 'Test 10',
    quantity: 1,
    price: 100,
    status: 'delivered'
  },
  {
    id: 11,
    sku: '1234',
    title: 'Test 11',
    description: 'Test 11',
    quantity: 3,
    price: 150,
    status: 'shipped'
  },
  {
    id: 12,
    sku: '5678',
    title: 'Test 12',
    description: 'Test 12',
    quantity: 1,
    price: 75,
    status: 'pending'
  },
  {
    id: 13,
    sku: '9012',
    title: 'Test 13',
    description: 'Test 13',
    quantity: 2,
    price: 200,
    status: 'delivered'
  },
  {
    id: 14,
    sku: '3456',
    title: 'Test 14',
    description: 'Test 14',
    quantity: 1,
    price: 50,
    status: 'shipped'
  },
  {
    id: 15,
    sku: '7890',
    title: 'Test 15',
    description: 'Test 15',
    quantity: 4,
    price: 300,
    status: 'pending'
  },
  {
    id: 16,
    sku: '12345',
    title: 'Test 16',
    description: 'Test 16',
    quantity: 1,
    price: 100,
    status: 'delivered'
  },
  {
    id: 17,
    sku: '67890',
    title: 'Test 17',
    description: 'Test 17',
    quantity: 3,
    price: 150,
    status: 'shipped'
  },
  {
    id: 18,
    sku: '23456',
    title: 'Test 18',
    description: 'Test 18',
    quantity: 1,
    price: 75,
    status: 'pending'
  },
  {
    id: 19,
    sku: '78901',
    title: 'Test 19',
    description: 'Test 19',
    quantity: 2,
    price: 200,
    status: 'delivered'
  },
  {
    id: 20,
    sku: '23456',
    title: 'Test 20',
    description: 'Test 20',
    quantity: 1,
    price: 50,
    status: 'shipped'
  }
]
