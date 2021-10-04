import { Config } from '../../types/setup';

const restrictedOperations = {
  server: [
    'customerResetPassword',
    'customerCreatePasswordResetToken',
    'createReview',
    'reviews'
  ],
  anonymous: [
    'createCart',
    'createMyShoppingList'
  ],
  user: [
    'customerSignMeIn',
    'customerSignMeUp'
  ]
};

export function isServerOperation(settings: Config, operationName: string): boolean {
  const operations = [
    ...restrictedOperations.server,
    ...(settings?.serverApi?.operations || [])
  ];

  return operations.includes(operationName);
}

export function isAnonymousOperation(operationName: string): boolean {
  return restrictedOperations.anonymous.includes(operationName);
}

export function isUserOperation(operationName: string): boolean {
  return restrictedOperations.user.includes(operationName);
}
