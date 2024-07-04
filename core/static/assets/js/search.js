/*
遵循 CC 4.0 BY-SA 版权协议，参考链接：https://blog.csdn.net/qq_44273429/article/details/134439964
*/

const searchInput = document.getElementById('searchInput');
const searchResultsContainer = document.querySelector('.searchResults');

searchInput.addEventListener('input', function () {
   const searchKeyword = this.value.toLowerCase();

   // 清空之前的搜索结果
   searchResultsContainer.innerHTML = '';

   if (searchKeyword.trim() === '') {
       // 如果搜索关键字为空，隐藏弹窗并返回
       searchResultsContainer.style.display = 'none';
       return;
   }

   fetch('/static/assets/media/search.xml')
       .then(response => response.text())
       .then(data => {
           const parser = new DOMParser();
           const xmlDoc = parser.parseFromString(data, 'application/xml');
           const links = xmlDoc.querySelectorAll('link');

           let hasResults = false;

           links.forEach(link => {
               const url = link.querySelector('url').textContent.toLowerCase();
               const title = link.querySelector('title').textContent.toLowerCase();
               const name = link.querySelector('name').textContent.toLowerCase();

               if (title.includes(searchKeyword) || url.includes(searchKeyword)) {
                   const li = document.createElement('div');
                   li.className = 'aurl';
                   li.innerHTML = `<a href="${url}" class="nav-item" title="${title}">${name}</a>`;
                   searchResultsContainer.appendChild(li);
                   hasResults = true;
               }
           });

           // 根据搜索结果显示或隐藏弹窗
           searchResultsContainer.style.display = hasResults ? 'block' : 'none';
       })
       .catch(error => console.error('Error fetching XML:', error));
});

// 监听输入框失去焦点事件，隐藏搜索结果弹窗
searchInput.addEventListener('blur', function () {
   // 使用 setTimeout 确保点击搜索结果时能触发链接
   setTimeout(() => {
       searchResultsContainer.style.display = 'none';
   }, 200);
});