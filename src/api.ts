const BASE_PATH = "https://botw-compendium.herokuapp.com/api/v2";

export function getMonster() {
  return fetch(`${BASE_PATH}/category/monsters`).then((response) =>
    response.json()
  );
}
