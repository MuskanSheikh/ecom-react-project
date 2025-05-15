import React, { useState, useEffect } from 'react'
import Navbar from '../Component/Navbar/Navbar'
import { productSchemas } from '../schemas';
import { productCreate, categoryList } from '../services/user-services';
import TextInput from '../Component/Input/TextInput';
import TextAreaInput from '../Component/Input/TextAreaInput';
import SelectInput from '../Component/Input/SelectInput';
import { useFormik } from 'formik';
import '../css/Background.css';
import ImageInput from '../Component/Input/ImageInput';

const initialValues = {
  productName: "",
  categoryId: "",
  description: "",
  quantity:"",
  oldPrice: "",
  newPrice: "",
  image: null
};

function CreateProduct() {

  const [category, setcategory] = useState([]);

  useEffect(() => {
    categoryList().then((data) => {
      console.log("categoryList=>", data);
      setcategory(data);
    }).catch((error) => {
      console.log("Error fetching category => ", error);
    });
  }, []);



  const { values, handleSubmit, errors, touched, handleChange, handleBlur, isSubmitting, setFieldValue, resetForm } = useFormik({
    initialValues: initialValues,
    validationSchema: productSchemas,
    onSubmit: (values, actions) => {
      console.log("product created values:", values);

      const formData = new FormData();

      formData.append(
        'product',
        new Blob([JSON.stringify({
          productName: values.productName,
          description: values.description,
          oldPrice: values.oldPrice,
          newPrice: values.newPrice,
          categoryId: values.categoryId
        })], { type: 'application/json' })
      );

      if (values.image) {
        formData.append('image', values.image);
      }

      productCreate(formData).then((resp) => {
        console.log("value->", resp);
        alert("Product created successfully!");
        resetForm();
      }).catch((error) => {
        alert("Product creation failed");
        console.error(error);
      });

      actions.setSubmitting(true);
    }
  });

  return (
    <>
      <section
        className="vh-100 d-flex align-items-center justify-content-center background">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <div className="card shadow-lg border-0 fromcard">
                <div className="card-body p-5">
                  <h3 className="text-center fw-bold mb-4">Create Product</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <TextInput
                        className="form-control"
                        type="text"
                        name="productName"
                        label="Product Name"
                        placeholder="Enter product name"
                        value={values.productName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.productName}
                        touched={touched.productName}
                      />
                    </div>
                    <div className="mb-3">
                      <TextAreaInput
                        name="description"
                        label="Product Description"
                        placeholder="Enter product description"
                        value={values.description}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.description}
                        touched={touched.description}
                      />
                    </div>
                    <div className="mb-3">
                      <SelectInput
                        label="Select Category"
                        name="categoryId"
                        value={values.categoryId}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.categoryId}
                        touched={touched.categoryId}
                        options={[
                          { label: "-- Select Category --", value: "" },
                          ...category?.map((cat) => ({
                            label: cat.categoryName,
                            value: cat.categoryId
                          }))
                        ]}
                      />
                    </div>
                    <TextInput
                    className="form-control"
                      type="number"
                      name="quantity"
                      label="Quantity"
                      placeholder="Enter product quantity"
                      value={values.quantity}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.quantity}
                      touched={touched.quantity}
                    />
                    <TextInput
                    className="form-control"
                      type="number"
                      name="oldPrice"
                      label="Old Price"
                      placeholder="Enter old product price"
                      value={values.oldPrice}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.oldPrice}
                      touched={touched.oldPrice}
                    />
                    <TextInput
                    className="form-control"
                      type="number"
                      name="newPrice"
                      label="New Price"
                      placeholder="Enter new product price"
                      value={values.newPrice}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.newPrice}
                      touched={touched.newPrice}
                    />
                    <div className="form-group mb-3">
                      <ImageInput
                        name="image"
                        label="Product Image"
                        onChange={(event) => {
                          setFieldValue("image", event.currentTarget.files[0]);
                        }}
                        onBlur={handleBlur}
                        error={errors.image}
                        touched={touched.image}
                      />
                    </div>
                    <div className="d-grid mt-4">
                      <button disabled={isSubmitting} type="submit" className="btn btn-primary btn-mb">
                        Create Product
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CreateProduct