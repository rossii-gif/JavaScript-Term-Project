function loadJSON(url, title) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('menuContent');
            let html = `<h2>${title}</h2>`;

            const key = Object.keys(data)[0]; 
            data[key].forEach(dish => {
                html += `
                    <div class="dish">
                        <h3>${dish.Entree || dish.name} - ${dish.Price || '$' + dish.price}</h3>
                        <p>${dish.Description || dish.ingredients}</p>
                        <p><strong>Calories:</strong> ${dish.Calories || dish.calories || 'N/A'}</p>
                    </div>
                `;
            });

            container.innerHTML = html;
        })
        .catch(err => console.error('Error loading JSON:', err));
}

document.getElementById('breakfastBtn').addEventListener('click', () => loadJSON('Breakfast.json', 'Breakfast Menu'));
document.getElementById('lunchBtn').addEventListener('click', () => loadJSON('Lunch.json', 'Lunch Menu'));
document.getElementById('dinnerBtn').addEventListener('click', () => loadJSON('Dinner.json', 'Dinner Menu'));