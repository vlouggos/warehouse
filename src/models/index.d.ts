import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerWarehouseItems = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<WarehouseItems, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Category?: string | null;
  readonly Description?: string | null;
  readonly Type?: string | null;
  readonly Manufacturer?: string | null;
  readonly Supplier?: string | null;
  readonly MPN?: string | null;
  readonly Warehouse?: string | null;
  readonly LocationInWarehouse?: string | null;
  readonly Quantity?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyWarehouseItems = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<WarehouseItems, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Category?: string | null;
  readonly Description?: string | null;
  readonly Type?: string | null;
  readonly Manufacturer?: string | null;
  readonly Supplier?: string | null;
  readonly MPN?: string | null;
  readonly Warehouse?: string | null;
  readonly LocationInWarehouse?: string | null;
  readonly Quantity?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type WarehouseItems = LazyLoading extends LazyLoadingDisabled ? EagerWarehouseItems : LazyWarehouseItems

export declare const WarehouseItems: (new (init: ModelInit<WarehouseItems>) => WarehouseItems) & {
  copyOf(source: WarehouseItems, mutator: (draft: MutableModel<WarehouseItems>) => MutableModel<WarehouseItems> | void): WarehouseItems;
}