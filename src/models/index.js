// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { WarehouseItems } = initSchema(schema);

export {
  WarehouseItems
};