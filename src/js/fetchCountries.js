import refs from './refs';
import manageSearch from './manageSearch';

const { accessUl } = refs;

export default function fetchCountries(searchQuery) {
  fetch(searchQuery)
    .then(response => response.json())
    .then(data => manageSearch(data))
    .catch(err => alert(err))
    .finally((accessUl.innerHTML = ''));
}
