import { notice } from '@pnotify/core';
import refs from './refs';
import handleArray from './handleArray';
import generateSingle from './generateSingle';

const { accessUl, singleItem } = refs;

export default function fetchCountries(searchQuery) {
  fetch(searchQuery)
    .then(response => response.json())
    .then(data => {
      if (data.length !== 1) {
        if (data.length < 11) {
          handleArray(data);
        } else if (data.status > 200) {
          const notFound = notice({
            text: "The country wasn't found.",
          });
          notFound;
        } else {
          console.log(data);
          const manyMatches = notice({
            text: 'Too many matches found! Please enter a more specific query.',
          });
          manyMatches;
        }
      } else {
        let result = generateSingle(data);

        singleItem.insertAdjacentHTML('beforeend', result);
      }
    })
    .catch(err => alert(err))
    .finally((accessUl.innerHTML = ''));
}
