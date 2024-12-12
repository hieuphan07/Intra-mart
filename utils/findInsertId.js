/**
 * Assign insert_id to $variable.URL.insert_id
 */
const path = $env.location.path;
let queries;

if (!path.includes("?")) return;
queries = path.split("?")[1];

if (!queries.includes("&")) {
  const insert_id = queries.split("=")[1];
  $variable.URL.insert_id = insert_id;
}

const params = queries.split("&");
params.map((p) => {
  if (p.includes("insert_id")) {
    const insert_id = p.split("=")[1];
    $variable.URL.insert_id = insert_id;
  }
});
