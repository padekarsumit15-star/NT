document.addEventListener("DOMContentLoaded", function () {
  const KEYS = {
    USER_GOALS: "nt_user_goals",
    DAILY_LOGS: "nt_daily_logs",
    FOOD_LIB: "nt_food_lib"
  };

  // Exact 67 Nutrition Chart Items
  const defaultFoodLibrary = [
    { name: "Chapati/Roti (1 medium)", calories: 120, protein: 3.5, carbs: 22, fats: 2.5 },
    { name: "Chai (Milk Tea - 150 ml)", calories: 70, protein: 2, carbs: 9, fats: 3 },
    { name: "Bread (1 slice)", calories: 70, protein: 2.5, carbs: 13, fats: 1 },
    { name: "DiSano Chocolate Peanut Butter (32g)", calories: 203, protein: 7.4, carbs: 7.4, fats: 16 },
    { name: "Doodh (Milk - 250 ml)", calories: 150, protein: 8, carbs: 12, fats: 8 },
    { name: "Kela (Banana - 1 medium)", calories: 105, protein: 1.3, carbs: 27, fats: 0.3 },
    { name: "Sukha Meva Mix (Dry Fruits - 1 serving)", calories: 90, protein: 3, carbs: 7, fats: 6 },
    { name: "Shevga Pala Bhaji (Moringa Leaves - 1 katori)", calories: 60, protein: 4, carbs: 8, fats: 1 },
    { name: "Vangi Bhaji (Brinjal - 1 katori)", calories: 70, protein: 2, carbs: 8, fats: 4 },
    { name: "Batata Bhaji (Potato - 1 katori)", calories: 140, protein: 3, carbs: 24, fats: 4 },
    { name: "Hulgyacha Kadhan (Horse Gram - 1 katori)", calories: 140, protein: 10, carbs: 22, fats: 1 },
    { name: "Kala Chana Bhaji (Brown Chickpeas - 1 katori)", calories: 165, protein: 9, carbs: 27, fats: 3 },
    { name: "Tooricha Kadhan (Red Gram/Toor - 1 katori)", calories: 150, protein: 10, carbs: 25, fats: 2 },
    { name: "Moongacha Kadhan (Green Mung - 1 katori)", calories: 130, protein: 9, carbs: 22, fats: 1 },
    { name: "Chawal/Bhat (Rice - 100g cooked)", calories: 130, protein: 2.7, carbs: 28, fats: 0.3 },
    { name: "Dal (1 katori)", calories: 150, protein: 9, carbs: 24, fats: 2 },
    { name: "Amti (1 katori)", calories: 150, protein: 9, carbs: 22, fats: 3 },
    { name: "Anda (Egg - 1 large)", calories: 72, protein: 6.3, carbs: 0.4, fats: 5 },
    { name: "Soyabean Chunks Sabji (30g dry)", calories: 105, protein: 15, carbs: 9, fats: 0.5 },
    { name: "Chicken Curry (1 katori / ~100g)", calories: 190, protein: 27, carbs: 3, fats: 8 },
    { name: "Anda Curry (Egg Curry - 1 katori / 2 eggs)", calories: 190, protein: 13, carbs: 5, fats: 13 },
    { name: "Cauliflower (Phulkobi - 1 katori)", calories: 65, protein: 2.5, carbs: 6, fats: 3 },
    { name: "Kobi Bhaji (Cabbage - 1 katori)", calories: 55, protein: 1.8, carbs: 7, fats: 2 },
    { name: "Bhindi/Bhendi Bhaji (Okra - 1 katori)", calories: 70, protein: 2.5, carbs: 9, fats: 3 },
    { name: "Lauki/Dudhi Bhaji (Bottle Gourd - 1 katori)", calories: 45, protein: 1.5, carbs: 6, fats: 1.5 },
    { name: "Turai/Dodka Bhaji (Ridge Gourd - 1 katori)", calories: 50, protein: 1.8, carbs: 6, fats: 2 },
    { name: "Gilki/Ghosale Bhaji (Sponge Gourd - 1 katori)", calories: 45, protein: 1.5, carbs: 5, fats: 2 },
    { name: "Karela/Karle Bhaji (Bitter Gourd - 1 katori)", calories: 55, protein: 2, carbs: 6, fats: 3 },
    { name: "Bhopla Bhaji (Pumpkin - 1 katori)", calories: 60, protein: 1.5, carbs: 10, fats: 2 },
    { name: "Tondli Bhaji (Ivy Gourd - 1 katori)", calories: 55, protein: 2, carbs: 6, fats: 2.5 },
    { name: "Gawar Bhaji (Cluster Beans - 1 katori)", calories: 65, protein: 3, carbs: 8, fats: 2 },
    { name: "French Beans Bhaji (1 katori)", calories: 60, protein: 2.5, carbs: 8, fats: 2 },
    { name: "Matar Bhaji (Green Peas - 1 katori)", calories: 90, protein: 5, carbs: 14, fats: 2 },
    { name: "Shimla Mirch/Dhobli Mirchi (Capsicum - 1 katori)", calories: 40, protein: 1.2, carbs: 6, fats: 1.5 },
    { name: "Palak Bhaji (Spinach - 1 katori)", calories: 55, protein: 4, carbs: 5, fats: 2.5 },
    { name: "Methi Bhaji (Fenugreek Leaves - 1 katori)", calories: 55, protein: 4, carbs: 6, fats: 2 },
    { name: "Chaulai/Math Bhaji (Amaranth Leaves - 1 katori)", calories: 50, protein: 3.5, carbs: 6, fats: 1.5 },
    { name: "Shevga Shenga (Drumstick Pods - 1 katori)", calories: 65, protein: 3, carbs: 10, fats: 1.5 },
    { name: "Mooli/Mula Bhaji (Radish - 1 katori)", calories: 40, protein: 1.5, carbs: 6, fats: 1.5 },
    { name: "Gajar (Carrot - 1 medium)", calories: 25, protein: 0.6, carbs: 6, fats: 0.1 },
    { name: "Beet (Beetroot - 1 medium)", calories: 35, protein: 1.3, carbs: 8, fats: 0.1 },
    { name: "Kakdi (Cucumber - 1 medium)", calories: 45, protein: 2, carbs: 11, fats: 0.3 },
    { name: "Tamatar (Tomato - 1 medium)", calories: 22, protein: 1, carbs: 5, fats: 0.2 },
    { name: "Pyaz/Kanda (Onion - 1 medium)", calories: 44, protein: 1.2, carbs: 10, fats: 0.1 },
    { name: "Mix Veg Bhaji (1 katori)", calories: 90, protein: 3, carbs: 12, fats: 3 },
    { name: "Kabuli Chana (Chickpeas - 1 katori)", calories: 165, protein: 9, carbs: 27, fats: 3 },
    { name: "Rajma (Kidney Beans - 1 katori)", calories: 160, protein: 10, carbs: 27, fats: 1 },
    { name: "Urad Dal (1 katori)", calories: 150, protein: 10, carbs: 25, fats: 1.5 },
    { name: "Masoor Dal (1 katori)", calories: 145, protein: 10, carbs: 24, fats: 1 },
    { name: "Chana Dal (1 katori)", calories: 165, protein: 10, carbs: 27, fats: 3 },
    { name: "Mixed Sprouts/Usal (1 katori)", calories: 120, protein: 8, carbs: 18, fats: 2 },
    { name: "Machhi Curry (Fish Curry - 1 katori)", calories: 170, protein: 20, carbs: 4, fats: 8 },
    { name: "Mutton Rassa (Mutton Curry - 1 katori)", calories: 250, protein: 20, carbs: 4, fats: 17 },
    { name: "Omelette (2 eggs)", calories: 155, protein: 12, carbs: 1, fats: 12 },
    { name: "Idli (2 pieces)", calories: 78, protein: 2.4, carbs: 16, fats: 0.3 },
    { name: "Dosa (1 medium)", calories: 130, protein: 3, carbs: 20, fats: 3.5 },
    { name: "Uttapam (1 medium)", calories: 160, protein: 4, carbs: 25, fats: 4 },
    { name: "Kanda Poha (1 plate)", calories: 250, protein: 5, carbs: 45, fats: 6 },
    { name: "Upma (1 bowl)", calories: 220, protein: 5, carbs: 35, fats: 7 },
    { name: "Sabudana Khichdi (1 bowl)", calories: 250, protein: 3, carbs: 45, fats: 7 },
    { name: "Dahi (Curd - 1 katori)", calories: 100, protein: 5, carbs: 8, fats: 5 },
    { name: "Tak (Buttermilk - 1 glass)", calories: 40, protein: 2, carbs: 4, fats: 1.5 },
    { name: "Paneer (100g)", calories: 265, protein: 18, carbs: 4, fats: 20 },
    { name: "Jowar Bhakri (1 medium)", calories: 130, protein: 3.5, carbs: 25, fats: 1.5 },
    { name: "Bajra Bhakri (1 medium)", calories: 140, protein: 4, carbs: 24, fats: 3 },
    { name: "Paratha (1 medium)", calories: 180, protein: 4, carbs: 25, fats: 7 },
    { name: "Puri (1 piece)", calories: 100, protein: 2, carbs: 10, fats: 6 }
  ];

  let activeDate = new Date().toISOString().split("T")[0];
  let currentAddingMeal = "Breakfast";

  let userGoals = JSON.parse(localStorage.getItem(KEYS.USER_GOALS)) || null;
  let dailyHistory = JSON.parse(localStorage.getItem(KEYS.DAILY_LOGS)) || {};
  
  // Overwrite stored library to ensure fresh 67 list is active
  let foodLibrary = defaultFoodLibrary;
  localStorage.setItem(KEYS.FOOD_LIB, JSON.stringify(foodLibrary));

  const activeDateInput = document.getElementById("active-date");
  if (activeDateInput) {
    activeDateInput.value = activeDate;
    activeDateInput.addEventListener("change", function (e) {
      activeDate = e.target.value;
      refreshAllViews();
    });
  }

  function init() {
    if (!userGoals) {
      const modal = document.getElementById("onboarding-modal");
      if (modal) modal.classList.remove("hidden");
    } else {
      refreshAllViews();
    }
  }

  function getActiveDateData() {
    if (!dailyHistory[activeDate]) {
      dailyHistory[activeDate] = { water: 0, foods: [] };
    }
    return dailyHistory[activeDate];
  }

  function saveDailyHistory() {
    localStorage.setItem(KEYS.DAILY_LOGS, JSON.stringify(dailyHistory));
  }

  // Onboarding Goal Calculation
  const saveOnboardingBtn = document.getElementById("save-onboarding-btn");
  if (saveOnboardingBtn) {
    saveOnboardingBtn.addEventListener("click", function () {
      const nameInput = document.getElementById("init-name");
      const userName = nameInput && nameInput.value.trim() !== "" ? nameInput.value.trim() : "Friend";
      const age = parseFloat(document.getElementById("init-age").value) || 22;
      const gender = document.getElementById("init-gender").value;
      const height = parseFloat(document.getElementById("init-height").value) || 170;
      const weight = parseFloat(document.getElementById("init-weight").value) || 60;
      const activity = parseFloat(document.getElementById("init-activity").value) || 1.55;
      const goalType = document.getElementById("init-goal").value;

      let bmr = (10 * weight) + (6.25 * height) - (5 * age) + (gender === "male" ? 5 : -161);
      let tdee = Math.round(bmr * activity);

      let targetCals = tdee;
      if (goalType === "gain") targetCals += 500;
      if (goalType === "lose") targetCals -= 500;

      userGoals = {
        userName: userName,
        cals: targetCals,
        protein: Math.round(weight * 2),
        carbs: Math.round((targetCals * 0.5) / 4),
        fats: Math.round((targetCals * 0.25) / 9)
      };

      localStorage.setItem(KEYS.USER_GOALS, JSON.stringify(userGoals));
      document.getElementById("onboarding-modal").classList.add("hidden");
      refreshAllViews();
    });
  }

  const reopenBtn = document.getElementById("reopen-onboarding-btn");
  if (reopenBtn) {
    reopenBtn.addEventListener("click", function () {
      document.getElementById("onboarding-modal").classList.remove("hidden");
    });
  }

  // Water Tracker
  window.addWater = function (amount) {
    const data = getActiveDateData();
    data.water += amount;
    saveDailyHistory();
    refreshAllViews();
  };

  window.resetWater = function () {
    const data = getActiveDateData();
    data.water = 0;
    saveDailyHistory();
    refreshAllViews();
  };

  // Meal Modal Handling
  window.openAddFoodModal = function (mealName) {
    currentAddingMeal = mealName;
    document.getElementById("modal-meal-title").textContent = "Add to " + mealName;
    renderFoodLibrary(foodLibrary);
    document.getElementById("food-modal").classList.remove("hidden");
  };

  window.closeFoodModal = function () {
    document.getElementById("food-modal").classList.add("hidden");
  };

  // Search Food
  const searchInput = document.getElementById("food-search-input");
  if (searchInput) {
    searchInput.addEventListener("keyup", function () {
      const q = searchInput.value.toLowerCase().trim();
      const filtered = foodLibrary.filter(f => f.name.toLowerCase().includes(q));
      renderFoodLibrary(filtered);
    });
  }

  function renderFoodLibrary(items) {
    const container = document.getElementById("food-library-list");
    if (!container) return;
    container.innerHTML = "";

    items.forEach((item) => {
      const originalIndex = foodLibrary.indexOf(item);
      const div = document.createElement("div");
      div.className = "food-item";
      div.innerHTML = `
        <div class="food-item-info">
          <h5>${item.name}</h5>
          <p>${item.calories} kcal | P:${item.protein}g C:${item.carbs}g F:${item.fats}g</p>
        </div>
        <button class="btn-sm" onclick="logSelectedFood(${originalIndex})">+ Log</button>
      `;
      container.appendChild(div);
    });
  }

  window.logSelectedFood = function (index) {
    const item = foodLibrary[index];
    const data = getActiveDateData();
    data.foods.push({ ...item, meal: currentAddingMeal });
    saveDailyHistory();
    closeFoodModal();
    refreshAllViews();
  };

  // Add Custom Food
  const addCustomBtn = document.getElementById("add-custom-btn");
  if (addCustomBtn) {
    addCustomBtn.addEventListener("click", function () {
      const name = document.getElementById("custom-name").value.trim();
      const cals = parseFloat(document.getElementById("custom-cals").value) || 0;
      const protein = parseFloat(document.getElementById("custom-protein").value) || 0;
      const carbs = parseFloat(document.getElementById("custom-carbs").value) || 0;
      const fats = parseFloat(document.getElementById("custom-fats").value) || 0;

      if (!name) { alert("Please enter a food name"); return; }

      const newFood = { name: name, calories: cals, protein: protein, carbs: carbs, fats: fats };
      foodLibrary.unshift(newFood);
      localStorage.setItem(KEYS.FOOD_LIB, JSON.stringify(foodLibrary));

      const data = getActiveDateData();
      data.foods.push({ ...newFood, meal: currentAddingMeal });
      saveDailyHistory();

      document.getElementById("custom-name").value = "";
      document.getElementById("custom-cals").value = "";
      document.getElementById("custom-protein").value = "";
      document.getElementById("custom-carbs").value = "";
      document.getElementById("custom-fats").value = "";

      closeFoodModal();
      refreshAllViews();
    });
  }

  // Remove Food
  window.removeLoggedItem = function (i) {
    const data = getActiveDateData();
    data.foods.splice(i, 1);
    saveDailyHistory();
    refreshAllViews();
  };

  // Refresh Views
  function refreshAllViews() {
    if (!userGoals) return;

    // Greeting
    const greeting = document.getElementById("user-greeting");
    if (greeting) greeting.textContent = `Hello, ${userGoals.userName || "Friend"}! 👋`;

    const data = getActiveDateData();
    const totals = data.foods.reduce((acc, f) => ({
      cals: acc.cals + f.calories,
      protein: acc.protein + f.protein,
      carbs: acc.carbs + f.carbs,
      fats: acc.fats + f.fats
    }), { cals: 0, protein: 0, carbs: 0, fats: 0 });

    // Calories Equation
    const remaining = Math.max(0, userGoals.cals - Math.round(totals.cals));
    document.getElementById("target-cals").textContent = userGoals.cals;
    document.getElementById("logged-cals").textContent = Math.round(totals.cals);
    document.getElementById("remaining-cals").textContent = remaining;

    const calPct = Math.min((totals.cals / userGoals.cals) * 100, 100);
    document.getElementById("cal-progress").style.width = calPct + "%";

    // Macros
    document.getElementById("logged-carbs").textContent = Math.round(totals.carbs);
    document.getElementById("target-carbs").textContent = userGoals.carbs;
    document.getElementById("carbs-bar").style.width = Math.min((totals.carbs / userGoals.carbs) * 100, 100) + "%";

    document.getElementById("logged-protein").textContent = Math.round(totals.protein);
    document.getElementById("target-protein").textContent = userGoals.protein;
    document.getElementById("protein-bar").style.width = Math.min((totals.protein / userGoals.protein) * 100, 100) + "%";

    document.getElementById("logged-fats").textContent = Math.round(totals.fats);
    document.getElementById("target-fats").textContent = userGoals.fats;
    document.getElementById("fats-bar").style.width = Math.min((totals.fats / userGoals.fats) * 100, 100) + "%";

    // Water
    document.getElementById("logged-water").textContent = data.water || 0;
    document.getElementById("water-progress").style.width = Math.min(((data.water || 0) / 3000) * 100, 100) + "%";

    // Meal Logs
    renderMealLists(data.foods);

    // History
    renderHistory();
  }

  function renderMealLists(foods) {
    const meals = ["Breakfast", "Lunch", "Dinner", "Snacks"];
    meals.forEach(m => {
      const container = document.getElementById("list-" + m.toLowerCase());
      const calsLabel = document.getElementById("cals-" + m.toLowerCase());
      if (!container) return;

      container.innerHTML = "";
      const mealFoods = foods.filter(f => (f.meal || "Breakfast") === m);
      const totalMealCals = mealFoods.reduce((sum, f) => sum + f.calories, 0);

      if (calsLabel) calsLabel.textContent = Math.round(totalMealCals) + " kcal";

      mealFoods.forEach((item) => {
        const globalIndex = foods.indexOf(item);
        const li = document.createElement("li");
        li.className = "food-item";
        li.innerHTML = `
          <div class="food-item-info">
            <h5>${item.name}</h5>
            <p>${item.calories} kcal | P:${item.protein}g C:${item.carbs}g F:${item.fats}g</p>
          </div>
          <button style="background:none; border:none; color:var(--danger); cursor:pointer;" onclick="removeLoggedItem(${globalIndex})">✕</button>
        `;
        container.appendChild(li);
      });
    });
  }

  function renderHistory() {
    const container = document.getElementById("history-container");
    if (!container) return;
    container.innerHTML = "";

    const dates = Object.keys(dailyHistory).sort().reverse();
    if (dates.length === 0) {
      container.innerHTML = '<p class="sub-text">No history recorded yet.</p>';
      return;
    }

    dates.forEach(dateStr => {
      const dayData = dailyHistory[dateStr];
      const totals = dayData.foods.reduce((acc, curr) => ({ cals: acc.cals + curr.calories }), { cals: 0 });

      const div = document.createElement("div");
      div.className = "food-item";
      div.innerHTML = `
        <div class="food-item-info">
          <h5>📅 ${dateStr}</h5>
          <p>${Math.round(totals.cals)} kcal | 💧 ${dayData.water || 0}ml</p>
        </div>
        <button class="btn-sm" onclick="selectDateFromHistory('${dateStr}')">View / Edit</button>
      `;
      container.appendChild(div);
    });
  }

  window.selectDateFromHistory = function (dateStr) {
    activeDate = dateStr;
    if (activeDateInput) activeDateInput.value = dateStr;
    refreshAllViews();
    switchTab("tab-dash");
  };

  function switchTab(targetTab) {
    document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active-tab"));

    const navBtn = document.querySelector(`[data-tab="${targetTab}"]`);
    const tabEl = document.getElementById(targetTab);
    if (navBtn) navBtn.classList.add("active");
    if (tabEl) tabEl.classList.add("active-tab");

    const titles = {
      "tab-dash": "Dashboard",
      "tab-log": "Diary",
      "tab-history": "History",
      "tab-goals": "Profile"
    };
    document.getElementById("screen-title").textContent = titles[targetTab] || "NT";
  }

  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.addEventListener("click", function () {
      switchTab(btn.getAttribute("data-tab"));
    });
  });

  init();
});
  
