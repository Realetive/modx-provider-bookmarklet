# Букмарклет нового репозитория
<img src="https://file.modx.pro/files/b/3/2/b32f7dc4722172f880a9cc644b99731e.png" alt="Добавить репозиторий" height="40">

Всем привет. Я ленив, а лень, как известно, — двигатель прогресса. Мне показалось, что добавление нового поставщика в менеджер дополнений MODX достаточно утомителен и его стоит упростить. Да, конечно, есть пакеты типа <a href="http://modx.com/extras/package/sdstore">sdStore</a>, но мне кажется, что моё решение несколько удобнее.
Итак, вашему вниманию представлен <a href="https://ru.wikipedia.org/wiki/Букмарклет">букмарклет</a> устанавливающий любого (по умолчанию — SimpleDream) поставщика в ваш менеджер дополнений (к сожалению, разметка не позволяет обернуть картинку в действующую ссылку, поэтому перетаскивание изображения на панель к привычному добавлению не приведет).

Чтобы добавить букмарклет в вашу панель, создайте новую закладку и добавьте этот код в поле «URL»:
```
javascript:(function(){var jsCode = document.createElement('script');jsCode.setAttribute('src', 'https://rawgit.com/Realetive/modx-provider-bookmarklet/master/bookmarklet.js');document.body.appendChild(jsCode);}());
```
