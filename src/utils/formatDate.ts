export const formatDate = (date: string | undefined): Date | null => {
  if (!date) {
    return null;
  }
  let [M, D, Y]: string[] | number[] = date.split('/');
  M = parseInt(M) - 1;
  D = parseInt(D);
  Y = parseInt(Y);

  return new Date(Y, M, D);
};
