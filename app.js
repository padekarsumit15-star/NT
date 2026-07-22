document.addEventListener("DOMContentLoaded", function () {
  const KEYS = {
    USER_GOALS: "nt_user_goals",
    DAILY_LOGS: "nt_daily_logs",
    FOOD_LIB: "nt_food_lib"
  };

  // 67 Indian Foods Library
  const defaultFoodLibrary = [
    // --- STAPLES & GRAINS ---
    { name: "Roti / Chapati (1 pc)", calories: 100, protein: 3, carbs: 18, fats: 2 },
    { name: "Butter Roti / Paratha (1 pc)", calories: 150, protein: 3.5, carbs: 20, fats: 6 },
    { name: "Aloo Paratha (1 pc)", calories: 290, protein: 6, carbs: 42, fats: 11 },
    { name: "Cooked White Rice (1 bowl / 150g)", calories: 195, protein: 3.8, carbs: 43, fats: 0.5 },
    { name: "Cooked Brown Rice (1 bowl / 150g)", calories: 168, protein: 3.8, carbs: 36, fats: 1.4 },
    { name: "Jeera Rice (1 bowl)", calories: 210, protein: 4, carbs: 44, fats: 2.5 },
    { name: "Veg Biryani (1 plate)", calories: 320, protein: 6.5, carbs: 52, fats: 9.5 },
    { name: "Chicken Biryani (1 plate)", calories: 450, protein: 28, carbs: 54, fats: 14 },
    { name: "Naan (1 pc)", calories: 260, protein: 7.5, carbs: 45, fats: 5 },
    { name: "Bhakri (Jowar/Bajra, 1 pc)", calories: 140, protein: 3.5, carbs: 28, fats: 1.5 },

    // --- DALS & KATHOL ---
    { name: "Toor Dal (1 bowl)", calories: 140, protein: 8, carbs: 20, fats: 3 },
    { name: "Moong Dal (1 bowl)", calories: 120, protein: 7.5, carbs: 18, fats: 2 },
    { name: "Chana Dal (1 bowl)", calories: 160, protein: 9, carbs: 24, fats: 3 },
    { name: "Dal Tadka (1 bowl)", calories: 175, protein: 8, carbs: 21, fats: 6.5 },
    { name: "Dal Makhani (1 bowl)", calories: 260, protein: 9, carbs: 26, fats: 13.5 },
    { name: "Rajma Masala (1 bowl)", calories: 210, protein: 11, carbs: 32, fats: 4 },
    { name: "Chole / Chana Masala (1 bowl)", calories: 230, protein: 11.5, carbs: 34, fats: 5 },
    { name: "Usal / Misal Curry (1 bowl)", calories: 180, protein: 9.5, carbs: 25, fats: 5 },
    { name: "Kadhi (1 bowl)", calories: 130, protein: 4, carbs: 12, fats: 7 },

    // --- VEGETABLE BHAJIS & CURRIES ---
    { name: "Batata Bhaji / Potato Curry (1 bowl)", calories: 170, protein: 3, carbs: 26, fats: 6 },
    { name: "Bhindi Masala (1 bowl)", calories: 130, protein: 2.5, carbs: 12, fats: 8 },
    { name: "Palak Paneer (1 bowl)", calories: 280, protein: 14, carbs: 10, fats: 20 },
    { name: "Paneer Butter Masala (1 bowl)", calories: 340, protein: 13, carbs: 14, fats: 26 },
    { name: "Aloo Gobi (1 bowl)", calories: 150, protein: 3.5, carbs: 20, fats: 6.5 },
    { name: "Mix Veg Curry (1 bowl)", calories: 140, protein: 3.5, carbs: 16, fats: 7 },
    { name: "Baingan Bharta (1 bowl)", calories: 125, protein: 2.5, carbs: 12, fats: 7.5 },
    { name: "Methi Bhaji (1 bowl)", calories: 110, protein: 3, carbs: 9, fats: 6.5 },
    { name: "Shev Bhaji (1 bowl)", calories: 290, protein: 7, carbs: 22, fats: 19 },
    { name: "Soyabean Curry (1 bowl)", calories: 220, protein: 18, carbs: 14, fats: 10 },

    // --- PROTEINS (NON-VEG & EGGS) ---
    { name: "Boiled Egg (1 large)", calories: 78, protein: 6.3, carbs: 0.6, fats: 5.3 },
    { name: "Egg Omelette (2 eggs, oil)", calories: 210, protein: 13, carbs: 2, fats: 16 },
    { name: "Egg Bhurji (2 eggs)", calories: 230, protein: 14, carbs: 4, fats: 17 },
    { name: "Chicken Breast (Cooked 100g)", calories: 165, protein: 31, carbs: 0, fats: 3.6 },
    { name: "Chicken Curry (1 bowl)", calories: 270, protein: 24, carbs: 8, fats: 16 },
    { name: "Chicken Fry (100g)", calories: 240, protein: 26, carbs: 3, fats: 13 },
    { name: "Egg Curry (2 eggs)", calories: 260, protein: 15, carbs: 7, fats: 18 },
    { name: "Fish Fry (1 piece)", calories: 210, protein: 20, carbs: 5, fats: 12 },
    { name: "Fish Curry (1 bowl)", calories: 230, protein: 22, carbs: 6, fats: 13 },
    { name: "Mutton Curry (1 bowl)", calories: 360, protein: 26, carbs: 6, fats: 25 },

    // --- DAIRY & SUPPLEMENTS ---
    { name: "Whole Milk (1 glass / 250ml)", calories: 150, protein: 8, carbs: 12, fats: 8 },
    { name: "Skimmed Milk (1 glass / 250ml)", calories: 90, protein: 8.5, carbs: 12, fats: 0.5 },
    { name: "Curd / Dahi (1 cup / 150g)", calories: 100, protein: 5, carbs: 7, fats: 6 },
    { name: "Paneer (Raw 100g)", calories: 265, protein: 18, carbs: 1.2, fats: 20 },
    { name: "Whey Protein (1 scoop / 30g)", calories: 120, protein: 24, carbs: 2, fats: 1.5 },
    { name: "Buttermilk / Taak (1 glass)", calories: 45, protein: 2, carbs: 4, fats: 2 },
    { name: "Greek Yogurt (100g)", calories: 97, protein: 9, carbs: 4, fats: 5 },

    // --- BREAKFAST & SNACKS ---
    { name: "Poha (1 plate)", calories: 220, protein: 4, carbs: 42, fats: 5 },
    { name: "Upma (1 plate)", calories: 210, protein: 4.5, carbs: 38, fats: 5 },
    { name: "Idli (2 pcs with Chutney)", calories: 150, protein: 4, carbs: 30, fats: 1.5 },
    { name: "Meda Vada (2 pcs)", calories: 290, protein: 6, carbs: 32, fats: 15 },
    { name: "Dosa (Plain, 1 pc)", calories: 170, protein: 3.5, carbs: 29, fats: 4.5 },
    { name: "Masala Dosa (1 pc)", calories: 310, protein: 5.5, carbs: 46, fats: 11 },
    { name: "Samosa (1 pc)", calories: 260, protein: 4, carbs: 32, fats: 13 },
    { name: "Vada Pav (1 pc)", calories: 290, protein: 5, carbs: 38, fats: 13 },
    { name: "Sprouted Moong Salad (1 bowl)", calories: 120, protein: 8, carbs: 20, fats: 1 },
    { name: "Peanut Butter (2 tbsp / 32g)", calories: 190, protein: 8, carbs: 7, fats: 16 },
    { name: "Roasted Chana (1 handful / 30g)", calories: 120, protein: 6, carbs: 18, fats: 2 },

    // --- FRUITS & NUTS ---
    { name: "Banana (1 medium)", calories: 105, protein: 1.3, carbs: 27, fats: 0.3 },
    { name: "Apple (1 medium)", calories: 95, protein: 0.5, carbs: 25, fats: 0.3 },
    { name: "Almonds / Badam (10 pcs)", calories: 70, protein: 2.5, carbs: 2.5, fats: 6 },
    { name: "Walnuts / Akhrot (5 pcs)", calories: 130, protein: 3, carbs: 3, fats: 13 },
    { name: "Cashews / Kaju (10 pcs)", calories: 90, protein: 2.5, carbs: 5, fats: 7 },
    { name: "Dates / Khajur (3 pcs)", calories: 66, protein: 0.5, carbs: 18, fats: 0 },
    { name: "Oats with Milk (1 bowl)", calories: 270, protein: 11, carbs: 42, fats: 6 },
    { name: "Mango (1 medium)", calories: 135, protein: 1, carbs: 35, fats: 0.5 },
    { name: "Papaya (1 bowl / 150g)", calories: 60, protein: 0.8, carbs: 15, fats: 0.2 },
    { name: "Guava / Amrood (1 medium)", calories: 68, protein: 2.6, carbs: 14, fats: 1 }
  ];

  let activeDate = new Date().toISOString().split("T")[0];
  let currentAddingMeal = "Breakfast";

  let userGoals = JSON.parse(localStorage.getItem(KEYS.USER_GOALS)) || null;
  let dailyHistory = JSON.parse(localStorage.getItem(KEYS.DAILY_LOGS)) || {};
  
  // Ensure the library defaults to full list if saved library is outdated
  let foodLibrary = JSON.parse(localStorage.getItem(KEYS.FOOD_LIB));
  if (!foodLibrary || foodLibrary.length < defaultFoodLibrary.length) {
    foodLibrary = defaultFoodLibrary;
    localStorage.setItem(KEYS.FOOD_LIB, JSON.stringify(foodLibrary));
  }

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
      
