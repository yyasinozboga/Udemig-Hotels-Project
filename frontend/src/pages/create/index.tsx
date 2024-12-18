import React from "react";
import { Formik, Form, Field } from "formik";
import { inputs } from "../../utils/constants";
import Button from "../../components/button";
import { useMutation } from "@tanstack/react-query";
import { createHotel } from "../../api";
import { AddedHotelType, defaultValues } from "../../types";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationKey: ["hotels"],
    mutationFn: (body: AddedHotelType) => createHotel(body),

    onSuccess: () => {
      navigate("/");
    },
  });

  const initialValues: defaultValues = {
    name: "",
    location: "",
    address: "",
    description: "",
    amenities: "",
    rating: "",
    price_per_night: "",
    availability: false,
  };

  const onSubmit = (values: defaultValues) => {
    const newValues = {
      ...values,
      amenities: values.amenities.split(","),
      image_url: "https://picsum.photos/494/494",
    };
    mutate(newValues);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => onSubmit(values)}
      >
        {() => (
          <Form className="flex flex-col gap-5 w-[90vw] md:w-[50vw] mx-auto my-5">
            {inputs.map((item) => (
              <div
                className={`${
                  item.type === "checkbox"
                    ? "flex-row items-center"
                    : "flex-col"
                } flex ${item.type === "checkbox" ? "gap-10" : "gap-2"} w-full`}
              >
                <label className="font-medium" htmlFor="title">
                  {item.label}
                </label>
                <Field
                  id={item.type}
                  type={item.type ? item.type : "text"}
                  name={item.name}
                  placeholder={item.placeholder}
                  className="border-[1px] border-gray-150 outline-none rounded-lg p-1"
                />
              </div>
            ))}

            <Button value="Hotel Ekle" designs="rounded-lg w-[150px] me-auto" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Create;
