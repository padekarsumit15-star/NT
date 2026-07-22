document.addEventListener("DOMContentLoaded", function () {
  // Food Library merged with Nutrition Chart
  const PRELOADED_67_FOODS = [
    { name: "Chapati / Roti (1 medium)", calories: 120, protein: 3.5, carbs: 22, fats: 2.5 },
    { name: "Chai / Milk Tea (1 cup / 150ml)", calories: 70, protein: 2, carbs: 9, fats: 3 },
    { name: "Bread (1 slice)", calories: 70, protein: 2.5, carbs: 13, fats: 1 },
    { name: "DiSano Chocolate Peanut Butter (32g)", calories: 203, protein: 7.4, carbs: 7.4, fats: 16 },
    { name: "Doodh / Milk (250 ml)", calories: 150, protein: 8, carbs: 12, fats: 8 },
    { name: "Kela / Banana (1 medium)", calories: 105, protein: 1.3, carbs: 27, fats: 0.3 },
    { name: "Sukha Meva Mix / Dry Fruits (1 serving)", calories: 90, protein: 3, carbs: 7, fats: 6 },
    { name: "Shevga Pala Bhaji / Moringa Leaves (1 katori)", calories: 60, protein: 4, carbs: 8, fats: 1 },
    { name: "Vangi Bhaji / Brinjal (1 katori)", calories: 70, protein: 2, carbs: 8, fats: 4 },
    { name: "Batata Bhaji / Potato (1 katori)", calories: 140, protein: 3, carbs: 24, fats: 4 },
    { name: "Hulgyacha Kadhan / Horse Gram (1 katori)", calories: 140, protein: 10, carbs: 22, fats: 1 },
    { name: "Kala Chana Bhaji / Brown Chickpeas (1 katori)", calories: 165, protein: 9, carbs: 27, fats: 3 },
    { name: "Tooricha Kadhan / Red Gram (1 katori)", calories: 150, protein: 10, carbs: 25, fats: 2 },
    { name: "Moongacha Kadhan / Green Mung (1 katori)", calories: 130, protein: 9, carbs: 22, fats: 1 },
    { name: "Chawal / Rice (100g cooked)", calories: 130, protein: 2.7, carbs: 28, fats: 0.3 },
    { name: "Dal (1 katori)", calories: 150, protein: 9, carbs: 24, fats: 2 },
    { name: "Amti (1 katori)", calories: 150, protein: 9, carbs: 22, fats: 3 },
    { name: "Anda / Egg (1 large)", calories: 72, protein: 6.3, carbs: 0.4, fats: 5 },
    { name: "Soyabean Chunks Sabji (30g dry cooked)", calories: 105, protein: 15, carbs: 9, fats: 0.5 },
    { name: "Chicken Curry (1 katori / ~100g)", calories: 190, protein: 27, carbs: 3, fats: 8 },
    { name: "Anda Curry / Egg Curry (1 katori / 2 eggs)", calories: 190, protein: 13, carbs: 5, fats: 13 },
    { name: "Cauliflower / Phulkobi (1 katori)", calories: 65, protein: 2.5, carbs: 6, fats: 3 },
    { name: "Kobi Bhaji / Cabbage (1 katori)", calories: 55, protein: 1.8, carbs: 7, fats: 2 },
    { name: "Bhindi Bhaji / Okra (1 katori)", calories: 70, protein: 2.5, carbs: 9, fats: 3 },
    { name: "Lauki / Dudhi Bhaji (1 katori)", calories: 45, protein: 1.5, carbs: 6, fats: 1.5 },
    { name: "Turai / Dodka Bhaji (1 katori)", calories: 50, protein: 1.8, carbs: 6, fats: 2 },
    { name: "Gilki / Ghosale Bhaji (1 katori)", calories: 45, protein: 1.5, carbs: 5, fats: 2 },
    { name: "Karela / Karle Bhaji (1 katori)", calories: 55, protein: 2, carbs: 6, fats: 3 },
    { name: "Bhopla Bhaji / Pumpkin (1 katori)", calories: 60, protein: 1.5, carbs: 10, fats: 2 },
    { name: "Tondli Bhaji / Ivy Gourd (1 katori)", calories: 55, protein: 2, carbs: 6, fats: 2.5 },
    { name: "Gawar Bhaji / Cluster Beans (1 katori)", calories: 65, protein: 3, carbs: 8, fats: 2 },
    { name: "French Beans Bhaji (1 katori)", calories: 60, protein: 2.5, carbs: 8, fats: 2 },
    { name: "Matar Bhaji / Green Peas (1 katori)", calories: 90, protein: 5, carbs: 14, fats: 2 },
    { name: "Shimla Mirch / Capsicum (1 katori)", calories: 40, protein: 1.2, carbs: 6, fats: 1.5 },
    { name: "Palak Bhaji / Spinach (1 katori)", calories: 55, protein: 4, carbs: 5, fats: 2.5 },
    { name: "Methi Bhaji / Fenugreek Leaves (1 katori)", calories: 55, protein: 4, carbs: 6, fats: 2 },
    { name: "Chaulai / Math Bhaji (1 katori)", calories: 50, protein: 3.5, carbs: 6, fats: 1.5 },
    { name: "Shevga Shenga / Drumstick Pods (1 katori)", calories: 65, protein: 3, carbs: 10, fats: 1.5 },
    { name: "Mooli / Radish Bhaji (1 katori)", calories: 40, protein: 1.5, carbs: 6, fats: 1.5 },
    { name: "Gajar / Carrot (1 medium)", calories: 25, protein: 0.6, carbs: 6, fats: 0.1 },
    { name: "Beet / Beetroot (1 medium)", calories: 35, protein: 1.3, carbs: 8, fats: 0.1 },
    { name: "Kakdi / Cucumber (1 medium)", calories: 45, protein: 2, carbs: 11, fats: 0.3 },
    { name: "Tamatar / Tomato (1 medium)", calories: 22, protein: 1, carbs: 5, fats: 0.2 },
    { name: "Pyaz / Kanda (1 medium)", calories: 44, protein: 1.2, carbs: 10, fats: 0.1 },
    { name: "Mix Veg Bhaji (1 katori)", calories: 90, protein: 3, carbs: 12, fats: 3 },
    { name: "Kabuli Chana / Chickpeas (1 katori)", calories: 165, protein: 9, carbs: 27, fats: 3 },
    { name: "Rajma / Kidney Beans (1 katori)", calories: 160, protein: 10, carbs: 27, fats: 1 },
    { name: "Urad Dal (1 katori)", calories: 150, protein: 10, carbs: 25, fats: 1.5 },
    { name: "Masoor Dal (1 katori)", calories: 145, protein: 10, carbs: 24, fats: 1 },
    { name: "Chana Dal (1 katori)", calories: 165, protein: 10, carbs: 27, fats: 3 },
    { name: "Mixed Sprouts / Usal (1 katori)", calories: 120, protein: 8, carbs: 18, fats: 2 },
    { name: "Machhi Curry / Fish Curry (1 katori)", calories: 170, protein: 20, carbs: 4, fats: 8 },
    { name: "Mutton Rassa / Curry (1 katori)", calories: 250, protein: 20, carbs: 4, fats: 17 },
    { name: "Omelette (2 eggs)", calories: 155, protein: 12, carbs: 1, fats: 12 },
    { name: "Idli (2 pieces)", calories: 78, protein: 2.4, carbs: 16, fats: 0.3 },
    { name: "Dosa (1 medium)", calories: 130, protein: 3, carbs: 20, fats: 3.5 },
    { name: "Uttapam (1 medium)", calories: 160, protein: 4, carbs: 25, fats: 4 },
    { name: "Kanda Poha (1 plate)", calories: 250, protein: 5, carbs: 45, fats: 6 },
    { name: "Upma (1 bowl)", calories: 220, protein: 5, carbs: 35, fats: 7 },
    { name: "Sabudana Khichdi (1 bowl)", calories: 250, protein: 3, carbs: 45, fats: 7 },
    { name: "Dahi / Curd (1 katori)", calories: 100, protein: 5, carbs: 8, fats: 5 },
    { name: "Tak / Buttermilk (1 glass)", calories: 40, protein: 2, carbs: 4, fats: 1.5 },
    { name: "Paneer (100g)", calories: 265, protein: 18, carbs: 4, fats: 20 },
    { name: "Jowar Bhakri (1 medium)", calories: 130, protein: 3.5, carbs: 25, fats: 1.5 },
    { name: "Bajra Bhakri (1 medium)", calories: 140, protein: 4, carbs: 24, fats: 3 },
    { name: "Paratha (1 medium)", calories: 180, protein: 4, carbs: 25, fats: 7 },
    { name: "Puri (1 piece)", calories: 100, protein: 2, carbs: 10, fats: 6 },
    { name: "Oats with Whole Milk & Peanut Butter", calories: 550, protein: 20, carbs: 65, fats: 22 },
    { name: "Boiled Eggs (3 whole)", calories: 210, protein: 18, carbs: 1.5, fats: 15 },
    { name: "Egg White Omelette (4 eggs)", calories: 70, protein: 14, carbs: 1, fats: 0.5 },
    { name: "Chicken Breast Curry (150g)", calories: 280, protein: 38, carbs: 6, fats: 11 },
    { name: "Paneer Butter Masala (150g)", calories: 360, protein: 16, carbs: 12, fats: 28 },
    { name: "Banana Peanut Butter Shake", calories: 450, protein: 14, carbs: 55, fats: 20 },
    { name: "Roasted Peanuts (50g)", calories: 290, protein: 13, carbs: 8, fats: 24 },
    { name: "Almonds (15 pieces / 18g)", calories: 105, protein: 4, carbs: 3.8, fats: 9 },
    { name: "Walnuts (10 halves / 20g)", calories: 130, protein: 3, carbs: 2.7, fats: 13 },
    { name: "Soya Chunks Curry", calories: 230, protein: 28, carbs: 18, fats: 6 },
    { name: "Grilled Chicken Breast (150g)", calories: 240, protein: 42, carbs: 0, fats: 5 },
    { name: "Egg Bhurji (3 eggs)", calories: 260, protein: 19, carbs: 4, fats: 18 },
    { name: "Chicken Biryani (1 plate)", calories: 480, protein: 28, carbs: 58, fats: 15 },
    { name: "Whey Protein Scoop (30g)", calories: 120, protein: 24, carbs: 2, fats: 1.5 },
    { name: "Whey & Oats Protein Smoothie", calories: 420, protein: 32, carbs: 50, fats: 8 }
  ];

  const KEYS = {
    USER_GOALS: "user_goals",
    FOOD_LIB: "food_library",
    DAILY_HISTORY: "daily_history"
  };

  let userGoals = JSON.parse(localStorage.getItem(KEYS.USER_GOALS)) || null;
  let foodLibrary = PRELOADED_67_FOODS;
  let dailyHistory = JSON.parse(localStorage.getItem(KEYS.DAILY_HISTORY)) || {};

  localStorage.setItem(KEYS.FOOD_LIB, JSON.stringify(PRELOADED_67_FOODS));

  function getTodayISO() {
    const d = new Date();
    return d.toISOString().split("T")[0];
  }

  let activeDate = getTodayISO();

  function getActiveDateData() {
    if (!dailyHistory[activeDate]) {
      dailyHistory[activeDate] = { foods: [], water: 0 };
    }
    return dailyHistory[activeDate];
  }

  function saveDailyHistory() {
    localStorage.setItem(KEYS.DAILY_HISTORY, JSON.stringify(dailyHistory));
  }

  const onboardingModal = document.getElementById("onboarding-modal");
  const activeDateInput = document.getElementById("active-date");
  const foodSearchInput = document.getElementById("food-search-input");
  const searchBtn = document.getElementById("search-btn");
  const foodLibraryList = document.getElementById("food-library-list");
  const todayLoggedList = document.getElementById("today-logged-list");
  const historyContainer = document.getElementById("history-container");

  function init() {
    if (activeDateInput) activeDateInput.value = activeDate;

    if (!userGoals) {
      if (onboardingModal) onboardingModal.classList.remove("hidden");
    } else {
      updateDashboardUI();
    }

    renderFoodLibrary(foodLibrary);
    renderLoggedItems();
    updateWaterUI();
    renderHistoryTab();
  }

  if (activeDateInput) {
    activeDateInput.addEventListener("change", function (e) {
      activeDate = e.target.value;
      updateDashboardUI();
      renderLoggedItems();
      updateWaterUI();
    });
  }
  const saveOnboardingBtn = document.getElementById("save-onboarding-btn");
  if (saveOnboardingBtn) {
    saveOnboardingBtn.addEventListener("click", function () {
      const nameInput = document.getElementById("init-name");
      const userName = nameInput && nameInput.value.trim() !== "" ? nameInput.value.trim() : "Friend";
      const age = parseFloat(document.getElementById("init-age") ? document.getElementById("init-age").value : 22) || 22;
      const gender = document.getElementById("init-gender") ? document.getElementById("init-gender").value : "male";
      const height = parseFloat(document.getElementById("init-height") ? document.getElementById("init-height").value : 170) || 170;
      const weight = parseFloat(document.getElementById("init-weight") ? document.getElementById("init-weight").value : 60) || 60;
      const activity = parseFloat(document.getElementById("init-activity") ? document.getElementById("init-activity").value : 1.55) || 1.55;
      const goalType = document.getElementById("init-goal") ? document.getElementById("init-goal").value : "gain";

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
      if (onboardingModal) onboardingModal.classList.add("hidden");
      updateDashboardUI();
    });
  }

  const reopenOnboardingBtn = document.getElementById("reopen-onboarding-btn");
  if (reopenOnboardingBtn) {
    reopenOnboardingBtn.addEventListener("click", function () {
      if (onboardingModal) onboardingModal.classList.remove("hidden");
    });
  }

  window.addWater = function (amountMl) {
    const data = getActiveDateData();
    data.water += amountMl;
    saveDailyHistory();
    updateWaterUI();
    renderHistoryTab();
  };

  window.resetWater = function () {
    const data = getActiveDateData();
    data.water = 0;
    saveDailyHistory();
    updateWaterUI();
    renderHistoryTab();
  };

  function updateWaterUI() {
    const data = getActiveDateData();
    const loggedWater = document.getElementById("logged-water");
    const waterProgress = document.getElementById("water-progress");
    if (loggedWater) loggedWater.textContent = data.water;
    const targetWater = 3000;
    const pct = Math.min((data.water / targetWater) * 100, 100);
    if (waterProgress) waterProgress.style.width = pct + "%";
  }

  function handleSearch() {
    if (!foodSearchInput) return;
    const query = foodSearchInput.value.toLowerCase().trim();
    const filtered = foodLibrary.filter(function (item) {
      return item.name.toLowerCase().includes(query);
    });
    renderFoodLibrary(filtered);
  }

  if (searchBtn) searchBtn.addEventListener("click", handleSearch);
  if (foodSearchInput) foodSearchInput.addEventListener("keyup", handleSearch);

  function renderFoodLibrary(items) {
    if (!foodLibraryList) return;
    foodLibraryList.innerHTML = "";
    if (items.length === 0) {
      foodLibraryList.innerHTML = '<p style="color: var(--text-secondary); font-size:0.85rem;">No matching food found.</p>';
      return;
    }

    items.forEach(function (item, index) {
      const div = document.createElement("div");
      div.className = "food-item";
      div.innerHTML = `
        <div class="food-item-info">
          <h5>${item.name}</h5>
          <p>${item.calories} kcal | P: ${item.protein}g | C: ${item.carbs}g | F: ${item.fats}g</p>
        </div>
        <button class="add-btn-sm" onclick="logFoodItem(${index})">+ Log</button>
      `;
      foodLibraryList.appendChild(div);
    });
  }

  window.logFoodItem = function (index) {
    const item = foodLibrary[index];
    const data = getActiveDateData();
    data.foods.push(item);
    saveDailyHistory();
    renderLoggedItems();
    updateDashboardUI();
    renderHistoryTab();
    alert("Added " + item.name + " to log for " + activeDate + "!");
  };

  function renderLoggedItems() {
    if (!todayLoggedList) return;
    todayLoggedList.innerHTML = "";
    const data = getActiveDateData();

    if (data.foods.length === 0) {
      todayLoggedList.innerHTML = '<p style="color: var(--text-secondary); font-size:0.85rem;">No foods logged for ' + activeDate + ".</p>";
      return;
    }

    data.foods.forEach(function (item, i) {
      const li = document.createElement("li");
      li.className = "food-item";
      li.innerHTML = `
        <div class="food-item-info">
          <h5>${item.name}</h5>
          <p>${item.calories} kcal | P:${item.protein}g C:${item.carbs}g F:${item.fats}g</p>
        </div>
        <button style="background:none; border:none; color:var(--danger); cursor:pointer; font-weight:bold;" onclick="removeLoggedItem(${i})">✕</button>
      `;
      todayLoggedList.appendChild(li);
    });
  }

  window.removeLoggedItem = function (i) {
    const data = getActiveDateData();
    data.foods.splice(i, 1);
    saveDailyHistory();
    renderLoggedItems();
    updateDashboardUI();
    renderHistoryTab();
  };

  const addCustomBtn = document.getElementById("add-custom-btn");
  if (addCustomBtn) {
    addCustomBtn.addEventListener("click", function () {
      const nameEl = document.getElementById("custom-name");
      const calsEl = document.getElementById("custom-cals");
      const proteinEl = document.getElementById("custom-protein");
      const carbsEl = document.getElementById("custom-carbs");
      const fatsEl = document.getElementById("custom-fats");
      const saveLibEl = document.getElementById("custom-save-lib");

      const name = nameEl ? nameEl.value.trim() : "";
      const cals = calsEl ? parseFloat(calsEl.value) || 0 : 0;
      const protein = proteinEl ? parseFloat(proteinEl.value) || 0 : 0;
      const carbs = carbsEl ? parseFloat(carbsEl.value) || 0 : 0;
      const fats = fatsEl ? parseFloat(fatsEl.value) || 0 : 0;
      const saveLib = saveLibEl ? saveLibEl.checked : false;

      if (!name) { alert("Please enter a food name"); return; }

      const newFood = { name: name, calories: cals, protein: protein, carbs: carbs, fats: fats };
      const data = getActiveDateData();
      data.foods.push(newFood);

      if (saveLib) {
        foodLibrary.unshift(newFood);
        localStorage.setItem(KEYS.FOOD_LIB, JSON.stringify(foodLibrary));
        renderFoodLibrary(foodLibrary);
      }

      saveDailyHistory();
      renderLoggedItems();
      updateDashboardUI();
      renderHistoryTab();

      if (nameEl) nameEl.value = "";
      if (calsEl) calsEl.value = "";
      if (proteinEl) proteinEl.value = "";
      if (carbsEl) carbsEl.value = "";
      if (fatsEl) fatsEl.value = "";
    });
  }

  function updateDashboardUI() {
    if (!userGoals) return;

    // Greeting Banner
    const userGreeting = document.getElementById("user-greeting");
    if (userGreeting) {
      const name = userGoals.userName || "Friend";
      userGreeting.textContent = `Hello, ${name}! 👋`;
    }

    const data = getActiveDateData();
    const totals = data.foods.reduce(function (acc, curr) {
      return {
        cals: acc.cals + curr.calories,
        protein: acc.protein + curr.protein,
        carbs: acc.carbs + curr.carbs,
        fats: acc.fats + curr.fats
      };
    }, { cals: 0, protein: 0, carbs: 0, fats: 0 });

    const loggedCals = document.getElementById("logged-cals");
    const targetCals = document.getElementById("target-cals");
    const loggedProtein = document.getElementById("logged-protein");
    const targetProtein = document.getElementById("target-protein");
    const loggedCarbs = document.getElementById("logged-carbs");
    const targetCarbs = document.getElementById("target-carbs");
    const loggedFats = document.getElementById("logged-fats");
    const targetFats = document.getElementById("target-fats");
    const calProgress = document.getElementById("cal-progress");

    if (loggedCals) loggedCals.textContent = Math.round(totals.cals);
    if (targetCals) targetCals.textContent = userGoals.cals;
    if (loggedProtein) loggedProtein.textContent = Math.round(totals.protein);
    if (targetProtein) targetProtein.textContent = userGoals.protein;
    if (loggedCarbs) loggedCarbs.textContent = Math.round(totals.carbs);
    if (targetCarbs) targetCarbs.textContent = userGoals.carbs;
    if (loggedFats) loggedFats.textContent = Math.round(totals.fats);
    if (targetFats) targetFats.textContent = userGoals.fats;

    const pct = Math.min((totals.cals / userGoals.cals) * 100, 100);
    if (calProgress) calProgress.style.width = pct + "%";
  }

  function renderHistoryTab() {
    if (!historyContainer) return;
    historyContainer.innerHTML = "";
    const dates = Object.keys(dailyHistory).sort().reverse();

    if (dates.length === 0) {
      historyContainer.innerHTML = '<p style="color: var(--text-secondary); font-size:0.85rem;">No history recorded yet.</p>';
      return;
    }

    dates.forEach(function (dateStr) {
      const dayData = dailyHistory[dateStr];
      const totals = dayData.foods.reduce(function (acc, curr) {
        return {
          cals: acc.cals + curr.calories,
          protein: acc.protein + curr.protein
        };
      }, { cals: 0, protein: 0 });

      const div = document.createElement("div");
      div.className = "history-item";
      div.innerHTML = `
        <div class="history-item-info">
          <h5>📅 ${dateStr}</h5>
          <p>${Math.round(totals.cals)} kcal | P: ${Math.round(totals.protein)}g | 💧 ${dayData.water || 0}ml</p>
        </div>
        <button class="add-btn-sm" onclick="selectDateFromHistory('${dateStr}')">View / Edit</button>
      `;
      historyContainer.appendChild(div);
    });
  }

  window.selectDateFromHistory = function (dateStr) {
    activeDate = dateStr;
    if (activeDateInput) activeDateInput.value = dateStr;
    updateDashboardUI();
    renderLoggedItems();
    updateWaterUI();

    document.querySelectorAll(".nav-btn").forEach(function (b) { b.classList.remove("active"); });
    document.querySelectorAll(".tab-content").forEach(function (tab) { tab.classList.remove("active-tab"); });
    const dashNav = document.querySelector('[data-tab="tab-dash"]');
    const dashTab = document.getElementById("tab-dash");
    const screenTitle = document.getElementById("screen-title");

    if (dashNav) dashNav.classList.add("active");
    if (dashTab) dashTab.classList.add("active-tab");
    if (screenTitle) screenTitle.textContent = "Dashboard";
  };

  document.querySelectorAll(".nav-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.querySelectorAll(".nav-btn").forEach(function (b) { b.classList.remove("active"); });
      document.querySelectorAll(".tab-content").forEach(function (tab) { tab.classList.remove("active-tab"); });

      btn.classList.add("active");
      const targetTab = btn.getAttribute("data-tab");
      const tabEl = document.getElementById(targetTab);
      if (tabEl) tabEl.classList.add("active-tab");

      const titles = {
        "tab-dash": "Dashboard",
        "tab-log": "Food & Library",
        "tab-history": "Past History",
        "tab-goals": "Goals & Settings"
      };
      const screenTitle = document.getElementById("screen-title");
      if (screenTitle) screenTitle.textContent = titles[targetTab];
    });
  });

  init();
});
