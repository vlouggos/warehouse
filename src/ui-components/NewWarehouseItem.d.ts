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
export declare type NewWarehouseItemInputValues = {
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
export declare type NewWarehouseItemValidationValues = {
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
export declare type NewWarehouseItemOverridesProps = {
    NewWarehouseItemGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type NewWarehouseItemProps = React.PropsWithChildren<{
    overrides?: NewWarehouseItemOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NewWarehouseItemInputValues) => NewWarehouseItemInputValues;
    onSuccess?: (fields: NewWarehouseItemInputValues) => void;
    onError?: (fields: NewWarehouseItemInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: NewWarehouseItemInputValues) => NewWarehouseItemInputValues;
    onValidate?: NewWarehouseItemValidationValues;
} & React.CSSProperties>;
export default function NewWarehouseItem(props: NewWarehouseItemProps): React.ReactElement;
