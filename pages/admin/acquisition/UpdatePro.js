import React from "react";
import Router from "next/router";
import { Formik, Form, Field } from "formik";
import { GetOneProvider } from "../../../graphql/queries/acquisition/provider";
import { UpdateProvider } from "../../../graphql/mutations/acquisition/provider";
import { useMutation, useQuery } from "@apollo/react-hooks";
import * as Yup from "yup";

const phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

const UpdatePro = () => {
  const [updateProvider] = useMutation(UpdateProvider, {
    onError: (error) => {
      alert(error.message);
    },
  });
  const { loading, error, data } = useQuery(GetOneProvider, {
    variables: { id: Router.query.id },
  });
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div className="container">
      <Formik
        //initial input values
        initialValues={{
          establishement: data.getoneprovider.establishement,
          name: data.getoneprovider.name,
          account: data.getoneprovider.account,
          adress: data.getoneprovider.adress,
          phone: data.getoneprovider.phone,
          email: data.getoneprovider.email,
          website: data.getoneprovider.website,
        }}
        //rules validations
        validationSchema={Yup.object().shape({
          establishement: Yup.string().required("establishement is required"),
          name: Yup.string().required("name is required"),
          account: Yup.string().required("account is required"),
          adress: Yup.string().required("adress is required"),
          phone: Yup.string()
            .matches(phoneRegExp, "Phone number is not valid")
            .required("phone is required"),
          email: Yup.string()
            .email("must be a valid email adress")
            .required("email is required"),
          website: Yup.string().url("must be a url"),
        })}
        //submit function
        onSubmit={(values, actions) => {
          updateProvider({
            variables: {
              _id: Router.query.id,
              name: values.name,
              establishement: values.establishement,
              account: values.account,
              adress: values.adress,
              phone: values.phone,
              email: values.email,
              website: values.website,
            },
          });

          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
          alert("Provider updated succesfully");
          Router.push("/admin/acquisition/AllProviders");
        }}
        render={({ errors, touched }) => (
          //form to update
          <Form>
            <div className="form-group">
              <legend>Update Provider</legend>
              <label htmlFor="establishement">Establishement</label>
              {touched.establishement && errors.establishement && (
                <p className="alert alert-danger">{errors.establishement}</p>
              )}
              <Field
                type="text"
                name="establishement"
                placeholder="Enter an establishement"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              {touched.name && errors.name && (
                <p className="alert alert-danger">{errors.name}</p>
              )}
              <Field
                type="text"
                name="name"
                placeholder="Enter Name"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="account">Account</label>
              {touched.account && errors.account && (
                <p className="alert alert-danger">{errors.account}</p>
              )}
              <Field
                type="text"
                name="account"
                placeholder="Enter an account"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="adress">Adress</label>
              {touched.adress && errors.adress && (
                <p className="alert alert-danger">{errors.adress}</p>
              )}
              <Field
                type="text"
                name="adress"
                placeholder="Enter en adress"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">phone</label>
              {touched.phone && errors.phone && (
                <p className="alert alert-danger">{errors.phone}</p>
              )}
              <Field
                type="text"
                name="phone"
                placeholder="0670102010 or +212670102010 or (212)670102010"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">email</label>
              {touched.email && errors.email && (
                <p className="alert alert-danger">{errors.email}</p>
              )}
              <Field
                type="text"
                name="email"
                placeholder="you@yourdomain.com"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="website">website</label>
              {touched.website && errors.website && (
                <p className="alert alert-danger">{errors.website}</p>
              )}
              <Field
                type="text"
                name="website"
                placeholder="Http://website"
                className="form-control"
              />
            </div>

            <button className="submitButton" type="submit" name="action">
              Submit
            </button>
          </Form>
          //end of form
        )}
      />
      {/*end of GetOneProvider query*/}
      <style jsx>
        {`
       .paper {
        display: flex;
        // margin-top: 64px;
        align-items: center;
        flex-direction: column;
      },
      .form {
        display: center;
        width: 80%;
        margin-top: 8px;
        margin-:4px;
      },
        `}
      </style>
    </div>
  );
};

export default UpdatePro;
