const BASE_PATH = "https://botw-compendium.herokuapp.com/api/v2";

export function getCategory(category: string) {
  return fetch(`${BASE_PATH}/category/${category}`).then((response) =>
    response.json()
  );
}
export function getMonsterSearch(search: string) {
  return fetch(`${BASE_PATH}/entry/${search}`).then((response) =>
    response.json()
  );
}
