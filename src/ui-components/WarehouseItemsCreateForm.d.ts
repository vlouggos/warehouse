/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type WarehouseItemsCreateFormInputValues = {
    Category?: string;
    Description?: string;
    Type?: string;
    Manufacturer?: string;
    Supplier?: string;
    MPN?: string;
    Warehouse?: string;
    LocationInWarehouse?: string;
    Quantity?: number;
};
export declare type WarehouseItemsCreateFormValidationValues = {
    Category?: ValidationFunction<string>;
    Description?: ValidationFunction<string>;
    Type?: ValidationFunction<string>;
    Manufacturer?: ValidationFunction<string>;
    Supplier?: ValidationFunction<string>;
    MPN?: ValidationFunction<string>;
    Warehouse?: ValidationFunction<string>;
    LocationInWarehouse?: ValidationFunction<string>;
    Quantity?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WarehouseItemsCreateFormOverridesProps = {
    WarehouseItemsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Category?: PrimitiveOverrideProps<TextFieldProps>;
    Description?: PrimitiveOverrideProps<TextFieldProps>;
    Type?: PrimitiveOverrideProps<TextFieldProps>;
    Manufacturer?: PrimitiveOverrideProps<TextFieldProps>;
    Supplier?: PrimitiveOverrideProps<TextFieldProps>;
    MPN?: PrimitiveOverrideProps<TextFieldProps>;
    Warehouse?: PrimitiveOverrideProps<TextFieldProps>;
    LocationInWarehouse?: PrimitiveOverrideProps<TextFieldProps>;
    Quantity?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type WarehouseItemsCreateFormProps = React.PropsWithChildren<{
    overrides?: WarehouseItemsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: WarehouseItemsCreateFormInputValues) => WarehouseItemsCreateFormInputValues;
    onSuccess?: (fields: WarehouseItemsCreateFormInputValues) => void;
    onError?: (fields: WarehouseItemsCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: WarehouseItemsCreateFormInputValues) => WarehouseItemsCreateFormInputValues;
    onValidate?: WarehouseItemsCreateFormValidationValues;
} & React.CSSProperties>;
export default function WarehouseItemsCreateForm(props: WarehouseItemsCreateFormProps): React.ReactElement;
