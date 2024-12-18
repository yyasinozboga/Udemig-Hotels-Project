import React, { ChangeEvent, useEffect } from "react";
import { Formik, Form, Field, FormikHelpers } from "formik";
import { sortOptions } from "../../utils/constants";
import Button from "../button";
import { useQuery } from "@tanstack/react-query";
import { getAllHotels } from "../../api";
import { useSearchParams } from "react-router-dom";

type FormikValues = {
  location: string;
  order: string;
  title: string;
};

const Filter = () => {
  const { data } = useQuery({
    queryKey: ["hotels"],
    queryFn: () => getAllHotels(),
  });

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    for (let [key, value] of searchParams.entries()) {
      if (value === "") {
        searchParams.delete(key);
      }
    }
    setSearchParams(searchParams);
  }, []);

  const initialValues: FormikValues = {
    location: "",
    order: "",
    title: "",
  };

  const locations = new Set(data?.map((item) => item.location));

  const handleChange = (e: ChangeEvent<any>) => {
    const key = e.target.name;
    const value = e.target.value;

    if (value !== "" && value !== "Seçiniz") {
      searchParams.set(key, value);
    } else {
      searchParams.delete(key);
    }

    setSearchParams(searchParams);
  };

  const handleResetFilters = (
    resetForm: FormikHelpers<FormikValues>["resetForm"],
  ) => {
    resetForm();
    //! Yeni boş bir URL oluşturuldu
    const newSearchParams = new URLSearchParams();
    //! Varsayılan URL güncellendi
    setSearchParams(newSearchParams);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={() => console.log("Submitted!")}
      >
        {({ values, resetForm }) => (
          <Form className="flex flex-col gap-5 w-full md:w-[250px]">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="location" className="font-medium">
                Konum
              </label>
              <Field
                component="select"
                id="location"
                name="location"
                className="border-[1px] border-gray-150 outline-none rounded-lg p-1"
                value={searchParams.get("location") || values.location}
                onChange={handleChange}
              >
                <option value="Seçiniz">Seçiniz</option>
                {[...locations]?.map((item, key) => (
                  <option key={key} value={item}>
                    {item}
                  </option>
                ))}
              </Field>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label className="font-medium" htmlFor="title">
                Konaklama yeri adına göre ara
              </label>
              <Field
                id="title"
                type="text"
                name="title"
                placeholder="Örn: Seaside Villa"
                className="border-[1px] border-gray-150 outline-none rounded-lg p-1"
                value={searchParams.get("title") || values.title}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="order" className="font-medium">
                Sıralama Ölçütü?
              </label>
              <Field
                component="select"
                id="order"
                name="order"
                className="border-[1px] border-gray-150 outline-none rounded-lg p-1"
                value={searchParams.get("order") || values.order}
                onChange={handleChange}
              >
                {sortOptions.map(({ label, value }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </Field>
            </div>

            <Button
              type="button"
              handleClick={() => handleResetFilters(resetForm)}
              value="Filtreleri Temizle"
              designs="rounded-lg w-[150px] ms-auto"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Filter;
