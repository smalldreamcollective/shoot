export const updateObject = (ogObj:any, updatedProps:any) => {
  return {
    ...ogObj,
    ...updatedProps
  };
};