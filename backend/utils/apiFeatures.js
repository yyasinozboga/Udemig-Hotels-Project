class APIFeatures {
  constructor(query, params, formattedParams) {
    this.query = query;
    this.params = params;
    this.formattedParams = formattedParams;
  }

  filter() {
    this.query = this.query.find(this.formattedParams);

    if (this.params.title) {
      this.query = this.query.find({
        name: { $regex: this.params.title, $options: "i" },
      });
    }

    return this;
  }

  sort() {
    if (this.params.order) {
      if (this.params.order.includes("price")) {
        if (this.params.order.includes("desc")) {
          this.query.sort({ price_per_night: -1 });
        } else {
          this.query.sort({ price_per_night: 1 });
        }
      } else {
        if (this.params.order.includes("desc")) {
          this.query.sort({ rating: -1 });
        } else {
          this.query.sort({ rating: 1 });
        }
      }
    } else {
      this.query.sort("-createdAt");
    }

    return this;
  }

  limit() {
    const fields =
      "name, location, amenities, rating, price_per_night, availability, image_url";
    this.query.select(fields.replaceAll(",", " "));

    return this;
  }
}

export default APIFeatures;
