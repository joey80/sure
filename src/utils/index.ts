const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

const snakeCase = (str: string) => str.split(' ').join('_');

export { capitalize, snakeCase };
