const getData = (url, params) => {
  fetch(`${url}${params.length > 0 ? params : ""}`)
  .then((res) => {
    res.ok ? res.json : throw new Error("Error: " + res.status);
    return res.json();
  });
};

export default getData;
