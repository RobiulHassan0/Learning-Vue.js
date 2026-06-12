const dataFetch = new MyHTTP();

const listGroup = document.getElementById('list-group');
console.log(listGroup);

// Get Todos
const getUsers = () => {
    dataFetch.get('https://jsonplaceholder.typicode.com/todos')
    .then( (data) => {
        console.log(data);
        let output = '';

        data.forEach( todo => {
            output += `
                <li id="list" class="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-200 hover:shadow-md transition">
                    <input type="checkbox" class="checkbox checkbox-success" checked />
                    <div class="flex-1">
                        <p class="font-medium text-gray-800 line-through">${todo.title}</p>
                        <p class="text-sm text-gray-500">Due: 2026-06-15</p>
                    </div>
                </li>
            `;
        });

        listGroup.innerHTML = output;
    })
    .catch(err => console.log(err))
  
}

getUsers();