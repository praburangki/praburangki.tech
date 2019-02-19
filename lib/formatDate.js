const months = 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split(
  '_'
);

export const formatDate = postDate => {
  const date = new Date(postDate);
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
};
