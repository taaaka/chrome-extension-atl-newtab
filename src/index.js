const convertLinks = (query = '') => {
  document.querySelectorAll(query).forEach((el) => {
    el.setAttribute('target', '_blank');
  });
};

document.addEventListener('DOMContentLoaded', () => {
  convertLinks('.new');
  console.info('[Atl newtab] convert finished!!');
});
