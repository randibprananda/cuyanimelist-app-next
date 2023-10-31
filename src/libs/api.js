export const getAnimeResponse = async (resource, query) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);
  const anime = await response.json();

  return anime;
};

export const getNestedAnimeResponse = async (resourece, objectProperty) => {
  const response = await getAnimeResponse(resourece);

  return response.data.flatMap((item) => item[objectProperty]);
};
