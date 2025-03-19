export const extactData = (data: any) => {
  let result = data;
  result = JSON.parse(result.data);
  return result;
};
