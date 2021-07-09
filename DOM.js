// Изменить стиль элемента.
// Получить значения input’ов формы.
// Получить значения атрибутов href, hreflang, rel, target и type указанной ссылки.
// Изменить содержимое элемента. //innerHTML
// Вывести target события при нажатии на элемент.
// Удалить элементы из выпадающего списка при их выборе.

<select id='select'>
  <option>Value 1</option>
  <option>Value 2</option>
  <option>Value 3</option>
  <option>Value 4</option>
  <option>Value 5</option>
</select>


const select = document.querySelector('#select')
const options = Array.from(select.querySelectorAll('option'));
// options.forEach(i => i.addEventListener('click', ()=>{console.log(i)}))
options.forEach(i => i.addEventListener('click', ()=>{i.remove()}))
console.log(options)
