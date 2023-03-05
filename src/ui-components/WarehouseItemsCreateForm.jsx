/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { WarehouseItems } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function WarehouseItemsCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Category: "",
    Description: "",
    Type: "",
    Manufacturer: "",
    Supplier: "",
    MPN: "",
    Warehouse: "",
    LocationInWarehouse: "",
    Quantity: "",
  };
  const [Category, setCategory] = React.useState(initialValues.Category);
  const [Description, setDescription] = React.useState(
    initialValues.Description
  );
  const [Type, setType] = React.useState(initialValues.Type);
  const [Manufacturer, setManufacturer] = React.useState(
    initialValues.Manufacturer
  );
  const [Supplier, setSupplier] = React.useState(initialValues.Supplier);
  const [MPN, setMPN] = React.useState(initialValues.MPN);
  const [Warehouse, setWarehouse] = React.useState(initialValues.Warehouse);
  const [LocationInWarehouse, setLocationInWarehouse] = React.useState(
    initialValues.LocationInWarehouse
  );
  const [Quantity, setQuantity] = React.useState(initialValues.Quantity);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCategory(initialValues.Category);
    setDescription(initialValues.Description);
    setType(initialValues.Type);
    setManufacturer(initialValues.Manufacturer);
    setSupplier(initialValues.Supplier);
    setMPN(initialValues.MPN);
    setWarehouse(initialValues.Warehouse);
    setLocationInWarehouse(initialValues.LocationInWarehouse);
    setQuantity(initialValues.Quantity);
    setErrors({});
  };
  const validations = {
    Category: [],
    Description: [],
    Type: [],
    Manufacturer: [],
    Supplier: [],
    MPN: [],
    Warehouse: [],
    LocationInWarehouse: [],
    Quantity: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          Category,
          Description,
          Type,
          Manufacturer,
          Supplier,
          MPN,
          Warehouse,
          LocationInWarehouse,
          Quantity,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new WarehouseItems(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "WarehouseItemsCreateForm")}
      {...rest}
    >
      <TextField
        label="Category"
        isRequired={false}
        isReadOnly={false}
        value={Category}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Category: value,
              Description,
              Type,
              Manufacturer,
              Supplier,
              MPN,
              Warehouse,
              LocationInWarehouse,
              Quantity,
            };
            const result = onChange(modelFields);
            value = result?.Category ?? value;
          }
          if (errors.Category?.hasError) {
            runValidationTasks("Category", value);
          }
          setCategory(value);
        }}
        onBlur={() => runValidationTasks("Category", Category)}
        errorMessage={errors.Category?.errorMessage}
        hasError={errors.Category?.hasError}
        {...getOverrideProps(overrides, "Category")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={Description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Category,
              Description: value,
              Type,
              Manufacturer,
              Supplier,
              MPN,
              Warehouse,
              LocationInWarehouse,
              Quantity,
            };
            const result = onChange(modelFields);
            value = result?.Description ?? value;
          }
          if (errors.Description?.hasError) {
            runValidationTasks("Description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("Description", Description)}
        errorMessage={errors.Description?.errorMessage}
        hasError={errors.Description?.hasError}
        {...getOverrideProps(overrides, "Description")}
      ></TextField>
      <TextField
        label="Type"
        isRequired={false}
        isReadOnly={false}
        value={Type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Category,
              Description,
              Type: value,
              Manufacturer,
              Supplier,
              MPN,
              Warehouse,
              LocationInWarehouse,
              Quantity,
            };
            const result = onChange(modelFields);
            value = result?.Type ?? value;
          }
          if (errors.Type?.hasError) {
            runValidationTasks("Type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("Type", Type)}
        errorMessage={errors.Type?.errorMessage}
        hasError={errors.Type?.hasError}
        {...getOverrideProps(overrides, "Type")}
      ></TextField>
      <TextField
        label="Manufacturer"
        isRequired={false}
        isReadOnly={false}
        value={Manufacturer}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Category,
              Description,
              Type,
              Manufacturer: value,
              Supplier,
              MPN,
              Warehouse,
              LocationInWarehouse,
              Quantity,
            };
            const result = onChange(modelFields);
            value = result?.Manufacturer ?? value;
          }
          if (errors.Manufacturer?.hasError) {
            runValidationTasks("Manufacturer", value);
          }
          setManufacturer(value);
        }}
        onBlur={() => runValidationTasks("Manufacturer", Manufacturer)}
        errorMessage={errors.Manufacturer?.errorMessage}
        hasError={errors.Manufacturer?.hasError}
        {...getOverrideProps(overrides, "Manufacturer")}
      ></TextField>
      <TextField
        label="Supplier"
        isRequired={false}
        isReadOnly={false}
        value={Supplier}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Category,
              Description,
              Type,
              Manufacturer,
              Supplier: value,
              MPN,
              Warehouse,
              LocationInWarehouse,
              Quantity,
            };
            const result = onChange(modelFields);
            value = result?.Supplier ?? value;
          }
          if (errors.Supplier?.hasError) {
            runValidationTasks("Supplier", value);
          }
          setSupplier(value);
        }}
        onBlur={() => runValidationTasks("Supplier", Supplier)}
        errorMessage={errors.Supplier?.errorMessage}
        hasError={errors.Supplier?.hasError}
        {...getOverrideProps(overrides, "Supplier")}
      ></TextField>
      <TextField
        label="Mpn"
        isRequired={false}
        isReadOnly={false}
        value={MPN}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Category,
              Description,
              Type,
              Manufacturer,
              Supplier,
              MPN: value,
              Warehouse,
              LocationInWarehouse,
              Quantity,
            };
            const result = onChange(modelFields);
            value = result?.MPN ?? value;
          }
          if (errors.MPN?.hasError) {
            runValidationTasks("MPN", value);
          }
          setMPN(value);
        }}
        onBlur={() => runValidationTasks("MPN", MPN)}
        errorMessage={errors.MPN?.errorMessage}
        hasError={errors.MPN?.hasError}
        {...getOverrideProps(overrides, "MPN")}
      ></TextField>
      <TextField
        label="Warehouse"
        isRequired={false}
        isReadOnly={false}
        value={Warehouse}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Category,
              Description,
              Type,
              Manufacturer,
              Supplier,
              MPN,
              Warehouse: value,
              LocationInWarehouse,
              Quantity,
            };
            const result = onChange(modelFields);
            value = result?.Warehouse ?? value;
          }
          if (errors.Warehouse?.hasError) {
            runValidationTasks("Warehouse", value);
          }
          setWarehouse(value);
        }}
        onBlur={() => runValidationTasks("Warehouse", Warehouse)}
        errorMessage={errors.Warehouse?.errorMessage}
        hasError={errors.Warehouse?.hasError}
        {...getOverrideProps(overrides, "Warehouse")}
      ></TextField>
      <TextField
        label="Location in warehouse"
        isRequired={false}
        isReadOnly={false}
        value={LocationInWarehouse}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Category,
              Description,
              Type,
              Manufacturer,
              Supplier,
              MPN,
              Warehouse,
              LocationInWarehouse: value,
              Quantity,
            };
            const result = onChange(modelFields);
            value = result?.LocationInWarehouse ?? value;
          }
          if (errors.LocationInWarehouse?.hasError) {
            runValidationTasks("LocationInWarehouse", value);
          }
          setLocationInWarehouse(value);
        }}
        onBlur={() =>
          runValidationTasks("LocationInWarehouse", LocationInWarehouse)
        }
        errorMessage={errors.LocationInWarehouse?.errorMessage}
        hasError={errors.LocationInWarehouse?.hasError}
        {...getOverrideProps(overrides, "LocationInWarehouse")}
      ></TextField>
      <TextField
        label="Quantity"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Quantity}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              Category,
              Description,
              Type,
              Manufacturer,
              Supplier,
              MPN,
              Warehouse,
              LocationInWarehouse,
              Quantity: value,
            };
            const result = onChange(modelFields);
            value = result?.Quantity ?? value;
          }
          if (errors.Quantity?.hasError) {
            runValidationTasks("Quantity", value);
          }
          setQuantity(value);
        }}
        onBlur={() => runValidationTasks("Quantity", Quantity)}
        errorMessage={errors.Quantity?.errorMessage}
        hasError={errors.Quantity?.hasError}
        {...getOverrideProps(overrides, "Quantity")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
