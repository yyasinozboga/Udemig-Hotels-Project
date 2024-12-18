const getBgColorByRating = (rating: number) => {
  if (rating >= 4.7) return "bg-blue-500";
  if (rating >= 4) return "bg-green-500";
  if (rating >= 3 && rating < 4) return "bg-yellow-500";

  return "bg-red-500";
};

const getTextByRating = (rating: number) => {
  if (rating >= 4.7) return "Olağanüstü";
  if (rating >= 4) return "Güzel";
  if (rating >= 3 && rating < 4) return "İyi";
  if (rating >= 2 && rating < 3) return "Kötü";

  return "Çok Kötü";
};

export { getBgColorByRating, getTextByRating };
